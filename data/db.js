const knex = require("knex");
const dbEnvironment = process.env.DB_ENV || "development";
const config = require("../knexfile.js");

module.exports = knex(config);
