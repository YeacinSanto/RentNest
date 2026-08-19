import express, { Application, Request, Response } from "express";
import config from "./config";
import cors from "cors"
import cookieParser from "cookie-parser";
import { authRouter } from "./modules/auth/auth.route";

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




export default app;