import multer, { FileFilterCallback } from "multer";
import { NextFunction, Request, Response } from "express";
import { AppError } from "../utils/AppError";
import status from "http-status";

const ALLOWED_MIME_TYPES = ["image/jpeg", "image/png", "image/webp", "image/avif"];

const storage = multer.memoryStorage();

const fileFilter = (req: Request, file: Express.Multer.File, cb: FileFilterCallback) => {
    if (!ALLOWED_MIME_TYPES.includes(file.mimetype)) {
        return cb(new AppError(status.BAD_REQUEST, "Only JPEG, PNG, WEBP or AVIF images are allowed"));
    }
    cb(null, true);
};

const upload = multer({
    storage,
    fileFilter,
    limits: {
        fileSize: 5 * 1024 * 1024,
        files: 8
    }
});

export const uploadPropertyImages = (req: Request, res: Response, next: NextFunction) => {
    upload.array("images", 8)(req, res, (error) => {
        if (!error) {
            return next();
        }

        const statusCode = error instanceof AppError ? error.statusCode : status.BAD_REQUEST;
        const message = error instanceof Error ? error.message : "Image upload failed";

        res.status(statusCode).json({
            success: false,
            statusCode,
            message,
            error: message
        });
    });
};
