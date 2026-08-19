import { Role } from "../../generated/prisma/enums"

export interface ICreatePayLoad {
    name : string,
    email : string,
    password : string,
    role : Role
    
}

export interface ILoginPayLoad{
    email : string,
    password : string
}