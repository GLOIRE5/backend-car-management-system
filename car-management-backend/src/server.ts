import dotenv from "dotenv";
import { sequelize } from "./config/database";
import app from "./app";


dotenv.config();

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  try {
    await sequelize.sync({ alter: true });
    console.log("Database connected");

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Database error:", error);
  }
};

startServer();
