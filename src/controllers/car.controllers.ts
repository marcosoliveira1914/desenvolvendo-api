import { Request, Response } from "express";
import { CarServices } from "../services/car.services";

export class CarControllers{

    async create(req: Request, res: Response): Promise<Response> {

        const carService = new CarServices();

        const response = await carService.create(req.body);

        return res.status(201).json(response);
    }

    async getMany(req: Request, res: Response): Promise<Response> {

        const carService = new CarServices();

        const response = await carService.getMany();

        return res.status(200).json(response);
    }

    async getOne(req: Request, res: Response): Promise<Response> {

        const carService = new CarServices();

        const id = req.params.id;

        const response = await carService.getOne(id);

        return res.status(200).json(response);
    }

    async update(req: Request, res: Response): Promise<Response> {

        const carService = new CarServices();

        const id = req.params.id;

        const response = await carService.update(req.body, id);

        return res.status(200).json(response);
    }

    async delete(req: Request, res: Response): Promise<Response<void>> {

        const carService = new CarServices();

        const id = req.params.id;

        await carService.delete(id);

        return res.status(204).json();
    }
}