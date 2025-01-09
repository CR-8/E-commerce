import mongoose from "mongoose";

const mongoURI ="mongodb://127.0.0.1:27017/todolist";

const connectDB = () => {
    mongoose.connect(mongoURI) 
        .then(() => {
            console.log("Connected to MongoDB");
        })
        .catch((err) => {
            console.log("Error connecting to MongoDB", err);
        }
    )
}

export default connectDB;