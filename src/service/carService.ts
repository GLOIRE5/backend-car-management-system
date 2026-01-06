import { CarModel } from '../models/carModel.js';
import type { ICar } from '../models/carModel.js';

export const createCarInDB = async (carData: Partial<ICar>) => {
  return await CarModel.create(carData);
};

export const getAllCarsFromDB = async () => {
  return await CarModel.find();
};