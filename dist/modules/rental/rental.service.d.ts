declare const createRentalRequest: (propertyId: string, tenantId: string) => Promise<{
    id: string;
    tenantId: string;
    propertyId: string;
    status: import("../../generated/prisma/enums").RentalRequestStatus;
    createdAt: Date;
    updatedAt: Date;
}>;
declare const getMyRentalRequests: (tenantId: string) => Promise<{
    id: string;
    tenantId: string;
    propertyId: string;
    status: import("../../generated/prisma/enums").RentalRequestStatus;
    createdAt: Date;
    updatedAt: Date;
}[]>;
declare const getRentalRequest: (reqId: string, tenantId: string) => Promise<{
    id: string;
    tenantId: string;
    propertyId: string;
    status: import("../../generated/prisma/enums").RentalRequestStatus;
    createdAt: Date;
    updatedAt: Date;
}>;
export declare const rentalService: {
    createRentalRequest: typeof createRentalRequest;
    getMyRentalRequests: typeof getMyRentalRequests;
    getRentalRequest: typeof getRentalRequest;
};
export {};
//# sourceMappingURL=rental.service.d.ts.map