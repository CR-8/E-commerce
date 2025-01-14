import mongoose from "mongoose";

const { Schema } = mongoose;

const authSchema = new Schema({

    userId: {
        type: String,
        unique: true,
    },
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
    phoneNumber: {
        type: String,
    },
    address: {
        street: { type: String },
        city: { type: String },
        state: { type: String },
        postalCode: { type: String },
        country: { type: String },
    },
    profileImage: {
        type: String,
    },
    isActive: {
        type: Boolean,
        default: true,
    },
}
    , { timestamps: true }
);
const auth = mongoose.model("auth", authSchema);
export default auth;