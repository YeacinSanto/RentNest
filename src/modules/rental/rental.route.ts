import { Router } from "express";
import { auth } from "../../middlewares/auth";
import { Role } from "../../generated/prisma/enums";
import { rentalController } from "./rental.controller";

const router = Router();

router.post("/",auth(Role.TENANT), rentalController.createRentalRequest)
router.get("/",auth(Role.TENANT),rentalController.getMyRentalRequests)
router.get("/:id", auth(Role.TENANT), rentalController.getRentalRequest)

export const rentalRoute = router;