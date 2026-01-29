const mongoose =require("mongoose")
const dotenv = require("dotenv")

dotenv.config()

const connectDB = async()=>{
    try{
        await mongoose.connect(process.env.MONGODB_URI)
        console.log("MongoDB is connected")
    }catch(error){
        console.error(error.message);
        process.exit()
    }
}

module.exports = connectDB;