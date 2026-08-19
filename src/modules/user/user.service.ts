import config from "../../config";
import { prisma } from "../../lib/prisma"
import { ICreatePayLoad } from "./user.interface"
import bcrypt from "bcrypt"

const createUser = async (payload : ICreatePayLoad)=>{
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


export const userService ={
    createUser
}