import { NextFunction, Request, Response } from "express";
import { catchAsync } from "../../utils/catchAsync";
import { paymentService } from "./payment.service";
import { sendResponse } from "../../utils/sendResponse";
import status from "http-status";

const createPayment = catchAsync(async(req: Request, res: Response, next: NextFunction)=>{
    const tenantId = req.user?.id as string;
    const rentalRequestId = req.body.rentalRequestId;

    const result = await paymentService.createPayment(rentalRequestId,tenantId);

    sendResponse(res,{
        success : true,
        statusCode : status.CREATED,
        message : "Payment session created successfully!",
        data : result
    })
})

const stripeWebhook = async(req: Request, res: Response, next: NextFunction)=>{
    const signature = req.headers['stripe-signature'];

    if(!signature){
        return res.status(400).send(
            "Stripe signature missing"
        )
    }

    try {
        await paymentService.handleStripeWebhook(req.body,signature as string);

        res.status(200).json({
            received : true
        })
    } catch (error:any) {
        console.error("Stripe webhook error",error);

        res.status(400).send("Webhook error")
    }


}


const getMyPayments = catchAsync(async(req: Request, res: Response, next: NextFunction)=>{
    const tenantId = req.user?.id as string;

    const result = await paymentService.getMyPayments(tenantId);

    sendResponse(res,{
        success : true,
        statusCode : status.OK,
        message : "Payments retrieved successfully!",
        data : result
    })
})

const getPayment = catchAsync(async(req: Request, res: Response, next: NextFunction)=>{
    const paymentId = req.params.id as string;
    const tenantId = req.user?.id as string;

    const result = await paymentService.getPayment(paymentId,tenantId);

    sendResponse(res,{
        success : true,
        statusCode : status.OK,
        message : "Payment retrieved successfully!",
        data : result
    })
})


export const paymentController = {
    createPayment,
    stripeWebhook,
    getMyPayments,
    getPayment
}
