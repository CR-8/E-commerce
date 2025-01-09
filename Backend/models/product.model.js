import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  prodName: { 
    type: String,
    required: true 
    },
  description: {
    type: String, 
    required: true 
  },
  price: {
    type: Number,
    required: true 
  },
  category: {
    type: String,
    default: "Uncategorized",
    required: true 
  },
  stock: {
    type: Number,
    default: 0,
    required: true 
  },
  image: {
    type: String,
    required: true 
  },
});

const prod = mongoose.model('Product', productSchema)

export default prod;
