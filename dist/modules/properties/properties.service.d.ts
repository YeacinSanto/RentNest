import { IFilterProperty } from "./properties.interface";
declare const getAllProperty: (filters: IFilterProperty) => Promise<({
    category: {
        id: string;
        name: string;
        description: string;
    };
} & {
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
})[]>;
declare const getPropertyById: (propId: string) => Promise<{
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
declare const getPropertyCategory: () => Promise<{
    id: string;
    name: string;
    description: string;
}[]>;
export declare const propertyService: {
    getAllProperty: typeof getAllProperty;
    getPropertyById: typeof getPropertyById;
    getPropertyCategory: typeof getPropertyCategory;
};
export {};
//# sourceMappingURL=properties.service.d.ts.map