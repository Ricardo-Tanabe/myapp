import { Request, Response, Router } from "express";
import { login, logout, register, refreshToken } from "../controllers/auth.controller";
import authMiddleware from "../middlewares/auth.middleware";
import { AuthRequest } from "../types/authRequest";
import jwt, { VerifyErrors } from "jsonwebtoken";

const router = Router();

router.get("/", (req: Request, res: Response) => {
    res.json({ message: "Welcome to Home"})
})
router.post("/login", login);
router.post("/logout", logout);
router.post("/register", register);
router.post("/refresh", refreshToken);
router.get("/me", authMiddleware, (req: AuthRequest, res: Response) => {
    res.json({ user: req.user })
})
router.get("/protected", authMiddleware, (req: AuthRequest, res: Response) => {
    res.json({ message: "You have access to this protected route!", user:req.user })
})

export default router;