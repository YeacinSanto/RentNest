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


export const paymentController = {
    createPayment
}