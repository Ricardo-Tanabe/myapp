import express, {Request, Response, NextFunction} from "express";
import cors from 'cors';
import authRoutes from "./routes/auth.routes";
import cookieParser from "cookie-parser";
import helmet from "helmet";
import csrf from "./middlewares/csrf.middleware";
import { errorMiddleware } from "./middlewares/error.middleware";

const app = express();

// FUTURE: Add database connection before starting the server.
app.use(cors({ // Allows the frontend to access the backend
    origin: "http://localhost:3000",
    credentials: true,
}));

app.use(helmet({
    contentSecurityPolicy: false, //Disable CSP to avoid unwanted blocking (adjust as needed)
})); // Help secure Express apps by setting HTTP response headers.

app.use(cookieParser()); // Allows the backend to read cookies in req.cookies

// Invalid JSON handling
app.use(express.json({ limit: "10kb" })); // Allows receiving JSON in req.body. The parameter set a limit to avoid large payloads

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
    if(err instanceof SyntaxError && "body" in err) {
        res.status(400).json({ error: "Invalid JSON format" });
        return;
    }
    next();
})

app.use(csrf);

app.use("/api/auth", authRoutes); // Authorization routes

app.use(errorMiddleware);

export default app;
