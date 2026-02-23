const mongoose = require("mongoose");
const uri = process.env.MONGO_URI;

async function connectToDB(){
    try{
        await mongoose.connect(uri);
        console.log("Connected to DB");
    }
    catch(error){
        console.log("Failed to connect to DB");
        console.log(error);
        process.exit(1);
    }
}

module.exports = connectToDB;