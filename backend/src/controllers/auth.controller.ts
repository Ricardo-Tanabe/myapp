import { Request, Response, NextFunction } from "express";
import AuthService from "../services/auth.service";
import bcrypt from "bcrypt";
import dotenv from "dotenv";

dotenv.config();

const users: { email: string; password: string }[] = [];

export const register = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { email, password } = req.body;

        if(users.find((u) => u.email === email)) {
            res.status(400).json({ message: "User alreagy exists "});
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        users.push({ email, password: hashedPassword });

        res.status(201).json({ message: "User registered successfully" });
    } catch(error) {
        next(error);
    }
}

export const login = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const {email, password } = req.body;
        const token = await AuthService.login(email, password);
    
        if(!token) {
            res.status(401).json({ message: "Invalid credentials" });
        } else {
            res.json({ token });
        }
    } catch(error) {
        next(error);
    }
}

export const logout = (_req: Request, res: Response) => {
    res.json({ message: "Logout completed successfully" })
}