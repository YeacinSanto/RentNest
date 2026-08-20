-- CreateEnum
CREATE TYPE "PaymentStatus" AS ENUM ('PENDING', 'PAID', 'FAILED');

-- CreateTable
CREATE TABLE "Payments" (
    "id" TEXT NOT NULL,
    "amount" TEXT NOT NULL,
    "transactionId" TEXT,
    "rentalRequestId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "status" "PaymentStatus" NOT NULL DEFAULT 'PENDING',

    CONSTRAINT "Payments_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Payments_rentalRequestId_key" ON "Payments"("rentalRequestId");

-- AddForeignKey
ALTER TABLE "Payments" ADD CONSTRAINT "Payments_rentalRequestId_fkey" FOREIGN KEY ("rentalRequestId") REFERENCES "RentalRequests"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
