import { Router } from "express";
import { auth } from "../../middlewares/auth";
import { Role } from "../../generated/prisma/enums";
import { paymentController } from "./payment.controller";
const router = Router();
router.post("/", auth(Role.TENANT), paymentController.createPayment);
router.get("/", auth(Role.TENANT), paymentController.getMyPayments);
router.get("/:id", auth(Role.TENANT), paymentController.getPayment);
export const paymentRouter = router;
//# sourceMappingURL=payment.route.js.map