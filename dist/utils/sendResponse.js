export const sendResponse = (res, data) => {
    res.status(data.statusCode).json({
        success: data.success,
        statusCode: data.statusCode,
        message: data.message,
        data: data.data,
        meta: data.meta
    });
};
//# sourceMappingURL=sendResponse.js.map