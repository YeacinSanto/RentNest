import { prisma } from "../../lib/prisma"
import { ICategoryCreatePayLoad } from "./admin.interface";


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



export const adminService = {
    createCategoryIntoDB
}