import { NextFunction, Request, Response } from "express";
import { catchAsync } from "../../utils/catchAsync";
import { rentalService } from "./rental.service";
import { sendResponse } from "../../utils/sendResponse";
import status from "http-status";
import { stat } from "node:fs";


const createRentalRequest = catchAsync(async(req:Request,res:Response,next:NextFunction)=>{
    const tenantId = req.user?.id as string;
    const propertyId = req.body.propertyId!;

    const result = await rentalService.createRentalRequest(propertyId,tenantId);

    sendResponse(res,{
        success : true,
        statusCode : status.CREATED,
        message : "Rental request created successfully!",
        data : result
    })

})

const getMyRentalRequests = catchAsync(async(req:Request, res:Response, next:NextFunction)=>{
    const tenantId = req.user?.id as string;
    
    const result = await rentalService.getMyRentalRequests(tenantId);

    sendResponse(res, {
        success : true,
        statusCode : status.OK,
        message : "Rental requess retrieved successfully!",
        data : {result}
    })
})

const getRentalRequest = catchAsync(async(req:Request,res:Response,next:NextFunction)=>{
    const requestId = req.params.id as string;
    const tenantId = req.user?.id as string;

    const result = await rentalService.getRentalRequest(requestId,tenantId);

    sendResponse(res,{
        success : true,
        statusCode : status.OK,
        message : "Rental request retrieved successfully!",
        data : result
    })
})


export const rentalController = {
    createRentalRequest,
    getMyRentalRequests,
    getRentalRequest
}