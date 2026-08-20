import { prisma } from "../../lib/prisma"
import { IFilterProperty } from "./properties.interface";

const getAllProperty = async(filters: IFilterProperty)=>{
    const {location, category, minPrice, maxPrice} = filters;

    const property = await prisma.properties.findMany({
        where : {
            status : "AVAILABLE",
            location : location ? {contains : location, mode : "insensitive"} : undefined,
            category : category ? {name : {equals : category, mode : "insensitive"}} : undefined
        },
        include : {
            category : true
        }
    });

    const filtered = property.filter((property)=>{
        const price = Number(property.price);

        if(minPrice && price < Number(minPrice)) return false;
        if(maxPrice && price > Number(maxPrice)) return false;

        return true;
    });

    if(filtered.length === 0){
        throw new Error("No property is available at this moment!")
    }

    return filtered
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

    if(result.length===0){
        throw new Error("Sorry! at this moment no category of property is founded!")
    }

    return result
}

export const propertyService = {
    getAllProperty,
    getPropertyById,
    getPropertyCategory
}