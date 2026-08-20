import status from "http-status";
export const catchAsync = (fn) => {
    return async (req, res, next) => {
        try {
            await fn(req, res, next);
        }
        catch (error) {
            console.log(error);
            res.status(status.INTERNAL_SERVER_ERROR).json({
                success: false,
                statusCode: status.INTERNAL_SERVER_ERROR,
                message: "failed to register user",
                error: error.message
            });
        }
    };
};
//# sourceMappingURL=catchAsync.js.map