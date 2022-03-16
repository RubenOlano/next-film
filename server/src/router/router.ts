import express from "express";
import { fetchMovie } from "../controller/movies";

const router = express.Router();

router.get("/", fetchMovie);

export default router;
