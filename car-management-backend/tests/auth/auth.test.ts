import request from "supertest";
import app from "../../src/app";

describe("Auth API", () => {
  it("should register a user", async () => {
    const res = await request(app).post("/api/auth/register").send({
      name: "Test User",
      email: "test@example.com",
      password: "123456",
    });

    expect(res.status).toBe(201);
  });

  it("should login user", async () => {
    const res = await request(app).post("/api/auth/login").send({
      email: "test@example.com",
      password: "123456",
    });

    expect(res.status).toBe(200);
    expect(res.body.token).toBeDefined();
  });
});
