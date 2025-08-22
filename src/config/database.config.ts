import { Sequelize } from "sequelize";
// import { Sequelize } from '@sequelize/core';

import { PGDATABASE, PGHOST, PGPASSWORD, PGPORT, PGUSER } from "./env.config";
// import { PostgresDialect } from "@sequelize/postgres";

// console.log('DB_HOST:', DB_HOST);
// console.log('DB_NAME:', DB_NAME);
// console.log('DB_PASSWORD:', DB_PASSWORD);
// console.log('DB_PORT:', DB_PORT);
// console.log('DB_USER:', DB_USER);


//  Config for mariadb or mysql - old?
// export const sequelize = new Sequelize(
//   MYSQL_DATABASE!, 
//   MYSQL_USER!, 
//   DB_PASSWORD!,
//   {
//     host: DB_HOST,
//     port: Number(DB_PORT),
//     logging: false,
//     // models: [__dirname + '/../mudules'],
//     dialect: 'mariadb',
//     define: {
//       timestamps: true,
//     },
//   }
// );

export const sequelize = new Sequelize(
  PGDATABASE!, 
  PGUSER!, 
  PGPASSWORD!,
  {
    host: PGHOST || 'localhost',
    port: Number(PGPORT) || 5432,
    logging: false,
    // models: [__dirname + '/../mudules'],
    dialect: 'postgres',
    define: {
      timestamps: true,
    },
  }
);

// Alpha version of sequelize with Postgres dialect
// export const sequelize = new Sequelize({
//   dialect: PostgresDialect,
//   database: PGDATABASE,
//   user: PGUSER,
//   password: PGPASSWORD,
//   host: PGHOST || 'localhost',
//   port: +PGPORT || 5432,
//   ssl: true,
//   clientMinMessages: 'notice',
// });

