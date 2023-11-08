const mysql = require('mysql2/promise');
require('dotenv').config();

const DB_HOST = process.env.DB_HOST;
const DB_PORT = process.env.DB_PORT;
const DB_NAME = process.env.DB_NAME;
const DB_USERNAME =process.env.DB_USERNAME;
const DB_USERNAME_PASSWORD = process.env.DB_USERNAME_PASSWORD ;

const connectionOptions = {
    host: DB_HOST,
    port: DB_PORT,
    database: DB_NAME,
    user: DB_USERNAME,
    password: DB_USERNAME_PASSWORD,
};

const pool = mysql.createPool(connectionOptions)