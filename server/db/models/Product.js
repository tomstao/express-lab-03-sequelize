/**
 * Product model: something we can sell.
 */

const { DataTypes } = require("sequelize");
const db = require("../db");

const Product = db.define("product", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    // stored in USD for demo
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  stock: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
});

module.exports = Product;
