/**
 * Order model: a shopping cart / purchase.
 */

const { DataTypes } = require("sequelize");
const db = require("../db");

const Order = db.define("order", {
  status: {
    type: DataTypes.ENUM(
      "pending",
      "paid",
      "shipped",
      "completed",
      "cancelled"
    ),
    defaultValue: "pending",
  },
});

module.exports = Order;
