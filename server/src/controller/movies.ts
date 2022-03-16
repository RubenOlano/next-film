import express from "express";
import { Movie } from "../models/movies";

export const fetchMovie = async (
  _req: express.Request,
  res: express.Response
) => {
  try {
    const movie = await Movie.aggregate([{ $sample: { size: 1 } }]);
    res.json(movie[0]).status(200);
  } catch (error) {
    console.log(error);
  }
};
