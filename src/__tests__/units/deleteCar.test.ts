import { prisma } from "../../database/prisma";
import { CarServices } from "../../services/car.services";
import { carCreateBodyMock, carMock } from "../__mocks__/car.mock";

describe("Unit test: delete car", () => {

    test("delete car should work correctly", async () => {

        const carServices = new CarServices();

        await carServices.delete(carMock.id);

    });
});