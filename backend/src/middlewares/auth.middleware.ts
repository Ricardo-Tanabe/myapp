import { Response, NextFunction } from "express";
import { verifyToken } from "../utils/jwt";
import { AuthRequest } from "../types/authRequest";
import { isTokenInvalid } from "../config/tokenStore";
import { AppError } from "./error.middleware";

export const authMiddleware = (req: AuthRequest, res: Response, next: NextFunction): void => {
    const token = req.cookies?.token;

    if (!token || isTokenInvalid(token)) {
        next(new AppError("Access denied.", 401));
        return;
    }
    
    try {
        const decoded: any = verifyToken(token);
        // FUTURE: Implement user search in the database after validating the token.
        req.user = { id: decoded.userId, email: decoded.email, role: decoded.role};
        next();
    } catch (error) {
        if(error instanceof Error) {
            if(error.name === "TokenExpiredError") {
                next(new AppError("Session expired. Please log in again.", 401));
                return;
            }
            console.error("Token verification error: ", error.message);
        }
        next(new AppError("Access denied.", 401));
    }
}

export default authMiddleware;