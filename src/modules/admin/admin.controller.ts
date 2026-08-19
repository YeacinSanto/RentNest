import { NextFunction, Request, Response } from "express";
import { catchAsync } from "../../utils/catchAsync";
import { adminService } from "./admin.service";
import { sendResponse } from "../../utils/sendResponse";
import status from "http-status";

const createCategory = catchAsync(async(req:Request,res:Response,next:NextFunction)=>{
    const payload = req.body;

    const result = await adminService.createCategoryIntoDB(payload);

    sendResponse(res,{
        success : true,
        statusCode : status.CREATED,
        message : "Category created successfully",
        data : result
    })
})


export const adminController = {
    createCategory
}