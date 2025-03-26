import { Router } from "express";
import authMiddleware from "../middlewares/auth.middleware";
import { loginLimiter } from "../middlewares/rateLimiter";
import { roleMiddleware } from "../middlewares/role.middleware";
import { login,
         logout,
         register,
         refreshToken,
         sendCsrf,
         requestNewToken,
         protectedRoute } from "../controllers/auth.controller";

const router = Router();

router.post("/login", loginLimiter, login);
router.post("/logout", logout);
router.post("/register", register);
router.post("/refresh", refreshToken);
router.get("/csrf-token", sendCsrf);
// roleMiddleware("admin") is just a test to see if it blocks users
// without permission.
router.get("/me", authMiddleware, requestNewToken); //, roleMiddleware("admin")
router.get("/protected", authMiddleware, protectedRoute);

export default router;