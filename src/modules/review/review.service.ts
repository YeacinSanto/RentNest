import { prisma } from "../../lib/prisma";
import { ICreateReview } from "./review.interface";


const createReviewIntoDB = async(payLoad:ICreateReview, tenantId:string)=>{
    const {propertyId, rating, comment} = payLoad;
    const rentalRequest = await prisma.rentalRequests.findFirst({
        where : {
            tenantId,
            propertyId,
            status : "COMPLETED"
        }
    });

    if(!rentalRequest){
        throw new Error("You can only review a property after completing a rental")
    }

    const review = await prisma.reviews.create({
        data : {
            propertyId,
            tenantId,
            rating,
            comment
        }
    })

    return review
}



export const reviewService = {
    createReviewIntoDB
}