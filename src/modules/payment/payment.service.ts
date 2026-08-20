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



export const paymentService = {
    createPayment
}