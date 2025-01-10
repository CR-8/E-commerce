import mongoose from "mongoose";

const mongoURI = "mongodb://localhost:27017/api";

const connectDB = () => {
  mongoose
    .connect(mongoURI)
    .then(() => {
      console.log("Connected to MongoDB");
    })
    .catch((err) => {
      console.log("Error connecting to MongoDB", err);
    });
};

export default connectDB;
