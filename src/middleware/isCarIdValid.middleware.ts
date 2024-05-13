import { NextFunction, Request, Response } from "express";
import { prisma } from "../database/prisma";

export class IsCarIdValid{
    static async execute(req: Request, res: Response, next: NextFunction){
        const id = req.params.id;

        const car = await prisma.car.findFirst({ where: { id }});

        if(!car){
            return res.status(404).json({ message: "Car not found."});
        }

        next();
    }
}