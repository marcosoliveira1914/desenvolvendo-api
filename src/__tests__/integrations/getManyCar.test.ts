import { prisma } from "../../database/prisma";
import { carListMock } from "../__mocks__/car.mock";
import { carDefaultExpect } from "../utils/carDefaultExpect";
import { request } from "../utils/request";

describe("Integration test: get many cars", () => {
    
    test("should be able to get many cars successsfully", async () => {

        await prisma.car.createMany({ data: carListMock});

        const data = await request
        .get("/cars")
        .expect(200)
        .then((response) => response.body);

        expect(data).toHaveLength(2);

        expect(data[0].id).toBeDefined();
        carDefaultExpect(data[0], carListMock[0]);

        expect(data[1].id).toBeDefined();
        carDefaultExpect(data[1], carListMock[1]);
    });
});