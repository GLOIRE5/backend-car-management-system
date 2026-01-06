import 'dotenv/config';
import mongoose from 'mongoose';
import app from './app.js'; // Move express config to app.ts

const PORT = process.env.PORT || 5000;
const DB_URL = process.env.MONGO_URI || 'mongodb://localhost:27017/car-system';

async function main() {
  try {
    await mongoose.connect(DB_URL);
    console.log("Database connected successfully");

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (err) {
    console.log("Database connection failed", err);
  }
}

main();