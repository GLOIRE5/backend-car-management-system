// src/models/user.model.ts
import { DataTypes, Model } from "sequelize";
import { sequelize } from "../config/database";

export class User extends Model {
  public id!: number;
  public name!: string;
  public email!: string;
  public password!: string;
  public role!: "USER" | "ADMIN";
}

User.init(
  {
    name: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, allowNull: false, unique: true },
    password: { type: DataTypes.STRING, allowNull: false },
    role: {
      type: DataTypes.ENUM("USER", "ADMIN"),
      defaultValue: "USER",
    },
  },
  {
    sequelize,
    tableName: "users",
  }
);
