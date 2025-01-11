import mongoose from 'mongoose';

const cartSchema = new mongoose.Schema({
  userId: {
    type : String,
    required: true,
  },
  items: [
    {
      productId: {
        type: String,
        required: true,
      },
      price: {
        type: Number,
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
      }
    
    },
  ],
});

const cart = mongoose.model('Cart', cartSchema);
export default cart;
