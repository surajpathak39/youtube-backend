// require("dotenv").config({ path: "./env" });

import dotenv from "dotenv";

import connectDB from "./db/index.js";
import { app } from "./app.js";

dotenv.config({
  path: "./.env",
});

connectDB()
  .then(() => {
    app.on("error", (error) => {
      console.log("Error connecting to MongoDB: ", error);
      throw error;
    });
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server running on port ${process.env.PORT}`);
    });
  })
  .catch((error) => console.log("MONGO db connection failed !!!", error));
/*
import mongoose from "mongoose";
import { DB_NAME } from "./constants";
import express from "express";

const app = express();

//? iifi

(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URL}${DB_NAME}`);
    app.on("error", (error) => {
      console.log("Error connecting to MongoDB: ", error);
      throw error;
    });
    app.listen(process.env.PORT, () => {
      console.log(`Server is running on port ${process.env.PORT}...`);
    });
  } catch (error) {
    throw err;
  }
})();

*/
