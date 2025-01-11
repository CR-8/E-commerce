import mongoose from "mongoose";

const mongoURI = "mongodb://127.0.0.1:27017/api";

const connectDB = async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log("Connected to MongoDB successfully");
  } catch (err) {
    console.error("Error connecting to MongoDB:", err.message);
  }
};

export default connectDB;