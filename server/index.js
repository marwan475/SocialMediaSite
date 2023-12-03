const express = require("express");
const cors = require("cors");
const mysql = require("mysql");

const app = express();

app.use(cors());
app.use(express.json());

var db = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "root"
  });
  
db.connect(function(err) {
    if (err) throw err;
    console.log("Db Connected!");
  });

app.get('/db/init', (req, res) => {

  db.query(`CREATE DATABASE Forms`, function (error,result) {
    if (error) console.log(error);
    });
  
  db.query(`USE Forms`, function (error, results) {
    if (error) console.log(error);
    });
   
  db.query(`CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username TEXT,
    password TEXT)`, function (error,result) {
    });
  
  console.log("database initialized");
  
  });
  
app.post("/api/auth/register",(req, res, next) => {
  console.log(req.body);
});

app.post("/api/auth/login",(req, res, next) => {
  console.log(req.body);
});


const server = app.listen(8080, ()=>{
    console.log("Server started");
})

