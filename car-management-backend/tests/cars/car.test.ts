import request from "supertest";
import app from "../../src/app";

let token: string;
let carId: number;

beforeAll(async () => {
  await request(app).post("/api/auth/register").send({
    name: "Car User",
    email: "car@example.com",
    password: "123456",
  });

  const loginRes = await request(app).post("/api/auth/login").send({
    email: "car@example.com",
    password: "123456",
  });

  token = loginRes.body.token;
});

describe("Car API", () => {
  it("should create a car", async () => {
    const res = await request(app)
      .post("/api/cars")
      .set("Authorization", `Bearer ${token}`)
      .send({
        brand: "Toyota",
        model: "Corolla",
        year: 2022,
        price: 15000,
      });

    expect(res.status).toBe(201);
    carId = res.body.id;
  });

  it("should get all cars", async () => {
    const res = await request(app).get("/api/cars");

    expect(res.status).toBe(200);
  });

  it("should buy a car", async () => {
    const res = await request(app)
      .post(`/api/cars/buy/${carId}`)
      .set("Authorization", `Bearer ${token}`);

    expect(res.status).toBe(200);
  });
});
