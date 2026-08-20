import { JwtPayload, SignOptions } from "jsonwebtoken";
declare const createToken: (payLoad: JwtPayload, secret: string, expiresIn: SignOptions) => string;
declare const verifyToken: (token: string, secret: string) => {
    success: boolean;
    data: string | JwtPayload;
    error?: undefined;
} | {
    data?: undefined;
    success: boolean;
    error: any;
};
export declare const jwtUtils: {
    createToken: typeof createToken;
    verifyToken: typeof verifyToken;
};
export {};
//# sourceMappingURL=jwt.d.ts.map