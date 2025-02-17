import { Request, Response } from "express";
import AuthService from "../services/auth.service";
import { verifyRefreshToken, generateToken } from "../utils/jwt";

export const register = async (req: Request, res: Response) => {
    try {
        await AuthService.register(req.body.email, req.body.password)
        res.status(201).json({ message: "User registered successfully" });
    } catch(error) {
        if( error instanceof Error) {
            res.status(400).json({ message: error.message });
        } else {
            res.status(400).json({ message: "An unexpected error occurred" })
        }
    }
}

export const login = async (req: Request, res: Response) => {
    try {
        const { token, refreshToken} = await AuthService.login(req.body.email, req.body.password);

        res.cookie("token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict",
        });

        res.cookie("refreshToken", refreshToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict",
            path: "/",
        });

        res.json({ message: "Login successful" });
    } catch(error) {
        if( error instanceof Error) {
            res.status(400).json({ message: error.message });
        } else {
            res.status(400).json({ message: "An unexpected error occurred" })
        }
    }
}

export const refreshToken = (req: Request, res: Response) => {
    const refreshToken = req.cookies?.refreshToken;
    if(!refreshToken) {
        res.status(401).json({ message: "Refresh token not found" });
    } else {
        try {
            const decoded: any = verifyRefreshToken(refreshToken);
            const newToken = generateToken(decoded.userId);
            res.json({ token: newToken });
        } catch(error){
            res.status(403).json( { message: "Invalid refresh token"} );
        }
    }
}

export const logout = (_req: Request, res: Response) => {
    res.clearCookie("refreshToken")
    res.json({ message: "Logout completed successfully" })
}