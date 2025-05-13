/**
 * Creates the Sequelize instance.
 * If DATABASE_URL env var exists we use it (e.g. on Heroku),
 * otherwise fall back to a local Postgres db.
 */

const { Sequelize } = require("sequelize");
require("dotenv").config(); // loads .env into process.env

const db = new Sequelize(
  process.env.DATABASE_URL || "postgres://localhost:5432/ecommerce-lab3",
  { logging: false }
);

module.exports = db;
