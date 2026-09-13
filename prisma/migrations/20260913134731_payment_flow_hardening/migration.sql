-- AlterEnum
ALTER TYPE "PaymentStatus" ADD VALUE 'REFUNDED';

-- AlterTable
ALTER TABLE "Payments" ADD COLUMN "checkoutSessionId" TEXT;

-- AlterTable
ALTER TABLE "RentalRequests" ADD COLUMN "agreedPrice" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "Payments_checkoutSessionId_key" ON "Payments"("checkoutSessionId");
