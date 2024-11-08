
// db.js
import mysql from 'mysql2/promise';

const db = {
    host: "localhost",
    user: "root",
    password: "",
    database: "lap",
    
};

const pool = mysql.createPool(db);

export default pool;

