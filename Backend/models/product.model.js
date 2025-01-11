import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    company: {
      type: String,
      required: true,
    },
    prodName: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
      min: 0,
    },
    discount: {
      type: Number,
      default: 0, // percentage (e.g., 10 for 10% off)
      min: 0,
      max: 100,
    },
    category: {
      type: String,
      default: "Uncategorized",
      required: true,
    },

    stock: {
      type: Number,
      default: 0,
      required: true,
      min: 0,
    },
    liked: {
      type: Boolean,
      default: false,
    },
    rating: {
      type: Number,
      default: 0,
      min: 0,
      max: 5,
    },
    reviews: {
      type: Number,
      default: 0,
      min: 0,
    },

    reviewList: {
      type: [
        {
          userId: String,
          userName: String,
          reviewText: String,
          rating: Number, // rating for this specific review
          date: { type: Date, default: Date.now },
        },
      ],
      default: [],
    },
    image: {
      type: [String],
      required: true,
    },

    shippingInfo: {
      type: String,
      default: "Standard shipping available",
    },
    isFeatured: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const prod = mongoose.model("Product", productSchema);

export default prod;
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

