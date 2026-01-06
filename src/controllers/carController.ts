import type { Request, Response } from 'express';
import * as CarService from '../service/carService.js';
import { carSchemaValidation } from '../middleware/validate.js';

export const createCar = async (req: Request, res: Response) => {
  try {
    const validatedData = carSchemaValidation.parse(req.body);
    const result = await CarService.createCarInDB(validatedData);
    res.status(201).json({ success: true, data: result });
  } catch (error: any) {
    res.status(400).json({ success: false, message: error.message });
  }
};

export const getAllCars = async (req: Request, res: Response) => {
  try {
    const result = await CarService.getAllCarsFromDB();
    res.status(200).json({ success: true, data: result });
  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
};