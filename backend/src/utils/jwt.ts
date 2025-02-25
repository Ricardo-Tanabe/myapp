import jwt from "jsonwebtoken";
import { env } from "../config/env";

interface TokenPayload {
    userId: string;
    role: "admin" | "user";
}

export const generateToken = (payload: TokenPayload) => {
    return jwt.sign(payload, env.JWT_SECRET, { expiresIn: "15m" });
};

export const generateRefreshToken = (payload: TokenPayload) => {
    return jwt.sign(payload, env.REFRESH_JWT_SECRET, { expiresIn: "7d" });
};

export const verifyToken = (token: string) => {
    return jwt.verify(token, env.JWT_SECRET);
}

export const verifyRefreshToken = (token: string) => {
    return jwt.verify(token, env.REFRESH_JWT_SECRET);
}