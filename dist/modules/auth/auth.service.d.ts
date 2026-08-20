import { ICreatePayLoad, ILoginPayLoad } from "./auth.interface";
import { Role } from "../../generated/prisma/enums";
declare const userRegister: (payload: ICreatePayLoad) => Promise<{
    id: string;
    name: string;
    email: string;
    role: Role;
    status: import("../../generated/prisma/enums").UserStatus;
    createdAt: Date;
    updatedAt: Date;
} | null>;
declare const userLogin: (payLoad: ILoginPayLoad) => Promise<{
    accessToken: string;
    refreshToken: string;
}>;
declare const getMyProfile: (userId: string) => Promise<{
    id: string;
    name: string;
    email: string;
    role: Role;
    status: import("../../generated/prisma/enums").UserStatus;
    createdAt: Date;
    updatedAt: Date;
}>;
export declare const authService: {
    userRegister: typeof userRegister;
    userLogin: typeof userLogin;
    getMyProfile: typeof getMyProfile;
};
export {};
//# sourceMappingURL=auth.service.d.ts.map