import Stripe from "stripe";
import { randomUUID } from "crypto";
import status from "http-status";
import config from "../../config";
import { prisma } from "../../lib/prisma";
import { AppError } from "../../utils/AppError";


const stripe = new Stripe(config.stripe_secret_key);

const isUniqueConstraintError = (error: unknown): boolean =>
    typeof error === "object" && error !== null && (error as { code?: string }).code === "P2002";

const MAX_CREATE_PAYMENT_ATTEMPTS = 3;

const createPayment = async(rentalRequestId:string, tenantId:string)=>{

    const rentalRequest = await prisma.rentalRequests.findFirst({
        where : {
            id : rentalRequestId,
            tenantId: tenantId,
            status : "APPROVED"
        },
        include : {
            property :true
        }
    });

    if(!rentalRequest){
        throw new AppError(status.NOT_FOUND, "Rental request not found or not approved")
    }

    if(rentalRequest.property.status !== "AVAILABLE"){
        throw new AppError(status.CONFLICT, "This property is no longer available")
    }

    const amount = rentalRequest.agreedPrice ?? rentalRequest.property.price;

    for(let attempt = 1; attempt <= MAX_CREATE_PAYMENT_ATTEMPTS; attempt++){
        // Reuse an existing PENDING/FAILED payment row so a retry doesn't hit
        // the rentalRequestId unique constraint; only PAID blocks a new attempt.
        const existingPayment = await prisma.payments.findUnique({
            where : { rentalRequestId }
        });

        if(existingPayment?.status === "PAID"){
            throw new AppError(status.CONFLICT, "Payment already completed for this rental request")
        }

        try {
            // Everything below runs on one DB transaction. If the Stripe call
            // throws, Prisma automatically rolls back any write made inside
            // it - e.g. the freshly-created PENDING row - so no orphaned
            // payment is ever left behind. A higher `timeout` gives the
            // Stripe round-trip room to finish before Prisma gives up on it.
            return await prisma.$transaction(async(tx)=>{
                const payment = existingPayment
                    ? existingPayment
                    : await tx.payments.create({
                        data : {
                            id : randomUUID(),
                            rentalRequestId,
                            amount,
                            status : "PENDING"
                        }
                    });

                const session = await stripe.checkout.sessions.create({
                    mode : "payment",

                    line_items:[
                        {
                            price_data:{
                                currency : "eur",

                                product_data : {
                                    name: rentalRequest.property.title
                                },
                                unit_amount: Math.round(Number(amount) * 100)
                            },
                            quantity : 1
                        }
                    ],
                    metadata : {
                        paymentId : payment.id,
                        rentalRequestId : rentalRequest.id
                    },

                    success_url: `${config.front_url}/payment/success?session_id={CHECKOUT_SESSION_ID}`,
                    cancel_url: `${config.front_url}/payment/cancel`,

                });

                const updatedPayment = await tx.payments.update({
                    where : { id : payment.id },
                    data : {
                        amount,
                        checkoutSessionId : session.id,
                        status : "PENDING"
                    }
                });

                return {
                    payment : updatedPayment,
                    checkoutUrl: session.url
                };
            }, { timeout: 10000 });
        } catch (error) {
            if(isUniqueConstraintError(error) && attempt < MAX_CREATE_PAYMENT_ATTEMPTS){
                // Lost a create race to a concurrent request for the same
                // rental request - loop back and reuse the row it made.
                continue;
            }
            throw error;
        }
    }

    throw new AppError(status.CONFLICT, "Could not start payment, please try again");
}

const handleStripeWebhook = async(payLoad:Buffer, signature:string)=>{
    let event: Stripe.Event;

    try {
        event = stripe.webhooks.constructEvent(payLoad,signature,config.stripe_webhook_secret)
    } catch (error:any) {
        throw new AppError(status.BAD_REQUEST, "Invalid Stripe webhook signature");
    }
    console.log("I am inside webhook")
    console.log(payLoad)
    switch(event.type){
        case "checkout.session.completed": {
            const session = event.data.object;
            const paymentId = session.metadata?.paymentId;

            if(!paymentId) break;

            const payment = await prisma.payments.findUnique({
                where : { id : paymentId },
                include : { rentalRequest : true }
            });

            // Unknown payment, or a duplicate delivery of an event we already processed.
            if(!payment || payment.status === "PAID") break;

            const expectedAmount = Math.round(Number(payment.amount) * 100);

            if(session.amount_total !== expectedAmount){
                console.error(`Stripe amount mismatch for payment ${paymentId}: expected ${expectedAmount}, got ${session.amount_total}`);
                break;
            }

            const result = await prisma.$transaction(async(tx)=>{
                // Atomic claim: only the first webhook to land wins the property.
                const claimed = await tx.properties.updateMany({
                    where : { id : payment.rentalRequest.propertyId, status : "AVAILABLE" },
                    data : { status : "RENTED" }
                });

                if(claimed.count === 0){
                    await tx.payments.updateMany({
                        where : { id : paymentId, status : { not : "PAID" } },
                        data : { status : "FAILED", transactionId : session.payment_intent as string }
                    });
                    return { conflict : true };
                }

                await tx.payments.updateMany({
                    where : { id : paymentId, status : { not : "PAID" } },
                    data : {
                        status : "PAID",
                        transactionId: session.payment_intent as string,
                        method : "CARD",
                        paidAt : new Date()
                    }
                });

                return { conflict : false };
            });

            if(result.conflict){
                console.error(`Property ${payment.rentalRequest.propertyId} was already rented when payment ${paymentId} completed — refunding.`);
                try {
                    await stripe.refunds.create({ payment_intent : session.payment_intent as string });
                } catch (refundError) {
                    console.error(`Failed to auto-refund payment ${paymentId}:`, refundError);
                }
            }

            break;
        }

        case "checkout.session.expired": {
            const session = event.data.object;
            const paymentId = session.metadata?.paymentId;

            if(!paymentId) break;

            await prisma.payments.updateMany({
                where : { id : paymentId, status : "PENDING" },
                data : { status : "FAILED" }
            });

            break;
        }

        case "charge.refunded": {
            const charge = event.data.object;
            const paymentIntentId = charge.payment_intent as string | null;

            if(!paymentIntentId) break;

            await prisma.payments.updateMany({
                where : { transactionId : paymentIntentId, status : "PAID" },
                data : { status : "REFUNDED" }
            });

            break;
        }
    }

    return event
}



const getMyPayments = async(tenantId:string)=>{
    const payments = await prisma.payments.findMany({
        where : {
            rentalRequest : {
                tenantId : tenantId
            }
        },
        include : {
            rentalRequest : true
        }
    });

    if(payments.length===0){
        throw new AppError(status.NOT_FOUND, "You don't have any payments")
    }

    return payments;
}

const getPayment = async(paymentId:string, tenantId:string)=>{
    const payment = await prisma.payments.findFirst({
        where : {
            id : paymentId,
            rentalRequest : {
                tenantId : tenantId
            }
        },
        include : {
            rentalRequest : true
        }
    });

    if(!payment){
        throw new AppError(status.NOT_FOUND, "Payment not found")
    }

    return payment
}


export const paymentService = {
    createPayment,
    handleStripeWebhook,
    getMyPayments,
    getPayment
}
