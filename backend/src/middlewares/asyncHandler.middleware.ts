import { Request, Response, NextFunction } from "express"

/*
 * Middleware to automatically catch errors in asynchronous functions.
 * Avoids the need for try-catch on each route.
 */

const asyncHandler = (fn: (req: Request, res: Response, next: NextFunction) => Promise<any>) =>
    (req: Request, res: Response, next: NextFunction) => {
        Promise.resolve(fn(req, res, next)).catch(next);
    }

export default asyncHandler;