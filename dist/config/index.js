import dotenv from "dotenv";
import path from "path";
dotenv.config({ path: path.join(process.cwd(), ".env") });
export default {
    port: process.env.PORT,
    app_url: process.env.APP_URL,
    bcrypt_salt_round: process.env.BCRYPT_SALT_ROUND,
    jwt_access_secret: process.env.JWT_ACCESS_SECRET,
    jwt_access_expire_in: process.env.JWT_ACCESS_EXPIRE_IN,
    jwt_refresh_secret: process.env.JWT_REFRESH_SECRET,
    jwt_refresh_expire_in: process.env.JWT_REFRESH_EXPIRE_IN,
    stripe_secret_key: process.env.STRIPE_SECRET_KEY,
    stripe_webhook_secret: process.env.STRIPE_WEBHOOK_SECRET
};
//# sourceMappingURL=index.js.map