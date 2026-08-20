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
    origin : config.app_url,
    credentials : true
}))

app.post("/api/payments/webhook", express.raw({type:"application/json"}),paymentController.stripeWebhook)

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())

app.get('/', (req:Request, res:Response) => {
  res.send('Hello World!')
})

app.use("/api/auth",authRouter)
app.use("/api",propertyRoute)
app.use("/api/landlord/",landlordRouter)
app.use("/api/admin", adminRoute)
app.use("/api/rentals",rentalRoute)
app.use("/api/reviews", reviewRouter);
app.use("/api/payments",paymentRouter)





export default app;