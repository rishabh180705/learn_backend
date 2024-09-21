
import dotenv from'dotenv'

// require('dotenv').config({path:'./env'});
import mongoose from "mongoose";
import {DB_NAME} from "../constants.js"
dotenv.config({path:'./env'});

const connectDB= async ()=>{
   try{
    const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      
   console.log(` Database is connected to ${connectionInstance.connection.host}`);
   }
   catch(error){
    console.error("Database connection is not established",error);
    process.exit(1);
   }
}

export default  connectDB;