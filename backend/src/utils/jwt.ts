import jwt from "jsonwebtoken";
import { env } from "../config/env";

interface TokenPayload {
    userId: string;
    role: "admin" | "user";
}

export const generateToken = (payload: TokenPayload) => {
    try {
        return jwt.sign(payload, env.JWT_SECRET, { expiresIn: "15m" });
    } catch (error) {
        console.error("Error generating token: ", error);
        throw new Error("Token generation failed")
    }
};

export const generateRefreshToken = (payload: TokenPayload) => {
    try {
        return jwt.sign(payload, env.REFRESH_JWT_SECRET, { expiresIn: "7d" });
    } catch (error) {
        console.error("Error generating refresh token: ", error);
        throw new Error("Refresh token generation failed")
    }
};

export const verifyToken = (token: string) => {
    try {
        return jwt.verify(token, env.JWT_SECRET);
    } catch (error) {
        console.error("Invalid or expired token: ", error);
        return null;
    }
}

export const verifyRefreshToken = (token: string) => {
    try {
        return jwt.verify(token, env.REFRESH_JWT_SECRET);
    } catch (error) {
        console.error("Invalid or expired refresh token: ", error);
        return null;
    }
}