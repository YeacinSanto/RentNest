import * as runtime from "@prisma/client/runtime/index-browser";
export type * from '../models';
export type * from './prismaNamespace';
export declare const Decimal: typeof runtime.Decimal;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
/**
 * Helper for filtering JSON entries that have `null` on the database (empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const DbNull: import("@prisma/client-runtime-utils").DbNullClass;
/**
 * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const JsonNull: import("@prisma/client-runtime-utils").JsonNullClass;
/**
 * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const AnyNull: import("@prisma/client-runtime-utils").AnyNullClass;
export declare const ModelName: {
    readonly Categories: 'Categories';
    readonly Payments: 'Payments';
    readonly Properties: 'Properties';
    readonly RentalRequests: 'RentalRequests';
    readonly Reviews: 'Reviews';
    readonly User: 'User';
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export declare const TransactionIsolationLevel: {
    readonly ReadUncommitted: 'ReadUncommitted';
    readonly ReadCommitted: 'ReadCommitted';
    readonly RepeatableRead: 'RepeatableRead';
    readonly Serializable: 'Serializable';
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const CategoriesScalarFieldEnum: {
    readonly id: 'id';
    readonly name: 'name';
    readonly description: 'description';
};
export type CategoriesScalarFieldEnum = (typeof CategoriesScalarFieldEnum)[keyof typeof CategoriesScalarFieldEnum];
export declare const PaymentsScalarFieldEnum: {
    readonly id: 'id';
    readonly amount: 'amount';
    readonly transactionId: 'transactionId';
    readonly rentalRequestId: 'rentalRequestId';
    readonly createdAt: 'createdAt';
    readonly status: 'status';
};
export type PaymentsScalarFieldEnum = (typeof PaymentsScalarFieldEnum)[keyof typeof PaymentsScalarFieldEnum];
export declare const PropertiesScalarFieldEnum: {
    readonly id: 'id';
    readonly title: 'title';
    readonly description: 'description';
    readonly location: 'location';
    readonly price: 'price';
    readonly categoryId: 'categoryId';
    readonly landlordId: 'landlordId';
    readonly status: 'status';
    readonly createdAt: 'createdAt';
    readonly updatedAt: 'updatedAt';
};
export type PropertiesScalarFieldEnum = (typeof PropertiesScalarFieldEnum)[keyof typeof PropertiesScalarFieldEnum];
export declare const RentalRequestsScalarFieldEnum: {
    readonly id: 'id';
    readonly tenantId: 'tenantId';
    readonly propertyId: 'propertyId';
    readonly status: 'status';
    readonly createdAt: 'createdAt';
    readonly updatedAt: 'updatedAt';
};
export type RentalRequestsScalarFieldEnum = (typeof RentalRequestsScalarFieldEnum)[keyof typeof RentalRequestsScalarFieldEnum];
export declare const ReviewsScalarFieldEnum: {
    readonly id: 'id';
    readonly rating: 'rating';
    readonly comment: 'comment';
    readonly createdAt: 'createdAt';
    readonly tenantId: 'tenantId';
    readonly propertyId: 'propertyId';
};
export type ReviewsScalarFieldEnum = (typeof ReviewsScalarFieldEnum)[keyof typeof ReviewsScalarFieldEnum];
export declare const UserScalarFieldEnum: {
    readonly id: 'id';
    readonly name: 'name';
    readonly email: 'email';
    readonly password: 'password';
    readonly role: 'role';
    readonly status: 'status';
    readonly createdAt: 'createdAt';
    readonly updatedAt: 'updatedAt';
};
export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: 'asc';
    readonly desc: 'desc';
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const QueryMode: {
    readonly default: 'default';
    readonly insensitive: 'insensitive';
};
export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];
export declare const NullsOrder: {
    readonly first: 'first';
    readonly last: 'last';
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
//# sourceMappingURL=prismaNamespaceBrowser.d.ts.map