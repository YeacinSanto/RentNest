import { ICreateReview } from "./review.interface";
declare const createReviewIntoDB: (payLoad: ICreateReview, tenantId: string) => Promise<{
    id: string;
    rating: number;
    comment: string;
    createdAt: Date;
    tenantId: string;
    propertyId: string;
}>;
export declare const reviewService: {
    createReviewIntoDB: typeof createReviewIntoDB;
};
export {};
//# sourceMappingURL=review.service.d.ts.map