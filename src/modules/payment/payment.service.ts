import Stripe from "stripe";
import config from "../../config";
import { prisma } from "../../lib/prisma";


const stripe = new Stripe(config.stripe_secret_key);

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
        throw new Error("Rental request not found or not approved")
    }


    const existingPayment = await prisma.payments.findUnique({
        where : {
            rentalRequestId : rentalRequestId
        }
    });

    if(existingPayment){
        throw new Error("Payment already exists for this rental request")
    }

    const payment = await prisma.payments.create({
        data : {
            rentalRequestId : rentalRequestId,
            amount : rentalRequest.property.price,
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
                    unit_amount: Number(rentalRequest.property.price) * 100
                },
                quantity : 1
            }
        ],
        metadata : {
            paymentId : payment.id,
            rentalRequestId : rentalRequest.id
        },

        success_url: "http://localhost:3000/payment/success",
        cancel_url: "http://localhost:3000/payment/cancel"
    });

    return{
        payment,
        checkoutUrl: session.url
    }
}

const handleStripeWebhook = async(payLoad:Buffer, signature:string)=>{
    let event: Stripe.Event;

    try {
        event = stripe.webhooks.constructEvent(payLoad,signature,config.stripe_webhook_secret)
    } catch (error:any) {
        throw new Error("Invalid Stripe webhook signature");
    }

    if(event.type==="checkout.session.completed"){
        const session = event.data.object 

        const paymentId = session.metadata?.paymentId;

        if(!paymentId){
            throw new Error("Payment ID not found")
        }

        await prisma.payments.update({
            where:{
                id:paymentId
            },
            data:{
                status : "PAID",
                transactionId: session.payment_intent as string,
                method : "CARD",
                paidAt : new Date()
            }
        })
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
        throw new Error("You don't have any payments")
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
        throw new Error("Payment not found")
    }

    return payment
}


export const paymentService = {
    createPayment,
    handleStripeWebhook,
    getMyPayments,
    getPayment
}