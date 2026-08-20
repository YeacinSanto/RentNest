-- AlterTable
ALTER TABLE "Payments" ADD COLUMN     "method" TEXT,
ADD COLUMN     "paidAt" TIMESTAMP(3),
ADD COLUMN     "provider" TEXT NOT NULL DEFAULT 'STRIPE';
