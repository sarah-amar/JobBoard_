const mysql = require("mysql2");
const db = require("../config/db.config.js");

// Create a connection to the database
const connection = mysql.createConnection({
  host: db.HOST,
  user: db.USER,
  password: db.PASSWORD,
  database: db.DB
});

// open the MySQL connection
connection.connect(error => {
  if (error) throw error;
  console.log("Successfully connected to the database.");
});

module.exports = connection;