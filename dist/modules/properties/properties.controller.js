import { catchAsync } from "../../utils/catchAsync";
import { propertyService } from "./properties.service";
import { sendResponse } from "../../utils/sendResponse";
import status from "http-status";
const getProperty = catchAsync(async (req, res, next) => {
    const { location, category, minPrice, maxPrice } = req.query;
    const result = await propertyService.getAllProperty({
        location: location,
        category: category,
        minPrice: minPrice,
        maxPrice: maxPrice
    });
    sendResponse(res, {
        success: true,
        statusCode: status.OK,
        message: "Here is the all property!",
        data: result
    });
});
const getPropertyById = catchAsync(async (req, res, next) => {
    const { id } = req.params;
    const result = await propertyService.getPropertyById(id);
    sendResponse(res, {
        success: true,
        statusCode: status.OK,
        message: "Here is the property!",
        data: result
    });
});
const getPropertyCategory = catchAsync(async (req, res, next) => {
    const result = await propertyService.getPropertyCategory();
    sendResponse(res, {
        success: true,
        statusCode: status.OK,
        message: "Here is the category of all property!",
        data: result
    });
});
export const propertyController = {
    getProperty,
    getPropertyById,
    getPropertyCategory
};
//# sourceMappingURL=properties.controller.js.map