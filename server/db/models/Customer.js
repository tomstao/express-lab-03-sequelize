/**
 * Customer model: represents a shopper in our store.
 */

const { DataTypes } = require("sequelize");
const db = require("../db");

const Customer = db.define("customer", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    // unique email address
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: { isEmail: true },
  },
});

module.exports = Customer;
