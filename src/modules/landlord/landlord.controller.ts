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

const updateProperty = catchAsync(async(req:Request,res:Response,next:NextFunction)=>{
    const propertyId = req.params.id as string;
    const landlordId = req.user?.id as string;
    const payLoad = req.body;

    const result = await landlordService.updatePropertyIntoDB(propertyId,landlordId,payLoad)
    sendResponse(res, {
            success: true,
            statusCode: status.OK,
            message: "Property updated successfully!",
            data: result
        });
})

const deleteProperty = catchAsync(async(req:Request,res:Response,next:NextFunction)=>{
    const propertyId = req.params.id as string;
    const landlordId = req.user?.id as string;

    await landlordService.deletePropertyFromDB(propertyId,landlordId);

   
    sendResponse(res, {
            success: true,
            statusCode: status.OK,
            message: "Property Deleted successfully!",
            data: []
        });

})

const getAllRentalRequest = catchAsync(async(req:Request,res:Response,next:NextFunction)=>{
    const landlordId = req.user?.id as string;

    const result = await landlordService.getALlRentalRequestFromDB(landlordId);

    sendResponse(res,{
        success : true,
        statusCode : status.OK,
        message : "Rental Requests retrived successfully!",
        data : {result}
    })
})

const updateRentalRequest = catchAsync(async(req:Request,res:Response,next:NextFunction)=>{
    const requestId = req.params.id as string;
    const landlordId = req.user?.id as string;

    const payLoad = req.body;

    const result = await landlordService.updateRentalRequest(requestId,landlordId,payLoad);

    sendResponse(res, {
        success : true,
        statusCode : status.OK,
        message : "Rental request update successfully!",
        data : result
    })
})


export const landlordController = {
    createProperty,
    updateProperty,
    deleteProperty,
    getAllRentalRequest,
    updateRentalRequest
}