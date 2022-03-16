import mongoose, { Document } from "mongoose";

export const ActorSchema = new mongoose.Schema({
  name: String,
  image: String,
});

export interface Actors extends Document {
  name: string;
  image: string;
}
