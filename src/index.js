// require('dotenv').config({path:'./env'});
import dotenv from'dotenv'

// console.log(process.env) 
// import mongoose from "mongoose";
// import {DB_NAME} from "./constants"

import  connectDB from "./db/index.js";
dotenv.config({path:'./env'});



connectDB()
.then(()=>{
    app.listen(env.process.PORT || 8000,()=>{
     console.log(`Server is running at ${env.process.PORT}`);
    })
})
.catch((err)=>{
  console.log("mongodb connection failed: " + err.message);
});















/*
function connectDB(){

}

import express from "express";
const app = express();

;(async ()=>{
   try{
      await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
      app.on('error',(error)=>{
        console.error("app is not responding",error);
        throw error;
      });
   }
   catch(error){
     console.error("Database connection is not established",error);
     throw error;
   }
})()*/