import { Router } from "express";
import { auth } from "../../middlewares/auth";
import { Role } from "../../generated/prisma/enums";
import { paymentController } from "./payment.controller";

const router = Router();

router.post("/",auth(Role.TENANT),paymentController.createPayment)

export const paymentRouter = router