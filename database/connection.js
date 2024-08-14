const mysql = require("mysql2");
require("dotenv").config({ path: "/STUDY/My Projects/learning/.env" }); // Loading env variables before using them.
// require('dotenv').config();

class DbConnection {
  //below function is used to make a database connection
  connectDb() {
    try {
      const connection = mysql.createConnection({
        host: process.env.MYSQL_DB_HOST,
        user: process.env.MYSQL_DB_USER,
        password: process.env.MYSQL_DB_PASSWORD,
        database: process.env.MYSQL_DB_NAME,
      });

      connection.connect((err) => {
        if (err) throw err;
        console.log("Connected to MySQL database!");
      });
      return connection;
    } catch (error) {
      console.log("Error connecting database", error);
    }
  }
}
module.exports = DbConnection;
// connection.end((err) => {
//     if (err) {
//         throw err;
//     }
//     // Connection Closed
//     console.log('MySQL connection closed!');
// });
