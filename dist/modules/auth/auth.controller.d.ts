import { NextFunction, Request, Response } from "express";
export declare const authController: {
    registerUser: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    userLogin: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    myProfile: (req: Request, res: Response, next: NextFunction) => Promise<void>;
};
//# sourceMappingURL=auth.controller.d.ts.map