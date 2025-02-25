import { Response, NextFunction } from "express";
import { AuthRequest } from "../types/authRequest";

export const roleMiddleware = (requiredRole: "admin" | "user") => {
    return (req: AuthRequest, res: Response, next: NextFunction) => {
        if(!req.user || req.user.role !== requiredRole) {
            res.status(403).json({ message: "Access denied. Insufficient permissions." });
            return;
        }
        next();
    }
}