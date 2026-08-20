import { ICreateProperty, IUpdateProperty, IUpdateRentalRequest } from "./landlord.interface";
declare const createPropertyIntoDB: (payLoad: ICreateProperty, landlord: string) => Promise<{
    id: string;
    title: string;
    description: string;
    location: string;
    price: string;
    categoryId: string;
    landlordId: string;
    status: import("../../generated/prisma/enums").PropertyStatus;
    createdAt: Date;
    updatedAt: Date;
}>;
declare const updatePropertyIntoDB: (propertyId: string, landlordId: string, payLoad: IUpdateProperty) => Promise<{
    id: string;
    title: string;
    description: string;
    location: string;
    price: string;
    categoryId: string;
    landlordId: string;
    status: import("../../generated/prisma/enums").PropertyStatus;
    createdAt: Date;
    updatedAt: Date;
}>;
declare const deletePropertyFromDB: (propertyId: string, landlordId: string) => Promise<null>;
declare const getALlRentalRequestFromDB: (landlordId: string) => Promise<{
    id: string;
    tenantId: string;
    propertyId: string;
    status: import("../../generated/prisma/enums").RentalRequestStatus;
    createdAt: Date;
    updatedAt: Date;
}[]>;
declare const updateRentalRequest: (requestId: string, landlordId: string, payLoad: IUpdateRentalRequest) => Promise<{
    id: string;
    tenantId: string;
    propertyId: string;
    status: import("../../generated/prisma/enums").RentalRequestStatus;
    createdAt: Date;
    updatedAt: Date;
}>;
export declare const landlordService: {
    createPropertyIntoDB: typeof createPropertyIntoDB;
    updatePropertyIntoDB: typeof updatePropertyIntoDB;
    deletePropertyFromDB: typeof deletePropertyFromDB;
    getALlRentalRequestFromDB: typeof getALlRentalRequestFromDB;
    updateRentalRequest: typeof updateRentalRequest;
};
export {};
//# sourceMappingURL=landlord.service.d.ts.map