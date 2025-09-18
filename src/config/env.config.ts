import dotenv from 'dotenv';
import path from 'path';

const ENV_PATH = path.join(__dirname, '/../../.env')
// console.log('dirname env.config', ENV_PATH);
dotenv.config({ path: ENV_PATH })

export const SERVER_PORT = process.env.NODE_PORT || 3000; 
export const DB_NAME = process.env.DB_NAME;
export const DB_USER = process.env.DB_USER;
export const DB_PASSWORD =  process.env.DB_PASSWORD;
export const DB_HOST = process.env.DB_HOST;
export const DB_PORT = process.env.PGPORT;
export const MYSQL_ROOT_PASSWORD = process.env.MYSQL_ROOT_PASSWORD;
export const MYSQL_DATABASE = process.env.MYSQL_DATABASE;
export const MYSQL_USER = process.env.MYSQL_USER;
export const MYSQL_PASSWORD = process.env.MYSQL_PASSWORD;
export const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;
export const JWT_EXPIRATION_TIME = process.env.JWT_EXPIRATION_TIME || '1h';
export const PGPASSWORD = process.env.PGPASSWORD;
export const PGUSER = process.env.PGUSER;
export const PGDATABASE = process.env.PGDATABASE;
export const PGDATA = process.env.PGDATA || '/var/lib/postgresql/data';
export const PGPORT = process.env.PGPORT || 5432; // Default PostgreSQL port
export const PGHOST = process.env.DB_HOST || 'localhost'; // Default PostgreSQL host
