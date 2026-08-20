import { prisma } from "../../lib/prisma"
import { ICategoryCreatePayLoad, IUpdateUserStatus } from "./admin.interface";


const createCategoryIntoDB = async (payLoad: ICategoryCreatePayLoad) => {
    const {name,description} = payLoad
    const existingCategory = await prisma.categories.findUnique({
        where: {
            name
        }
    });

    if (existingCategory) {
        throw new Error("Category already exists");
    }

    const category = await prisma.categories.create({
        data: {
            name,
            description
        }
    });

    return category;
};

const getAllUsersFromDB = async()=>{
    const users = await prisma.user.findMany({
        omit : {
            password : true
        }
    });

    if(users.length===0){
        throw new Error("No users is found!")
    }


    return users;
}

const updateUserStatusIntoDB = async(userId:string, payLoad:IUpdateUserStatus)=>{
    const user = await prisma.user.findUnique({
        where : {
            id : userId
        }
    });

    if(!user){
        throw new Error("User Not found!")
    }

    const updateUser = await prisma.user.update({
        where : {
            id : userId
        },
        data : {
            status : payLoad.status
        },
        omit : {
            password : true
        }
    });

    return updateUser
}

const getAllPropertiesFromDB = async()=>{
    const properties = await prisma.properties.findMany();

    if(properties.length===0){
        throw new Error("Property is not found")
    }

    return properties
}

const getAllRentalRequestFromDB = async()=>{
    const request = await prisma.rentalRequests.findMany();

    if(request.length===0){
        throw new Error("No rental request is found!")
    }

    return request
}


export const adminService = {
    createCategoryIntoDB,
    getAllUsersFromDB,
    updateUserStatusIntoDB,
    getAllPropertiesFromDB,
    getAllRentalRequestFromDB
}