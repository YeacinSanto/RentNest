-- AlterTable
ALTER TABLE "properties" ADD COLUMN     "images" TEXT[] DEFAULT ARRAY[]::TEXT[];
