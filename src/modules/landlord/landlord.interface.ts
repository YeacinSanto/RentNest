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
}

export interface IUpdateRentalRequest {
    status: "APPROVED" | "REJECTED";
}