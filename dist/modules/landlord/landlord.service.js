import { prisma } from "../../lib/prisma";
const createPropertyIntoDB = async (payLoad, landlord) => {
    const { title, description, location, price, categoryName } = payLoad;
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
                    name: categoryName
                }
            }
        }
    });
    return property;
};
const updatePropertyIntoDB = async (propertyId, landlordId, payLoad) => {
    const property = await prisma.properties.findFirst({
        where: {
            id: propertyId,
            landlordId: landlordId
        }
    });
    if (!property) {
        throw new Error("Property not found or you are not the owner");
    }
    const updateProperty = await prisma.properties.update({
        where: {
            id: propertyId
        },
        data: payLoad
    });
    return updateProperty;
};
const deletePropertyFromDB = async (propertyId, landlordId) => {
    const property = await prisma.properties.findFirst({
        where: {
            id: propertyId,
            landlordId: landlordId
        }
    });
    if (!property) {
        throw new Error("Property not found or you are not the owner");
    }
    const deleteProperty = await prisma.properties.delete({
        where: {
            id: propertyId
        }
    });
    return null;
};
const getALlRentalRequestFromDB = async (landlordId) => {
    const request = await prisma.rentalRequests.findMany({
        where: {
            property: {
                landlordId
            }
        }
    });
    return request;
};
const updateRentalRequest = async (requestId, landlordId, payLoad) => {
    const request = await prisma.rentalRequests.findFirst({
        where: {
            id: requestId,
            property: {
                landlordId: landlordId
            }
        }
    });
    if (!request) {
        throw new Error("Rental request not found");
    }
    // if (request.status !== "PENDING") {
    //     throw new Error("This rental request has already been processed");
    // }
    if (request.status === "REJECTED") {
        throw new Error("Rejected rental request cannot be updated");
    }
    if (request.status === "COMPLETED") {
        throw new Error("Rental request is already completed");
    }
    if (payLoad.status === "COMPLETED" && request.status !== "APPROVED") {
        throw new Error("Only an approved rental can be completed");
    }
    if (payLoad.status === "COMPLETED") {
        const payment = await prisma.payments.findUnique({
            where: {
                rentalRequestId: requestId
            }
        });
        if (!payment || payment.status !== "PAID") {
            throw new Error("Rental request cannot be completed before payment is made");
        }
    }
    const updateRequest = await prisma.rentalRequests.update({
        where: {
            id: requestId
        },
        data: {
            status: payLoad.status
        }
    });
    return updateRequest;
};
export const landlordService = {
    createPropertyIntoDB,
    updatePropertyIntoDB,
    deletePropertyFromDB,
    getALlRentalRequestFromDB,
    updateRentalRequest
};
//# sourceMappingURL=landlord.service.js.map