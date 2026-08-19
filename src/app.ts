import express, { Application, Request, Response } from "express";
import config from "./config";
import cors from "cors"
import cookieParser from "cookie-parser";
import { authRouter } from "./modules/auth/auth.route";
import { propertyRoute } from "./modules/properties/properties.route";
import { landlordRouter } from "./modules/landlord/landlord.route";
import { adminRoute } from "./modules/admin/admin.route";
import { rentalRoute } from "./modules/rental/rental.route";
import { reviewRouter } from "./modules/review/review.route";

const app: Application = express()


app.use(cors({
    origin : config.app_url,
    credentials : true
}))

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




export default app;