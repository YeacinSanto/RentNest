import { NextFunction, Request, RequestHandler, Response } from "express";
import status from "http-status";
import { AppError } from "./AppError";

export const catchAsync = (fn:RequestHandler) =>{
    return async(req:Request,res:Response,next:NextFunction) =>{
        try {
            await fn(req,res,next)
        } catch (error) {
            console.log(error);

        const statusCode = error instanceof AppError ? error.statusCode : status.INTERNAL_SERVER_ERROR;
        const message = error instanceof Error ? error.message : "Something went wrong";

        res.status(statusCode).json({
            success : false,
            statusCode : statusCode,
            message : message,
            error : message
        })
        }
    }
}