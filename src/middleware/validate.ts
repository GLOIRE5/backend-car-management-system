import { z } from 'zod';

export const carSchemaValidation = z.object({
  make: z.string().min(1, "Make is required"),
  model: z.string().min(1, "Model is required"),
  year: z.number().int().min(1900).max(new Date().getFullYear()),
  licensePlate: z.string().toUpperCase(),
});