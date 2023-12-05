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


db.query(`USE Forms`, function (error, results) {
  if (error) console.log(error);
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

  db.query(`CREATE TABLE IF NOT EXISTS channels (
    id INT AUTO_INCREMENT PRIMARY KEY,
    question TEXT)`, function (error,result) {
    });
  
  console.log("database initialized");
  
  });
  

async function addUsertodb(username,password){
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
};

  
app.post("/api/auth/register",(req, res) => {
  const {username,password} = req.body;
  
  db.query("SELECT username FROM users WHERE username= ?", [username],function (error,result) {
    if (error) console.log(error);
    console.log(result[0]);
    if (result[0] != undefined) {
      res.json({ msg: 'Error Name Taken'});
    }else{ 
      res.json({ msg: 'User Added'});
      addUsertodb(username,password);
    }
    });
  
});

async function comparePass(password,hashedpass){
  
  const valid = await bcrypt.compare(password,hashedpass);

  if (valid) console.log("passwords match");

  return valid;
}

app.post("/api/auth/login",async (req, res) => {
  const {username,password} = req.body;
  
  db.query("SELECT password FROM users WHERE username= ?", [username],async function (error,result) {
    if (error) console.log(error);
    if (result[0] == undefined) res.json({ msg: 'Username dosent exist'});
    else {
      const valid = await comparePass(password,result[0].password);
      if(valid)res.json({ msg: 'User Authed', user:username});
      else res.json({ msg: 'incorrect password'});
    }
    });
});


app.post("/api/db/createchannel",(req, res) => {
  const {question} = req.body;
  
  const insertQuery = 'INSERT INTO channels (question) VALUES (?)';

  const values = [question];

  db.query(insertQuery, values, (err, result) => {
    if (err) {
      console.error('Error inserting user into the database: ' + err + insertQuery);
      res.json({ msg: 'Error creating channel'});
    } else {
      console.log('channel added to the database')
      res.json({ msg: 'channel created'});
    }
  });
  
});

app.get("/api/db/channels", (req,res)=>{

  const selectQuery = 'SELECT * FROM channels';

  db.query(selectQuery, (err, results) => {
    if (err) {
      console.error('Error retrieving channnels from the database: ' + err);
      res.status(500).json({ error: 'Error retrieving posts' });
    } else {
      console.log('Retrieved channels from the database');
      console.log(JSON.parse(JSON.stringify(results)));
      res.json({ data: JSON.parse(JSON.stringify(results)) });
      
    }
  });
});


const server = app.listen(8080, ()=>{
    console.log("Server started");
})

