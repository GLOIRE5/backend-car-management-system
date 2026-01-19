import { Router } from "express";
import {
  getCars,
  createCar,
  buyCar,
  rentCar,
} from "../controllers/car.controller";
import { authenticate } from "../middleware/auth.middleware";

const router = Router();

router.get("/", getCars);

router.post("/", authenticate, createCar);
router.post("/buy/:id", authenticate, buyCar);
router.post("/rent/:id", authenticate, rentCar);

export default router;
