import mongoose from 'mongoose';

const cartSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  items: [
    {
      productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
        min: 1,
      },
      price: {
        type: Number,
        required: true,
      }
    },
  ],
  totalAmount: {
    type: Number,
    default: 0,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  }
});

// Pre-save middleware to calculate total amount
cartSchema.pre('save', async function(next) {
  this.totalAmount = this.items.reduce((total, item) => {
    return total + (item.price * item.quantity);
  }, 0);
  this.updatedAt = new Date();
  next();
});

const cart = mongoose.model('Cart', cartSchema);
export default cart;
