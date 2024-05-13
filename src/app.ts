import express, { json } from "express";
import { HandleErrors } from "./middleware/handleErrors.middleware";
import { carRouter } from "./routes/car.routes";

export const app = express();

app.use(json());

app.use("/cars", carRouter);

app.use(HandleErrors.execute);