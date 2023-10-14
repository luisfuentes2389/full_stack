import mongoose from "mongoose";
import { MONGODB_URI } from "./config.js";

export const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1/pro");
    console.log("MongoDB is connected");
  } catch (error) {
    console.error(error);
  }
};
