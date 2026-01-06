import express from 'express';
import cors from 'cors';
import { createCar, getAllCars } from './controllers/carController.js';

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.post('/cars', createCar);
app.get('/cars', getAllCars);

export default app;