import { prisma } from "../../lib/prisma";
import { ICreateProperty, IUpdateProperty, IUpdateRentalRequest } from "./landlord.interface";
import { AppError } from "../../utils/AppError";
import status from "http-status";

const createPropertyIntoDB = async (payLoad: ICreateProperty,landlord: string) => {
    const {title,description,location,price,categoryName} = payLoad
    const property = await prisma.properties.create({
        data: {
            title: title,
            description: description,
            location: location,
            price: price,

            landlord: {
                connect: {
                    id: landlord
                }
            },

            category: {
                connect: {
                    name : categoryName
                }
            }
        }
    });

    return property;
};


const updatePropertyIntoDB = async(propertyId:string, landlordId:string, payLoad:IUpdateProperty)=>{
    const property = await prisma.properties.findFirst({
        where : {
            id : propertyId,
            landlordId : landlordId
        }
    });

    if(!property){
        throw new Error("Property not found or you are not the owner");
    }



    const updateProperty = await prisma.properties.update({
        where : {
            id : propertyId
        },
        data : payLoad
    })

    return updateProperty
}

const deletePropertyFromDB = async(propertyId:string,landlordId:string)=>{
    const property = await prisma.properties.findFirst({
        where : {
            id : propertyId,
            landlordId : landlordId
        }
    });

    if(!property){
        throw new Error("Property not found or you are not the owner");
    }

    const deleteProperty = await prisma.properties.delete({
        where : {
            id : propertyId
        }
    })

    return null
}

const getALlRentalRequestFromDB = async(landlordId : string)=>{
    const request = await prisma.rentalRequests.findMany({
        where : {
            property : {
                landlordId
            }
        }
    })
    return request
}

const updateRentalRequest = async(requestId:string, landlordId:string, payLoad:IUpdateRentalRequest)=>{
    const request = await prisma.rentalRequests.findFirst({
        where : {
            id : requestId,
            property : {
                landlordId : landlordId
            }
        },
        include : {
            property : true
        }
    });

    if(!request){
        throw new AppError(status.NOT_FOUND, "Rental request not found");
    }

    if (request.status === "REJECTED") {
        throw new AppError(status.CONFLICT, "Rejected rental request cannot be updated");
    }

    if (request.status === "COMPLETED") {
        throw new AppError(status.CONFLICT, "Rental request is already completed");
    }

    if ((payLoad.status === "APPROVED" || payLoad.status === "REJECTED") && request.status !== "PENDING") {
        throw new AppError(status.CONFLICT, "This rental request has already been processed");
    }

    if (payLoad.status === "APPROVED" && request.property.status !== "AVAILABLE") {
        throw new AppError(status.CONFLICT, "This property is no longer available");
    }

    if (payLoad.status === "COMPLETED" &&request.status !== "APPROVED") {
        throw new AppError(status.BAD_REQUEST, "Only an approved rental can be completed");
    }

    if (payLoad.status === "COMPLETED") {
        const payment = await prisma.payments.findUnique({
            where : {
                rentalRequestId : requestId
            }
        });

        if (!payment || payment.status !== "PAID") {
            throw new AppError(status.BAD_REQUEST, "Rental request cannot be completed before payment is made");
        }
    }

    const updateRequest = await prisma.rentalRequests.update({
        where : {
            id : requestId
        },
        data : {
            status : payLoad.status,
            // Freeze the rent at the moment of approval so a later price edit
            // on the property can't change what the tenant is charged.
            ...(payLoad.status === "APPROVED" ? { agreedPrice : request.property.price } : {})
        }
    })

    return updateRequest
}

export const landlordService = {
    createPropertyIntoDB,
    updatePropertyIntoDB,
    deletePropertyFromDB,
    getALlRentalRequestFromDB,
    updateRentalRequest
};