import express from "express";
import mysql from "mysql2";
import cors from "cors";

const app = express();
app.use(express.json({ limit: "30mb", extended: "true" }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

const db = mysql.createConnection({
  host: "localhost",
  port: "3306",
  user: "root",
  password: "mysql@2023",
  database: "insurewise",
});

db.connect((err) => {
  if (err) {
    console.error("error in database connection");
  } else {
    console.log("databse connection success");
  }
});
