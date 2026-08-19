import config from "../../config";
import { prisma } from "../../lib/prisma";
import bcrypt from "bcrypt"
import { ICreatePayLoad, ILoginPayLoad } from "./auth.interface";
import { JwtPayload, SignOptions } from "jsonwebtoken";
import { jwtUtils } from "../../utils/jwt";

const userRegister = async (payload : ICreatePayLoad)=>{
    const {name,email,password} = payload;
    
    const isUserExist = await prisma.user.findUnique({
        where : {email}
    })

    if(isUserExist){
        throw new Error("User with this email is already exist")
    }

    const hashedPassword = await bcrypt.hash(password,Number(config.bcrypt_salt_round))

    const createdUser = await prisma.user.create({
        data:{
            name,
            email,
            password : hashedPassword
        }
    })

    const user = await prisma.user.findUnique({
        where : {
            id : createdUser.id,
            email : createdUser.email
        },
        omit : {
            password : true
        }
    })
    return user
    
}





const userLogin = async(payLoad:ILoginPayLoad)=>{
    const {email,password} = payLoad;

    const user = await prisma.user.findUnique({
        where : {email}
    })

    if(!user){
        throw new Error("User with this email is not exist!")
    }

    if(user.status==="BANNED"){
        throw new Error("You are banned. Please contact to the support center")
    }

    const isPasswordMatched = await bcrypt.compare(password,user.password)

    if(!isPasswordMatched){
        throw new Error("Password wrong!")
    }

    const jwtPayload = {
        id : user.id,
        name : user.name,
        email : user.email,
        role : user.role
    }

    const accessToken = jwtUtils.createToken(
        jwtPayload,
        config.jwt_access_secret as string,
        config.jwt_access_expire_in as SignOptions
    );
     const refreshToken = jwtUtils.createToken(
        jwtPayload,
        config.jwt_refresh_secret as string,
        config.jwt_refresh_expire_in as SignOptions
    );
    return {
        accessToken,
        refreshToken
    }
}

export const authService = {
    userRegister,
    userLogin
}