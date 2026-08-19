import { NextFunction, Request, Response } from "express";
import { catchAsync } from "../../utils/catchAsync";
import { landlordService } from "./landlord.service";
import status from "http-status";
import { sendResponse } from "../../utils/sendResponse";

const createProperty = catchAsync(async(req:Request,res:Response,next:NextFunction)=>{
    const landlord = req.user?.id as string;
    const payLoad = req.body;

    const result = await landlordService.createPropertyIntoDB(payLoad,landlord);

    sendResponse (res,{
        success : true,
        statusCode : status.CREATED,
        message : "Property Created Successfully!",
        data : result
    })
})


export const landlordController = {
    createProperty
}