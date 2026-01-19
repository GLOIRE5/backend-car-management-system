import { Request, Response } from "express";
import { Car } from "../models";

export const getCars = async (_req: Request, res: Response) => {
  const cars = await Car.findAll();
  res.json(cars);
};

export const createCar = async (req: Request, res: Response) => {
  const car = await Car.create(req.body);
  res.status(201).json(car);
};

export const buyCar = async (req: Request, res: Response) => {
  const car = await Car.findByPk(req.params.id);

  if (!car || car.status !== "AVAILABLE") {
    return res.status(400).json({ message: "Car not available" });
  }

  car.status = "SOLD";
  car.ownerId = req.user!.id;

  await car.save();

  res.json({ message: "Car purchased successfully", car });
};

export const rentCar = async (req: Request, res: Response) => {
  const car = await Car.findByPk(req.params.id);

  if (!car || car.isRented) {
    return res.status(400).json({ message: "Car not available for rent" });
  }

  car.isRented = true;
  car.rentedBy = req.user!.id;
  car.rentStartDate = new Date();
  car.rentEndDate = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000); // 7 days

  await car.save();

  res.json({ message: "Car rented successfully", car });
};
