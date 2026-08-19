import { prisma } from "../../lib/prisma"

const getAllProperty = async()=>{
    const property = await prisma.properties.findMany();

    if(!property){
        throw new Error("No property is available at this moment!")
    }

    return property
}

const getPropertyById = async(propId : string)=>{
    const result = await prisma.properties.findUnique({
        where : {id:propId}
    })

    if(!result){
        throw new Error("No property is founded with this id!")
    }

    return result
}


const getPropertyCategory = async()=>{
    const result = await prisma.categories.findMany();

    if(!result){
        throw new Error("Sorry! at this moment no category of property is founded!")
    }

    return result
}

export const propertyService = {
    getAllProperty,
    getPropertyById,
    getPropertyCategory
}