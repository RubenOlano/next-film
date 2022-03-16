import mongoose, { Document } from "mongoose";
import { Actors, ActorSchema } from "./actors";

export interface Movie extends Document {
  title: string;
  poster: string;
  year: number;
  actors: Actors[];
}

const MovieSchema = new mongoose.Schema({
  title: String,
  poster: String,
  year: Number,
  actors: [ActorSchema],
});

export const Movie = mongoose.model<Movie>("Movie", MovieSchema);
