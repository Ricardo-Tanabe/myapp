import { Request, Response } from "express";
import AuthService from "../services/auth.service";
import { verifyRefreshToken, generateToken, generateRefreshToken } from "../utils/jwt";
import { AuthRequest } from "../types/authRequest";
import { addInvalidToken, isTokenInvalid } from "../config/tokenStore";

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
            path: "/api/auth/refresh",
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

    if(!refreshToken || isTokenInvalid(refreshToken)) {
        res.status(403).json({ message: "Refresh token not found or invalid" });
        return;
    }

    try {
        const decoded: any = verifyRefreshToken(refreshToken);

        const newToken = generateToken(decoded.userId);
        const newRefreshToken = generateRefreshToken(decoded.userId);

        addInvalidToken(refreshToken);

        res.cookie("token", newToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict",
            maxAge: 15 * 60 * 1000,
        });
        
        res.cookie("refreshToken", newRefreshToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict",
            path: "/api/auth/refresh",
            maxAge: 7 * 24 * 60 * 60 * 1000,
        });

        res.json({ token: newToken });
    } catch(error){
        res.status(403).json( { message: "Invalid refresh token"} );
    }
}

export const logout = (req: Request, res: Response) => {
    const refreshToken = req.cookies?.refreshToken;

    if(refreshToken) {
        addInvalidToken(refreshToken);
    }

    res.cookie("token", "", {
        httpOnly: true,
        secure: true,
        sameSite: "strict",
        expires: new Date(0),
    });

    res.cookie("refreshToken", "", {
        httpOnly: true,
        secure: true,
        sameSite: "strict",
        expires: new Date(0),
    });

    res.status(200).json({ message: "Logout completed successfully" });
}

export const requestNewToken = (req: AuthRequest, res: Response) => {
    res.json({ user:req.user });
}

export const protectedRoute = (req: AuthRequest, res: Response) => {
    res.json({ message: "You have access to this protected route!", user:req.user });
}