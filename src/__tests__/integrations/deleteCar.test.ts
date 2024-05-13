import { prisma } from "../../database/prisma";
import { carCreateBodyMock } from "../__mocks__/car.mock";
import { request } from "../utils/request";

describe("Integration test: delete car", () => {
    
    test("should be able to delete a car successsfully", async () => {

        const car = await prisma.car.create({ data: carCreateBodyMock});

        await request
        .delete(`/cars/${car.id}`)
        .expect(204)
    });

    test("should trown error when car is invalid", async () => {

        const data = await request
        .delete(`/cars/9b7feca3-47e0-4f43-84e0-e205d7528b93`)
        .expect(404)
        .then((response) => response.body);

        expect(data.message).toBe("Car not found.");
    });
});