import { NextFunction, Request, RequestHandler, Response } from "express";
export declare const catchAsync: (fn: RequestHandler) => (req: Request, res: Response, next: NextFunction) => Promise<void>;
//# sourceMappingURL=catchAsync.d.ts.map