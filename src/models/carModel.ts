import { Schema, model } from 'mongoose';

export interface ICar {
  make: string;
  model: string;
  year: number;
  licensePlate: string;
  status: 'available' | 'rented' | 'maintenance';
}

const carSchema = new Schema<ICar>({
  make: { type: String, required: true },
  model: { type: String, required: true },
  year: { type: Number, required: true },
  licensePlate: { type: String, required: true, unique: true },
  status: { 
    type: String, 
    enum: ['available', 'rented', 'maintenance'], 
    default: 'available' 
  },
}, { timestamps: true });

export const CarModel = model<ICar>('Car', carSchema);