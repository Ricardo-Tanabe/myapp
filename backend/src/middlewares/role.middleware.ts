import { Response, NextFunction } from "express";
import { AuthRequest } from "../types/authRequest";
import { AppError } from "./error.middleware";

export const roleMiddleware = (requiredRole: "admin" | "user") => {
    return (req: AuthRequest, res: Response, next: NextFunction) => {
        try {
            if(!req.user) {
                throw new AppError("Unauthorized: No user data found.", 401)
            }

            if(req.user.role !== requiredRole) {
                throw new AppError(`Access denied. Required role: ${requiredRole}`, 403);
            }
            next();
        } catch (error) {
            next(error);
        }
    }
}