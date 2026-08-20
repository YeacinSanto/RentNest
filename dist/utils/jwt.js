import Jwt from "jsonwebtoken";
const createToken = (payLoad, secret, expiresIn) => {
    const token = Jwt.sign(payLoad, secret, {
        expiresIn
    });
    return token;
};
const verifyToken = (token, secret) => {
    try {
        const verifiedToken = Jwt.verify(token, secret);
        return {
            success: true,
            data: verifiedToken
        };
    }
    catch (error) {
        console.log("Token verification failed:", error);
        return {
            success: false,
            error: error.message
        };
    }
};
export const jwtUtils = {
    createToken,
    verifyToken
};
//# sourceMappingURL=jwt.js.map