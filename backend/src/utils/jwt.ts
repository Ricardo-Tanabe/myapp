import jwt from "jsonwebtoken";
import { env } from "../config/env";

export const generateToken = (userId: string) => {
    return jwt.sign({ userId }, env.JWT_SECRET, { expiresIn: "15m" });
};

export const generateRefreshToken = (userId: string) => {
    return jwt.sign({ userId }, env.REFRESH_JWT_SECRET, { expiresIn: "7d" });
};

export const verifyToken = (token: string) => {
    return jwt.verify(token, env.JWT_SECRET);
}

export const verifyRefreshToken = (token: string) => {
    return jwt.verify(token, env.REFRESH_JWT_SECRET);
}