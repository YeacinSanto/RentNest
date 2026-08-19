import { NextFunction, Request, Response } from "express";
import { catchAsync } from "../../utils/catchAsync";
import { reviewService } from "./review.service";
import { sendResponse } from "../../utils/sendResponse";
import status from "http-status";

const createReview = catchAsync(async(req:Request, res:Response, next:NextFunction)=>{
    const tenantId = req.user?.id as string;
    const payLoad = req.body;

    const result = reviewService.createReviewIntoDB(payLoad,tenantId);

    sendResponse(res,{
        success : true,
        statusCode : status.CREATED,
        message : "Review Created Successfully!",
        data : result
    })
})


export const reviewController = {
    createReview
}