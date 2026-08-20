import { ICategoryCreatePayLoad, IUpdateUserStatus } from "./admin.interface";
declare const createCategoryIntoDB: (payLoad: ICategoryCreatePayLoad) => Promise<{
    id: string;
    name: string;
    description: string;
}>;
declare const getAllUsersFromDB: () => Promise<{
    id: string;
    name: string;
    email: string;
    role: import("../../generated/prisma/enums").Role;
    status: import("../../generated/prisma/enums").UserStatus;
    createdAt: Date;
    updatedAt: Date;
}[]>;
declare const updateUserStatusIntoDB: (userId: string, payLoad: IUpdateUserStatus) => Promise<{
    id: string;
    name: string;
    email: string;
    role: import("../../generated/prisma/enums").Role;
    status: import("../../generated/prisma/enums").UserStatus;
    createdAt: Date;
    updatedAt: Date;
}>;
declare const getAllPropertiesFromDB: () => Promise<{
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
}[]>;
declare const getAllRentalRequestFromDB: () => Promise<{
    id: string;
    tenantId: string;
    propertyId: string;
    status: import("../../generated/prisma/enums").RentalRequestStatus;
    createdAt: Date;
    updatedAt: Date;
}[]>;
export declare const adminService: {
    createCategoryIntoDB: typeof createCategoryIntoDB;
    getAllUsersFromDB: typeof getAllUsersFromDB;
    updateUserStatusIntoDB: typeof updateUserStatusIntoDB;
    getAllPropertiesFromDB: typeof getAllPropertiesFromDB;
    getAllRentalRequestFromDB: typeof getAllRentalRequestFromDB;
};
export {};
//# sourceMappingURL=admin.service.d.ts.map