require("dotenv").config();
const pgConfig = {
  development: {
    client: "pg",
    connection: {
      //TODO: jalar desde local ENV
      host: "dpg-cjefu4jbq8nc73efp15g-a",
      user: "zeductor",
      password: "sUEtPNGViIsTirGHtGvjB2ZGDmnJu8FY",
      database: "auxiliatron_yahi",
      ssl: { rejectUnauthorized: true },
    },
    migrations: {
      directory: '../db/migrations'
    },
  },
};

module.exports = pgConfig;
