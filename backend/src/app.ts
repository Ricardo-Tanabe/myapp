import express from "express";
import cors from 'cors';
import authRoutes from "./routes/auth.routes";
import cookieParser from "cookie-parser";
import helmet from "helmet";
import csrf from "./middlewares/csrf";

const app = express();

// FUTURE: Add database connection before starting the server.
app.use(cors({ // Allows the frontend to access the backend
    origin: "http://localhost:3000",
    credentials: true,
}));

app.use(helmet()); // Help secure Express apps by setting HTTP response headers.

app.use(cookieParser()); // Allows the backend to read cookies in req.cookies

app.use(express.json()); // Allows receiving JSON in req.body

app.use(csrf);

app.use("/api/auth", authRoutes); // Authorization routes

export default app;
