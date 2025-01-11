import mongoose from "mongoose";

const mongoURI = "mongodb://127.0.0.1:27017/api"; // Using IP instead of localhost

const connectDB = async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log("Connected to MongoDB successfully");

    mongoose.connection.on("error", (err) => {
      console.error("MongoDB connection error:", err);
    });

    mongoose.connection.on("disconnected", () => {
      console.log("MongoDB disconnected");
    });
  } catch (err) {
    console.error("Error connecting to MongoDB:", err.message);
  }
};

export default connectDB;
