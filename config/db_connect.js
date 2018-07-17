const mysql = require('mysql');

const pool = mysql.createPool({
    host: process.env.host,
    port: 3306,
    database: process.env.database,
    user: process.env.user,
    password: process.env.password
});

module.exports = pool;