import { Router } from "express";
import authMiddleware from "../middlewares/auth.middleware";
import { login,
         logout,
         register,
         refreshToken,
         requestNewToken,
         protectedRoute } from "../controllers/auth.controller";

const router = Router();

router.post("/login", login);
router.post("/logout", logout);
router.post("/register", register);
router.post("/refresh", refreshToken);
router.get("/me", authMiddleware, requestNewToken)
router.get("/protected", authMiddleware, protectedRoute)

export default router;