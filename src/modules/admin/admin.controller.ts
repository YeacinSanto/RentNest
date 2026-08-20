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


const getAllUsers = catchAsync(async(req:Request,res:Response,next:NextFunction)=>{

    const result = await adminService.getAllUsersFromDB();

    sendResponse(res, {
        success : true,
        statusCode : status.OK,
        message : "All users retrieved successfully!",
        data : {result}
    })
})

const updateUserStatus = catchAsync(async(req:Request,res:Response,next:NextFunction)=>{
    const userId = req.params.id as string;
    const payLoad = req.body;

    const result = await adminService.updateUserStatusIntoDB(userId,payLoad);

    sendResponse(res, {
        success : true,
        statusCode : status.OK,
        message : "User status updated successfully!",
        data : result
    })
})

const getAllProperties = catchAsync(async(req:Request,res:Response,next:NextFunction)=>{
    const result = await adminService.getAllPropertiesFromDB();

    sendResponse(res, {
        success: true,
        statusCode: status.OK,
        message: "All properties retrieved successfully!",
        data: result
    });

    
})

const getAllRentalRequests = catchAsync(
    async (req: Request, res: Response, next: NextFunction) => {

        const result = await adminService.getAllPropertiesFromDB();

        sendResponse(res, {
            success: true,
            statusCode: status.OK,
            message: "All rental requests retrieved successfully!",
            data: result
        });
    }
);

export const adminController = {
    createCategory,
    getAllUsers,
    updateUserStatus,
    getAllProperties,
    getAllRentalRequests
}