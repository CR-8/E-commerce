import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    purchaseId: {
      type: String,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    address: {
      type: String,
      required: true,
    }
  
  });

  const order = mongoose.model('Order', orderSchema);
export default order;

