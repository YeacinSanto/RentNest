import { prisma } from "../../lib/prisma";
const createRentalRequest = async (propertyId, tenantId) => {
    const property = await prisma.properties.findUnique({
        where: {
            id: propertyId
        }
    });
    if (!property) {
        throw new Error("Property not found");
    }
    const rentalRequest = await prisma.rentalRequests.create({
        data: {
            tenantId,
            propertyId
        }
    });
    return rentalRequest;
};
const getMyRentalRequests = async (tenantId) => {
    const request = await prisma.rentalRequests.findMany({
        where: {
            tenantId
        }
    });
    if (request.length === 0) {
        throw new Error("You don't have any rental request");
    }
    return request;
};
const getRentalRequest = async (reqId, tenantId) => {
    const request = await prisma.rentalRequests.findFirst({
        where: {
            id: reqId,
            tenantId: tenantId
        }
    });
    if (!request) {
        throw new Error("Rental request not found");
    }
    return request;
};
export const rentalService = {
    createRentalRequest,
    getMyRentalRequests,
    getRentalRequest
};
//# sourceMappingURL=rental.service.js.map