export declare const Role: {
    readonly TENANT: 'TENANT';
    readonly LANDLORD: 'LANDLORD';
    readonly ADMIN: 'ADMIN';
};
export type Role = (typeof Role)[keyof typeof Role];
export declare const UserStatus: {
    readonly ACTIVE: 'ACTIVE';
    readonly BANNED: 'BANNED';
};
export type UserStatus = (typeof UserStatus)[keyof typeof UserStatus];
export declare const PropertyStatus: {
    readonly AVAILABLE: 'AVAILABLE';
    readonly RENTED: 'RENTED';
    readonly UNAVAILABLE: 'UNAVAILABLE';
};
export type PropertyStatus = (typeof PropertyStatus)[keyof typeof PropertyStatus];
export declare const RentalRequestStatus: {
    readonly PENDING: 'PENDING';
    readonly APPROVED: 'APPROVED';
    readonly REJECTED: 'REJECTED';
    readonly COMPLETED: 'COMPLETED';
};
export type RentalRequestStatus = (typeof RentalRequestStatus)[keyof typeof RentalRequestStatus];
export declare const PaymentStatus: {
    readonly PENDING: 'PENDING';
    readonly PAID: 'PAID';
    readonly FAILED: 'FAILED';
};
export type PaymentStatus = (typeof PaymentStatus)[keyof typeof PaymentStatus];
//# sourceMappingURL=enums.d.ts.map