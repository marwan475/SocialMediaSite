const express = require("express");
const cors = require("cors");
const mysql = require("mysql");
const bcrypt = require("bcrypt");

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

  db.query(`CREATE DATABASE IF NOT EXISTS Forms`, function (error,result) {
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
  
app.post("/api/auth/register",async (req, res, next) => {
  const {username,password} = req.body;
  db.query("SELECT username FROM users WHERE username= ?", [username],function (error,result) {
    if (error) console.log(error);
    console.log(result);
    if (result != []) return res.json({ msg: "Username already taken", status: false});
    });
  
  const hashedpass = await bcrypt.hash(password,10);

  const insertQuery = 'INSERT INTO users (username, password) VALUES (?, ?)';

  const values = [username,hashedpass];

  db.query(insertQuery, values, (err, result) => {
    if (err) {
      console.error('Error inserting user into the database: ' + err + insertQuery);
    } else {
      console.log('User added to the database')
    }
  });
});

app.post("/api/auth/login",(req, res, next) => {
  console.log(req.body);
});


const server = app.listen(8080, ()=>{
    console.log("Server started");
})

