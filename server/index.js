const express = require("express");
const cors = require("cors");
const mysql = require("mysql");
const userRoutes = require("./routes/userRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth",userRoutes);

var con = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "root"
  });
  
  con.connect(function(err) {
    if (err) throw err;
    console.log("Db Connected!");
  });

const server = app.listen(8080, ()=>{
    console.log("Server started");
})