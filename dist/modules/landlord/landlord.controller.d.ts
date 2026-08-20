import { NextFunction, Request, Response } from "express";
export declare const landlordController: {
    createProperty: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    updateProperty: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    deleteProperty: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    getAllRentalRequest: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    updateRentalRequest: (req: Request, res: Response, next: NextFunction) => Promise<void>;
};
//# sourceMappingURL=landlord.controller.d.ts.map