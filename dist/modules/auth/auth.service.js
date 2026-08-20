import config from "../../config";
import { prisma } from "../../lib/prisma";
import bcrypt from "bcrypt";
import { jwtUtils } from "../../utils/jwt";
import { Role } from "../../generated/prisma/enums";
const userRegister = async (payload) => {
    const { name, email, password, role } = payload;
    const isUserExist = await prisma.user.findUnique({
        where: { email }
    });
    if (isUserExist) {
        throw new Error("User with this email is already exist");
    }
    if (role === Role.ADMIN) {
        throw new Error("You are not allowed as ADMIN");
    }
    const hashedPassword = await bcrypt.hash(password, Number(config.bcrypt_salt_round));
    const createdUser = await prisma.user.create({
        data: {
            name,
            email,
            password: hashedPassword,
            role
        }
    });
    const user = await prisma.user.findUnique({
        where: {
            id: createdUser.id,
            email: createdUser.email
        },
        omit: {
            password: true
        }
    });
    return user;
};
const userLogin = async (payLoad) => {
    const { email, password } = payLoad;
    const user = await prisma.user.findUnique({
        where: { email }
    });
    if (!user) {
        throw new Error("User with this email is not exist!");
    }
    if (user.status === "BANNED") {
        throw new Error("You are banned. Please contact to the support center");
    }
    const isPasswordMatched = await bcrypt.compare(password, user.password);
    if (!isPasswordMatched) {
        throw new Error("Password wrong!");
    }
    const jwtPayload = {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role
    };
    const accessToken = jwtUtils.createToken(jwtPayload, config.jwt_access_secret, config.jwt_access_expire_in);
    const refreshToken = jwtUtils.createToken(jwtPayload, config.jwt_refresh_secret, config.jwt_refresh_expire_in);
    return {
        accessToken,
        refreshToken
    };
};
const getMyProfile = async (userId) => {
    const user = await prisma.user.findUniqueOrThrow({
        where: { id: userId },
        omit: {
            password: true
        }
    });
    return user;
};
export const authService = {
    userRegister,
    userLogin,
    getMyProfile
};
//# sourceMappingURL=auth.service.js.map