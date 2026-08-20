export interface ICreateProperty {
    title: string;
    description: string;
    location: string;
    price: string;
    categoryName: string;
}
export interface IUpdateProperty {
    title?: string;
    description?: string;
    location?: string;
    price?: string;
    status?: "AVAILABLE" | "RENTED" | "UNAVAILABLE";
}
export interface IUpdateRentalRequest {
    status: "APPROVED" | "REJECTED" | "COMPLETED";
}
//# sourceMappingURL=landlord.interface.d.ts.map