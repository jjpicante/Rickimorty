require("dotenv").config();
const { Sequelize } = require("sequelize");
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;
const { characterModel } = require("./models/Character");

const sequelize = new Sequelize(
  `postgres://postgres:Perla8652@localhost:5432/rickandmorty`,
  { logging: false, native: false }
);

characterModel(sequelize);

module.exports = {
  ...sequelize.models,
  sequelize,
};
