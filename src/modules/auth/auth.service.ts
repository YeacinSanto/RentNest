import config from "../../config";
import { prisma } from "../../lib/prisma";
import bcrypt from "bcrypt"
import { ICreatePayLoad, ILoginPayLoad, IUpdateProfilePayLoad } from "./auth.interface";
import { JwtPayload, SignOptions } from "jsonwebtoken";
import { jwtUtils } from "../../utils/jwt";
import { Role } from "../../generated/prisma/enums";

const userRegister = async (payload : ICreatePayLoad)=>{
    const {name,email,password,role} = payload;
    
    const isUserExist = await prisma.user.findUnique({
        where : {email}
    })

    if(isUserExist){
        throw new Error("User with this email is already exist")
    }
    if (role === Role.ADMIN) {
        throw new Error("You are not allowed as ADMIN");
    }

    const hashedPassword = await bcrypt.hash(password,Number(config.bcrypt_salt_round))

    const createdUser = await prisma.user.create({
        data:{
            name,
            email,
            password : hashedPassword,
            role
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


const updateProfile = async(userId:string, payLoad:IUpdateProfilePayLoad & {email?:string})=>{
    if(payLoad.email){
        throw new Error("Email cannot be changed")
    }

    const user = await prisma.user.findUniqueOrThrow({
        where : {id : userId}
    });

    const data : {name?:string, password?:string} = {};

    if(payLoad.name){
        data.name = payLoad.name;
    }

    if(payLoad.newPassword){
        if(!payLoad.currentPassword){
            throw new Error("Current password is required to set a new password")
        }

        const isPasswordMatched = await bcrypt.compare(payLoad.currentPassword,user.password)

        if(!isPasswordMatched){
            throw new Error("Current password is incorrect")
        }

        data.password = await bcrypt.hash(payLoad.newPassword,Number(config.bcrypt_salt_round))
    }

    if(Object.keys(data).length===0){
        throw new Error("Nothing to update")
    }

    const updatedUser = await prisma.user.update({
        where : {id : userId},
        data,
        omit : {
            password : true
        }
    });

    return updatedUser
}

const getMyProfile = async(userId:string)=>{
     const user = await prisma.user.findUniqueOrThrow({
        where : {id : userId},
        omit : {
            password : true
        }
        
    });

    return user;
}

export const authService = {
    userRegister,
    userLogin,
    updateProfile,
    getMyProfile
}