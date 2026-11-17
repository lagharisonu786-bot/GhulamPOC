const request = require("supertest");
const app = require("../server/server");
const foodStore = require("../server/foodStore");

describe("Food API", () => {
    test("GET /foods returns all five foods as JSON", async () => {
        const response = await request(app).get("/foods")
            .expect("Content-Type", /json/).expect(200);
        expect(response.body).toEqual([
            { id: 1, name: "Pizza", price: 12.99 },
            { id: 2, name: "Burger", price: 8.99 },
            { id: 3, name: "Pasta", price: 10.49 },
            { id: 4, name: "Salad", price: 6.99 },
            { id: 5, name: "Sandwich", price: 7.49 }
        ]);
    });
    test("Unknown routes return 404", async () => {
        const response = await request(app).get("/unknown").expect(404);
        expect(response.body).toEqual({ error: "Route not found" });
    });
    test("POST /foods is not implemented and does not add data", async () => {
        await request(app).post("/foods")
            .send({ name: "Soup", price: 5.99 }).expect(404);
        const response = await request(app).get("/foods");
        expect(response.body).toHaveLength(5);
    });
});
describe("Food store", () => {
    test("Imports share one singleton", () => {
        expect(require("../server/foodStore")).toBe(foodStore);
    });
    test("Returned data cannot change stored foods", () => {
        const foods = foodStore.getAll();
        foods[0].price = 0;
        foods.pop();
        expect(foodStore.getAll()).toHaveLength(5);
        expect(foodStore.getAll()[0].price).toBe(12.99);
    });
});
describe("Frontend", () => {
    test("Homepage includes the table and disclaimer", async () => {
        const response = await request(app).get("/")
            .expect("Content-Type", /html/).expect(200);
        expect(response.text).toContain('id="food-list"');
        expect(response.text).toContain("Student Work Disclaimer");
    });
});
