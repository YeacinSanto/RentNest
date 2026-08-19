import { NextFunction, Request, Response } from "express";
import { catchAsync } from "../../utils/catchAsync";
import { userService } from "./user.service";

const createUser = catchAsync(async(req:Request,res:Response,next:NextFunction)=>{
    const payLoad = req.body
    const user = await userService.createUser(payLoad)
})


export const userController = {
    createUser
}