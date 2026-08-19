import { prisma } from "../../lib/prisma";
import { ICreateProperty } from "./landlord.interface";

const createPropertyIntoDB = async (
    payLoad: ICreateProperty,
    landlord: string
) => {
    const {title,description,location,price,categoryName} = payLoad
    const property = await prisma.properties.create({
        data: {
            title: title,
            description: description,
            location: location,
            price: price,

            landlord: {
                connect: {
                    id: landlord
                }
            },

            category: {
                connect: {
                    name : categoryName
                }
            }
        }
    });

    return property;
};

export const landlordService = {
    createPropertyIntoDB
};