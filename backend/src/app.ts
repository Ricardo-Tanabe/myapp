import express from "express";
import cors from 'cors';
import authRoutes from "./routes/auth.routes";
import cookieParser from "cookie-parser";

const app = express();

// FUTURE: Add database connection before starting the server.
app.use(cors({ // Allows the frontend to access the backend
    origin: "http://localhost:3000",
    credentials: true,
}));

app.use(cookieParser()); // Allows the backend to read cookies in req.cookies

app.use(express.json()); // Allows receiving JSON in req.body

app.use("/api/auth", authRoutes); // Authorization routes

export default app;
