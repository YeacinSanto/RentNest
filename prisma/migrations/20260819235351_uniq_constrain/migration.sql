/*
  Warnings:

  - A unique constraint covering the columns `[tenantId,propertyId]` on the table `reviews` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "reviews_tenantId_propertyId_key" ON "reviews"("tenantId", "propertyId");
