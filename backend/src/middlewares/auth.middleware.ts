import { Response, NextFunction } from "express";
import { verifyToken } from "../utils/jwt";
import { AuthRequest } from "../types/authRequest";
import { isTokenInvalid } from "../config/tokenStore";

export const authMiddleware = (req: AuthRequest, res: Response, next: NextFunction): void => {
    const token = req.cookies?.token;

    if (!token || isTokenInvalid(token)) {
        res.status(401).json({ message: "Access denied. No token provided." });
        return;
    }
    
    try {
        const decoded: any = verifyToken(token);
        // FUTURE: Implement user search in the database after validating the token.
        req.user = { id: decoded.useId, email: decoded.email};
        next();
    } catch (error) {
        res.status(401).json({ message: "Invalid token." });
    }
}

export default authMiddleware;