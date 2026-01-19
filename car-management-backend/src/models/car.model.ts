import { DataTypes, Model } from "sequelize";
import { sequelize } from "../config/database";

export class Car extends Model {
  public id!: number;
  public brand!: string;
  public model!: string;
  public year!: number;
  public price!: number;

  public status!: "AVAILABLE" | "SOLD";
  public isRented!: boolean;

  public ownerId?: number;
  public rentedBy?: number;
  public rentStartDate?: Date;
  public rentEndDate?: Date;
}

Car.init(
  {
    brand: { type: DataTypes.STRING, allowNull: false },
    model: { type: DataTypes.STRING, allowNull: false },
    year: { type: DataTypes.INTEGER, allowNull: false },
    price: { type: DataTypes.FLOAT, allowNull: false },

    status: {
      type: DataTypes.ENUM("AVAILABLE", "SOLD"),
      defaultValue: "AVAILABLE",
    },

    isRented: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },

    ownerId: DataTypes.INTEGER,
    rentedBy: DataTypes.INTEGER,
    rentStartDate: DataTypes.DATE,
    rentEndDate: DataTypes.DATE,
  },
  {
    sequelize,
    tableName: "cars",
  }
);
