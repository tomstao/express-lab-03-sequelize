/**
 * Aggregates the Sequelize instance + models + their relationships
 * so the rest of the project can simply `require("./db")`.
 */

const db = require("./db");
const Customer = require("./models/Customer");
const Order = require("./models/Order");
const Product = require("./models/Product");

// ─── Associations ──────────────────────────────────────────────────────────────
// 1‑to‑Many: Customer → Order
Customer.hasMany(Order);
Order.belongsTo(Customer);

// Many‑to‑Many: Order ↔ Product (through table OrderProducts)
Order.belongsToMany(Product, { through: "OrderProducts" });
Product.belongsToMany(Order, { through: "OrderProducts" });

module.exports = { db, Customer, Order, Product };
