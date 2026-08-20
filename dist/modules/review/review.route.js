import { Router } from "express";
import { reviewController } from "./review.controller";
import { auth } from "../../middlewares/auth";
import { Role } from "../../generated/prisma/enums";
const router = Router();
router.post("/", auth(Role.TENANT), reviewController.createReview);
export const reviewRouter = router;
//# sourceMappingURL=review.route.js.map