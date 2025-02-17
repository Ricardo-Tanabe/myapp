import { Response, NextFunction } from "express";
import { verifyToken } from "../utils/jwt";
import { AuthRequest } from "../types/authRequest";

export const authMiddleware = (req: AuthRequest, res: Response, next: NextFunction): void => {
    const token = req.cookies?.token;

    if (!token) {
        res.status(401).json({ message: "Access denied. No token provided." });
        return;
    } else {
        try {
            // FUTURE: Implement user search in the database after validating the token.
            req.user = verifyToken(token);
            next();
        } catch (error) {
            res.status(401).json({ message: "Invalid token." });
        }
    }
}

export default authMiddleware;