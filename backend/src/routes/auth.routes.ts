import { Router } from "express";
import authMiddleware from "../middlewares/auth.middleware";
import { loginLimiter } from "../middlewares/rateLimiter";
import { login,
         logout,
         register,
         refreshToken,
         requestNewToken,
         protectedRoute } from "../controllers/auth.controller";

const router = Router();

router.post("/login", loginLimiter, login);
router.post("/logout", logout);
router.post("/register", register);
router.post("/refresh", refreshToken);
router.get("/me", authMiddleware, requestNewToken);
router.get("/protected", authMiddleware, protectedRoute);

export default router;