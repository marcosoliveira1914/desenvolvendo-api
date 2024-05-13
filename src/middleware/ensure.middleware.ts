import { NextFunction, Request, Response } from "express";
import { ZodSchema } from "zod";

class EnsureMiddleware{
    bodyIsValid = (Schema: ZodSchema) =>
        (req: Request, res: Response, next: NextFunction): void => {
            req.body = Schema.parse(req.body);

            return next();
        }
}

export const ensure = new EnsureMiddleware();