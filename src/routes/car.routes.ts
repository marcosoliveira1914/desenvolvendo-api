import { Router } from "express";
import { CarControllers } from "../controllers/car.controllers";
import { ensure } from "../middleware/ensure.middleware";
import { carCreateBodySchema, carUpdateBodySchema } from "../schemas/car.schemas";
import { IsCarIdValid } from "../middleware/isCarIdValid.middleware";

export const carRouter = Router();

const carControllers = new CarControllers();

carRouter.post("/",ensure.bodyIsValid(carCreateBodySchema),
carControllers.create);

carRouter.get("/", carControllers.getMany);

carRouter.get("/:id", IsCarIdValid.execute ,carControllers.getOne);

carRouter.patch("/:id", IsCarIdValid.execute, ensure.bodyIsValid(carUpdateBodySchema), carControllers.update);

carRouter.delete("/:id", IsCarIdValid.execute, carControllers.delete);