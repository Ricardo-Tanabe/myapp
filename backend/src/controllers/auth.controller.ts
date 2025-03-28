import { Request, Response, NextFunction } from "express";
import AuthService from "../services/auth.service";
import { verifyRefreshToken, generateToken, generateRefreshToken } from "../utils/jwt";
import { body, validationResult } from "express-validator";
import { AuthRequest } from "../types/authRequest";
import { addInvalidToken, isTokenInvalid } from "../config/tokenStore";

export const register = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    await body("email").isEmail().normalizeEmail().run(req);
    await body("password").trim().isLength({ min: 6 }).run(req);

    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        res.status(400).json({ errors: errors.array() })
        return;
    }

    try {
        const { message, userId } = await AuthService.register(req.body.email, req.body.password)
        res.status(201).json({ message: message });
    } catch(error) {
        next(error);
    }
}

export const login = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    await body("email").isEmail().normalizeEmail().run(req);
    await body("password").trim().isLength({ min: 6 }).run(req);

    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        res.status(400).json({ errors: errors.array() })
        return;
    }
    
    try {
        const { token, refreshToken, message} = await AuthService.login(req.body.email, req.body.password);

        res.cookie("token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict",
            maxAge: 15 * 60 * 1000,
        });

        res.cookie("refreshToken", refreshToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict",
            path: "/api/auth/refresh",
            maxAge: 7 * 24 * 60 * 60 * 1000,
        });

        res.json({ message: message });
    } catch(error) {
        next(error);
    }
}

export const refreshToken = async (req: Request, res: Response): Promise<void> => {
    const refreshToken = req.cookies?.refreshToken;

    if(!refreshToken || isTokenInvalid(refreshToken)) {
        res.status(403).json({ message: "Refresh token not found or invalid" });
        return;
    }

    try {
        const decoded: any = verifyRefreshToken(refreshToken);
        const payload = { userId: decoded.userId, role: decoded.role};

        const newToken = generateToken(payload);
        const newRefreshToken = generateRefreshToken(payload);

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

        res.status(200).json({ message: "Token refreshed" })

        // When the token is added to setImmediate, before the above cookie
        // is sent, it is already invalidated.
        // setImmediate(() => addInvalidToken(refreshToken));
    } catch(error){
        res.status(403).json({ message: "Invalid refresh token" });
    }
}

export const logout = async (req: Request, res: Response): Promise<void> => {
    const refreshToken = req.cookies?.refreshToken;

    if(refreshToken) {
        addInvalidToken(refreshToken);
    }

    res.cookie("token", "", {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        expires: new Date(0),
    });

    res.cookie("refreshToken", "", {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        path: "/api/auth/refresh",
        expires: new Date(0),
    });

    res.status(200).json({ message: "Logout completed successfully" });
}

export const sendCsrf = async (req: Request, res: Response): Promise<void> => {
    res.json({ csrfToken: req.csrfToken() });
}

export const requestNewToken = async (req: AuthRequest, res: Response): Promise<void> => {
    res.status(200).json({ user:req.user });
}

export const protectedRoute = async (req: AuthRequest, res: Response): Promise<void> => {
    res.json({ message: "You have access to this protected route!", user:req.user });
}