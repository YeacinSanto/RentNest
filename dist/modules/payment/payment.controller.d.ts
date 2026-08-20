import { NextFunction, Request, Response } from "express";
declare const stripeWebhook: (req: Request, res: Response, next: NextFunction) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const paymentController: {
    createPayment: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    stripeWebhook: typeof stripeWebhook;
    getMyPayments: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    getPayment: (req: Request, res: Response, next: NextFunction) => Promise<void>;
};
export {};
//# sourceMappingURL=payment.controller.d.ts.map