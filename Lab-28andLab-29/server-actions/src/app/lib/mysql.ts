import mysql from "mysql2/promise";

const pool=mysql.createPool({
    database: "movie",
    host: "localhost",
    password: "",
    port: 3306,
    user: "root",
});

export default pool;