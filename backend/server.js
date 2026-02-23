require("dotenv").config();  //to read .env to process.env

const express = require("express");
const cors = require("cors");
const app = express();
const teamroutes = require("./routes/teamroutes");
const connectToDB = require("./config/db");

app.use(express.json());
app.use(cors());
app.use("/api/teams",teamroutes);

connectToDB();


app.listen(5000,()=>{
    console.log("Server is running on port 5000!:");
})