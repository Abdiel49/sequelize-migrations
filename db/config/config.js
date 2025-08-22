require('dotenv').config();

module.exports = {
  development: {
    username: process.env.MYSQL_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: 'postgres',
  },
  test: {
    username: process.env.MYSQL_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.MYSQL_TEST_DATABASE,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: 'postgres',
  },
  production: {
    username: process.env.MYSQL_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.MYSQL_PROD_DATABASE,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: 'postgres',
  }
};
