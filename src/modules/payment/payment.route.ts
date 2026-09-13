import { Router } from "express";
import { auth } from "../../middlewares/auth";
import { Role } from "../../generated/prisma/enums";
import { paymentController } from "./payment.controller";
import express from "express"

const router = Router();

router.post("/",auth(Role.TENANT),paymentController.createPayment)
router.get("/",auth(Role.TENANT),paymentController.getMyPayments)
router.get("/:id",auth(Role.TENANT),paymentController.getPayment)
router.get("/payment/success", paymentController.paymentSuccessPage)
router.get("/payment/cancel", paymentController.paymentCancelPage)
router.post("/api/payments/webhook", express.raw({ type: "application/json" }), paymentController.stripeWebhook)


export const paymentRouter = router