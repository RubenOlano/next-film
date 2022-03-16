import "dotenv/config";
import express from "express";
import mongoose from "mongoose";

const { PORT, MONGO_URI } = process.env;
const app = express();

mongoose.connect(MONGO_URI).then(() =>
  app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
  })
);
