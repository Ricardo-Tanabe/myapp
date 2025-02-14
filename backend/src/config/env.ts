import dotenv from "dotenv";

dotenv.config();

export const env = {
    PORT: process.env.PORT || 3001,
    JWT_SECRET: process.env.JWT_SECRET || "default_jwt_secret",
    REFRESH_JWT_SECRET: process.env.JWT_SECRET || "default_refresh_secret",
    NODE_ENV: process.env.NODE_ENV || "development",
}