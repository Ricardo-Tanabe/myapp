import { Request, Response, NextFunction } from "express"

class AppError extends Error {
    statusCode: number;

    constructor(message: string, statusCode: number) {
        super(message);
        this.statusCode = statusCode;
        Object.setPrototypeOf(this, new.target.prototype);
    }
}

const errorMiddleware = (err: Error, req: Request, res: Response, next: NextFunction): void => {
    console.error(`[ERROR] ${err.name}: ${err.message}`);

    if(err instanceof AppError) {
        res.status(err.statusCode).json({ error: err.message });
        return;
    }

    res.status(500).json({ error: "Internal Server Error"});
    return;
};

export { errorMiddleware, AppError };