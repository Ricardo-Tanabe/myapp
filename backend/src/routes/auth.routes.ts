import { Request, Response, Router } from "express";
import { login, logout, register } from "../controllers/auth.controller";
import authMiddleware from "../middlewares/auth.middleware";
import { AuthRequest } from "../types/authRequest";
import jwt, { VerifyErrors } from "jsonwebtoken";

const router = Router();

router.post("/login", login);
router.post("/logout", logout);
router.post("/register", register);
router.post("/refresh", (req: Request, res: Response) => {
    const refreshToken = req.cookies?.refreshToken;

    if(!refreshToken) {
        res.status(401).json({ message: "Nenhum refresh token fornecido" });
    } else {
        jwt.verify(refreshToken, process.env.REFRESH_JWT_SECRE!, (err: VerifyErrors | null, decoded: any) => {
            if (err) {
                return res.status(403).json({ message: "Refresh token inválido" });
            }
    
            const newToken = jwt.sign({ userId: decoded.userId }, process.env.JWT_SECRET!, { expiresIn: "15m" });
    
            res.json({ token: newToken });
        });}
});

router.get("/protected", authMiddleware, (req: AuthRequest, res: Response) => {
    res.json({ message: "You have access to this protected route!", user:req.user })
})

export default router;