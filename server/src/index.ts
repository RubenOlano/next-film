import "dotenv/config";
import express from "express";
import mongoose from "mongoose";
import router from "./router/router";
import cors from "cors";

const { PORT, MONGO_URI } = process.env;
const app = express();

app.use(cors());

app.use("/movies", router);

mongoose.connect(MONGO_URI).then(() =>
  app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
  })
);
