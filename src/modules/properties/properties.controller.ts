import { NextFunction, Request, Response } from "express";
import { catchAsync } from "../../utils/catchAsync";
import { propertyService } from "./properties.service";
import { sendResponse } from "../../utils/sendResponse";
import status from "http-status";

const getProperty = catchAsync(async(req:Request,res:Response,next:NextFunction)=>{
    const result = await propertyService.getAllProperty();

    sendResponse(res,{
        success : true,
        statusCode : status.OK,
        message : "Here is the all property!",
        data : result
    })
})

const getPropertyById = catchAsync(async(req:Request,res:Response,next:NextFunction)=>{
    const {id} = req.params;
   

    const result = await propertyService.getPropertyById(id as string);

    sendResponse(res,{
        success : true,
        statusCode : status.OK,
        message : "Here is the property!",
        data : result
    })
})

const getPropertyCategory = catchAsync(async(req:Request,res:Response,next:NextFunction)=>{
    const result = await propertyService.getPropertyCategory();

    sendResponse(res,{
        success : true,
        statusCode : status.OK,
        message : "Here is the category of all property!",
        data : result
    })
})


export const propertyController = {
    getProperty,
    getPropertyById,
    getPropertyCategory
}