import Stripe from "stripe";
declare const createPayment: (rentalRequestId: string, tenantId: string) => Promise<{
    payment: {
        id: string;
        amount: string;
        transactionId: string | null;
        rentalRequestId: string;
        createdAt: Date;
        status: import("../../generated/prisma/enums").PaymentStatus;
    };
    checkoutUrl: string | null;
}>;
declare const handleStripeWebhook: (payLoad: Buffer, signature: string) => Promise<Stripe.Event>;
declare const getMyPayments: (tenantId: string) => Promise<({
    rentalRequest: {
        id: string;
        tenantId: string;
        propertyId: string;
        status: import("../../generated/prisma/enums").RentalRequestStatus;
        createdAt: Date;
        updatedAt: Date;
    };
} & {
    id: string;
    amount: string;
    transactionId: string | null;
    rentalRequestId: string;
    createdAt: Date;
    status: import("../../generated/prisma/enums").PaymentStatus;
})[]>;
declare const getPayment: (paymentId: string, tenantId: string) => Promise<{
    rentalRequest: {
        id: string;
        tenantId: string;
        propertyId: string;
        status: import("../../generated/prisma/enums").RentalRequestStatus;
        createdAt: Date;
        updatedAt: Date;
    };
} & {
    id: string;
    amount: string;
    transactionId: string | null;
    rentalRequestId: string;
    createdAt: Date;
    status: import("../../generated/prisma/enums").PaymentStatus;
}>;
export declare const paymentService: {
    createPayment: typeof createPayment;
    handleStripeWebhook: typeof handleStripeWebhook;
    getMyPayments: typeof getMyPayments;
    getPayment: typeof getPayment;
};
export {};
//# sourceMappingURL=payment.service.d.ts.map