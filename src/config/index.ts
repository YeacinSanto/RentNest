import dotenv from "dotenv"
import path from "path"


dotenv.config({path: path.join(process.cwd(),".env")})

export default {
    port : process.env.PORT,
    app_url : process.env.APP_URL,
    bcrypt_salt_round : process.env.BCRYPT_SALT_ROUND,
}