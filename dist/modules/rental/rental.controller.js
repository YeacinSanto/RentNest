import { catchAsync } from "../../utils/catchAsync";
import { rentalService } from "./rental.service";
import { sendResponse } from "../../utils/sendResponse";
import status from "http-status";
const createRentalRequest = catchAsync(async (req, res, next) => {
    const tenantId = req.user?.id;
    const propertyId = req.body.propertyId;
    const result = await rentalService.createRentalRequest(propertyId, tenantId);
    sendResponse(res, {
        success: true,
        statusCode: status.CREATED,
        message: "Rental request created successfully!",
        data: result
    });
});
const getMyRentalRequests = catchAsync(async (req, res, next) => {
    const tenantId = req.user?.id;
    const result = await rentalService.getMyRentalRequests(tenantId);
    sendResponse(res, {
        success: true,
        statusCode: status.OK,
        message: "Rental requess retrieved successfully!",
        data: { result }
    });
});
const getRentalRequest = catchAsync(async (req, res, next) => {
    const requestId = req.params.id;
    const tenantId = req.user?.id;
    const result = await rentalService.getRentalRequest(requestId, tenantId);
    sendResponse(res, {
        success: true,
        statusCode: status.OK,
        message: "Rental request retrieved successfully!",
        data: result
    });
});
export const rentalController = {
    createRentalRequest,
    getMyRentalRequests,
    getRentalRequest
};
//# sourceMappingURL=rental.controller.js.map