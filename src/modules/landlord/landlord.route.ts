import { Router } from "express";
import { landlordController } from "./landlord.controller";
import { auth } from "../../middlewares/auth";
import { Role } from "../../generated/prisma/enums";
import { uploadPropertyImages } from "../../middlewares/upload";

const router = Router();

router.post("/properties",auth(Role.LANDLORD),landlordController.createProperty)
router.put("/properties/:id", auth(Role.LANDLORD),landlordController.updateProperty)
router.delete("/properties/:id",auth(Role.LANDLORD), landlordController.deleteProperty)
router.post("/properties/:id/images",auth(Role.LANDLORD),uploadPropertyImages,landlordController.addPropertyImages)
router.get("/requests", auth(Role.LANDLORD), landlordController.getAllRentalRequest)
router.patch("/requests/:id",auth(Role.LANDLORD),landlordController.updateRentalRequest)


export const landlordRouter = router;