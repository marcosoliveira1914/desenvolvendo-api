import { CarServices } from "../../services/car.services";
import { carCreateBodyListMock } from "../__mocks__/car.mock";
import { prismaMock } from "../__mocks__/prisma";
import { carDefaultExpect } from "../utils/carDefaultExpect";

describe("Unit test: get many cars", () => {

    test("get many cars should work correctly", async () => {

        prismaMock.car.findMany.mockResolvedValue(carCreateBodyListMock)
        const carServices = new CarServices();

        const data = await carServices.getMany();

        expect(data).toHaveLength(carCreateBodyListMock.length);
        carDefaultExpect(data[0], carCreateBodyListMock[0]);
        carDefaultExpect(data[1], carCreateBodyListMock[1]);
    });
});