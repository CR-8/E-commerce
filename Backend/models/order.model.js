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
      unique: true,
    },
    items: [{
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
    }],
    totalAmount: {
      type: Number,
      required: true,
    },
    shippingAddress: {
      type: String,
      required: true,
    },
    paymentMethod: {
      type: String,
      required: true,
      enum: ['credit_card', 'debit_card', 'upi', 'net_banking', 'cod'],
    },
    paymentStatus: {
      type: String,
      required: true,
      enum: ['pending', 'completed', 'failed'],
      default: 'pending',
    },
    orderStatus: {
      type: String,
      required: true,
      enum: ['pending', 'processing', 'shipped', 'delivered', 'cancelled'],
      default: 'pending',
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    updatedAt: {
      type: Date,
      default: Date.now,
    }
  }
);

// Update the updatedAt timestamp before saving
orderSchema.pre('save', function(next) {
  this.updatedAt = new Date();
  next();
});

const order = mongoose.model('Order', orderSchema);
export default order;
