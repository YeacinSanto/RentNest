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

const paymentSuccessPage = (req: Request, res: Response) => {
    const sessionId = req.query.session_id as string | undefined;

    res.status(200).send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <title>Payment Successful | RentNest</title>
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <style>
                body { margin:0; min-height:100vh; display:flex; align-items:center; justify-content:center; background:#f4f6f8; font-family:Arial, Helvetica, sans-serif; }
                .card { background:#ffffff; padding:40px; border-radius:12px; box-shadow:0 4px 20px rgba(0,0,0,0.08); text-align:center; max-width:420px; }
                .icon { width:64px; height:64px; border-radius:50%; background:#e6f7ec; color:#1a7f37; display:flex; align-items:center; justify-content:center; margin:0 auto 20px; font-size:32px; }
                h1 { color:#1a7f37; margin:0 0 12px; font-size:22px; }
                p { color:#555; margin:0 0 8px; font-size:14px; }
                .session { color:#999; font-size:12px; word-break:break-all; margin-top:16px; }
            </style>
        </head>
        <body>
            <div class="card">
                <div class="icon">&#10003;</div>
                <h1>Payment Successful</h1>
                <p>Thank you! Your payment has been received and your rental request is now confirmed.</p>
                ${sessionId ? `<div class="session">Reference: ${sessionId}</div>` : ""}
            </div>
        </body>
        </html>
    `);
}

const paymentCancelPage = (req: Request, res: Response) => {
    res.status(200).send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <title>Payment Cancelled | RentNest</title>
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <style>
                body { margin:0; min-height:100vh; display:flex; align-items:center; justify-content:center; background:#f4f6f8; font-family:Arial, Helvetica, sans-serif; }
                .card { background:#ffffff; padding:40px; border-radius:12px; box-shadow:0 4px 20px rgba(0,0,0,0.08); text-align:center; max-width:420px; }
                .icon { width:64px; height:64px; border-radius:50%; background:#fdeceb; color:#c0392b; display:flex; align-items:center; justify-content:center; margin:0 auto 20px; font-size:32px; }
                h1 { color:#c0392b; margin:0 0 12px; font-size:22px; }
                p { color:#555; margin:0; font-size:14px; }
            </style>
        </head>
        <body>
            <div class="card">
                <div class="icon">&#10005;</div>
                <h1>Payment Cancelled</h1>
                <p>Your payment was not completed. You can retry the payment anytime from your rental requests.</p>
            </div>
        </body>
        </html>
    `);
}


export const paymentController = {
    createPayment,
    stripeWebhook,
    getMyPayments,
    getPayment,
    paymentSuccessPage,
    paymentCancelPage
}
