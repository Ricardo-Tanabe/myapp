import { Router } from "express";
import authMiddleware from "../middlewares/auth.middleware";
import { loginLimiter } from "../middlewares/rateLimiter.middleware";
import { roleMiddleware } from "../middlewares/role.middleware"; // Blocks users without permission
import { login, logout, register,
         refreshToken, sendCsrf,
         requestNewToken,
         protectedRoute } from "../controllers/auth.controller";
import asyncHandler from "../middlewares/asyncHandler.middleware"; //Middleware to automatically catch async errors

const router = Router();

router.post("/login", loginLimiter, asyncHandler(login));
router.post("/logout", asyncHandler(logout));
router.post("/register", asyncHandler(register));
router.post("/refresh", asyncHandler(refreshToken));
router.get("/csrf-token", asyncHandler(sendCsrf));
router.get("/me", authMiddleware, asyncHandler(requestNewToken));
router.get("/protected", authMiddleware, asyncHandler(protectedRoute));

export default router;