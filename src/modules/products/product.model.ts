// src/models/product.model.ts

import { CreationOptional, DataTypes, Model, Optional } from 'sequelize';
import { sequelize } from '../../config/database.config';

interface ProductAttributes {
  id: number;
  name: string;
  description: string;
  price: number;
  brand: string;
  stock: number;
  category: string;
}

export interface ProductCreationAttributes extends Optional<ProductAttributes, 'id'> {}

class Product extends Model<ProductAttributes, ProductCreationAttributes>
  implements ProductAttributes
{
  public id!: number;
  public name!: string;
  public description!: string;
  public price!: number;
  public brand!: string;
  public stock!: number;
  public category!: string;
  declare createdAt: CreationOptional<Date>;
  declare updatedAt: CreationOptional<Date>;
}

Product.init(
  {
    id: {
      type: DataTypes.NUMBER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
      validate: {
        min: 0.01,
      },
    },
    brand: {
      type: DataTypes.STRING(255),
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    stock: {
      type: DataTypes.NUMBER,
      allowNull: false,
      validate: {
        min: 0,
      },
    },
    category: {
      type: DataTypes.STRING(120),
      allowNull: false,
    },
    // categoria (categoria)
  },
  {
    sequelize,
    tableName: 'products',
    timestamps: true,
  }
);

export default Product;
