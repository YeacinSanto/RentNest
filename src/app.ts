import express, { application, Application, Request, Response } from "express";
import config from "./config";
import cors from "cors"
import cookieParser from "cookie-parser";
import { authRouter } from "./modules/auth/auth.route";
import { propertyRoute } from "./modules/properties/properties.route";
import { landlordRouter } from "./modules/landlord/landlord.route";
import { adminRoute } from "./modules/admin/admin.route";
import { rentalRoute } from "./modules/rental/rental.route";
import { reviewRouter } from "./modules/review/review.route";
import { paymentRouter } from "./modules/payment/payment.route";
import { json } from "node:stream/consumers";
import { paymentController } from "./modules/payment/payment.controller";


const app: Application = express()


app.use(cors({
  origin: config.app_url,
  credentials: true
}))

app.post("/api/payments/webhook", express.raw({ type: "application/json" }), paymentController.stripeWebhook)

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())

app.get('/', (req: Request, res: Response) => {
  res.status(200).json({
    title: "Rent Nest",
    description: "RentNest is a backend API for a rental property marketplace. Landlords can list properties, manage availability, and approve or reject rental requests. Tenants can browse listings, submit rental requests, and leave reviews. Admins oversee the entire platform, managing users and moderating content.",
    PublicEndpoints: {
      register: "POST /api/auth/register",
      login: "POST /api/auth/login",

      getAllProperties: "GET /api/properties",
      getPropertyById: "GET /api/properties/:id",
      getAllCategories: "GET /api/categories"
    }
  })
})

app.use("/api/auth", authRouter)
app.use("/api", propertyRoute)
app.use("/api/landlord/", landlordRouter)
app.use("/api/admin", adminRoute)
app.use("/api/rentals", rentalRoute)
app.use("/api/reviews", reviewRouter);
app.use("/api/payments", paymentRouter)





export default app;