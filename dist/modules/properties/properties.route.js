import { Router } from "express";
import { propertyController } from "./properties.controller";
const router = Router();
router.get("/properties", propertyController.getProperty);
router.get("/properties/:id", propertyController.getPropertyById);
router.get("/categories", propertyController.getPropertyCategory);
export const propertyRoute = router;
//# sourceMappingURL=properties.route.js.map