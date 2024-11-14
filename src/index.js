// require('dotenv').config({path : './env'})

import dotenv from "dotenv"
import mongoose, { Error } from "mongoose";
import { DB_NAME } from "./constants.js";
import connectDB from "./db/index.js";
import { app } from "./app.js";

dotenv.config({
    path : './env'
})


connectDB()
.then(( ) => {
  app.on("error", (error) => {
    console.error("ERROR :", error);
    throw err;
  })
  app.listen(port = process.env.PORT || 8000, () => {
    console.log(`Server is running at port : ${port}`)
  })
})
.catch((err)=>{
  console.log("MONGO db Connection Failed");
  
})

// First approach
/*
import express from "express";
const app = express()(async () => {
  try {
    await mongoose.connect(`${process.env.MANGODB_URI}/${DB_NAME}`);
    app.on("error", (error) => {
      console.error("ERROR :", error);
      throw err;
    })

    app.listen(process.env.PORT, () =>{
        console.log(`App is listening on port ${process.env.PORT}`);
    })

  } catch (error) {
    console.error("ERROR :", error);
    throw err;
  }
});
*/