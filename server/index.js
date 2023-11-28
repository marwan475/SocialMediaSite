const express = require("express");
const cors = require("cors");
const mysql = require("mysql");

const app = express();

app.use(cors());
app.use(express.json());

const server = app.listen(8080, ()=>{
    console.log("Server started");
})