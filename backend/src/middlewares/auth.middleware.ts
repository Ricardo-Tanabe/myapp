import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export interface AuthRequest extends Request {
    user?: any;
}

export const authMiddleware = (req: AuthRequest, res: Response, next: NextFunction) => {
    const token = req.header("Authorization")?.replace("Bearer ", "");

    if (!token) {
        res.status(401).json({ message: "Access denied. No token provided." });
    } else {
        try {
            const decoded = jwt.verify(token, process.env.JWAT_SECRET as string);
            req.user = decoded;
            next();
        } catch (error) {
            res.status(401).json({ message: "Invalid token." });
        }
    }
}

export default authMiddleware;