import express from "express";
import cors from 'cors';
import authRoutes from "./routes/auth.routes";
import cookieParser from "cookie-parser";

const app = express();

// FUTURE: Add database connection before starting the server.
app.use(cors({
    origin: "http://localhost:3000",
    credentials: true,
}));

app.use(cookieParser());

app.use(express.json());

app.use("/api/auth", authRoutes);

export default app;
