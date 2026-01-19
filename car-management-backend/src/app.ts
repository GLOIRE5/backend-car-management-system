import express from "express";
import authRoutes from "./routes/auth.routes";
import carRoutes from "./routes/car.routes";

const app = express();

app.use(express.json());

// routes
app.use("/api/auth", authRoutes);
app.use("/api/cars", carRoutes);

export default app;
