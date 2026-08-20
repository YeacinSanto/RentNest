import * as runtime from "@prisma/client/runtime/client";
import * as $Class from "./internal/class";
import * as Prisma from "./internal/prismaNamespace";
export * as $Enums from './enums';
export * from "./enums";
/**
 * ## Prisma Client
 *
 * Type-safe database client for TypeScript
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Categories
 * const categories = await prisma.categories.findMany()
 * ```
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export declare const PrismaClient: $Class.PrismaClientConstructor;
export type PrismaClient<LogOpts extends Prisma.LogLevel = never, OmitOpts extends Prisma.PrismaClientOptions["omit"] = Prisma.PrismaClientOptions["omit"], ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = $Class.PrismaClient<LogOpts, OmitOpts, ExtArgs>;
export { Prisma };
/**
 * Model Categories
 *
 */
export type Categories = Prisma.CategoriesModel;
/**
 * Model Payments
 *
 */
export type Payments = Prisma.PaymentsModel;
/**
 * Model Properties
 *
 */
export type Properties = Prisma.PropertiesModel;
/**
 * Model RentalRequests
 *
 */
export type RentalRequests = Prisma.RentalRequestsModel;
/**
 * Model Reviews
 *
 */
export type Reviews = Prisma.ReviewsModel;
/**
 * Model User
 *
 */
export type User = Prisma.UserModel;
//# sourceMappingURL=client.d.ts.map