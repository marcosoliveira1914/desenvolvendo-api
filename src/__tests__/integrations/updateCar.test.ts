import { prisma } from "../../database/prisma";
import { carCreateBodyMock, carUpdateBodyMock } from "../__mocks__/car.mock";
import { request } from "../utils/request";

describe("Integration test: update car", () => {
    
    test("should be able to update a car successsfully", async () => {

        const car = await prisma.car.create({ data: carCreateBodyMock});

        const data = await request
        .patch(`/cars/${car.id}`)
        .send(carUpdateBodyMock)
        .expect(200)
        .then((response) => response.body);

        const updatedCar = { ...car, ...carUpdateBodyMock };

        expect(data).toStrictEqual(updatedCar);
    });

    test("should trown error when car is invalid", async () => {

        const data = await request
        .patch(`/cars/9b7feca3-47e0-4f43-84e0-e205d7528b93`)
        .send(carUpdateBodyMock)
        .expect(404)
        .then((response) => response.body);

        expect(data.message).toBe("Car not found.");
    });
});

