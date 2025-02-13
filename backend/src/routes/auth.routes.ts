import { Router } from "express";
import { login, logout, register } from "../controllers/auth.controller";
import authMiddleware, { AuthRequest } from "../middlewares/auth.middleware";

const router = Router();

router.post("/login", login);
router.post("/logout", logout);
router.post("/register", register);
router.get("/protected", authMiddleware, (req, res) => {
    const authReq = req as AuthRequest;
    res.json({ message: "You have access to this protected route!", user:authReq.user })
})

export default router;