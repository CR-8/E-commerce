import Order from "../models/order.model.js";
import Cart from "../models/cart.model.js";
import Product from "../models/product.model.js";

export const createOrder = async (req, res) => {
  try {
    const { userId, shippingAddress, paymentMethod } = req.body;

    const cart = await Cart.findOne({ userId });
    if (!cart || cart.items.length === 0) {
      return res.status(400).json({ message: "Cart is empty" });
    }

    for (const item of cart.items) {
      const product = await Product.findById(item.productId);
      if (!product) {
        return res.status(404).json({ message: `Product ${item.productId} not found` });
      }
      if (product.stock < item.quantity) {
        return res.status(400).json({ 
          message: `Not enough stock for ${product.name}. Available: ${product.stock}, Requested: ${item.quantity}` 
        });
      }
    }

    const purchaseId = 'ORD' + Date.now().toString();

    const newOrder = new Order({
      userId,
      purchaseId,
      items: cart.items,
      totalAmount: cart.totalAmount,
      shippingAddress,
      paymentMethod,
    });

    for (const item of cart.items) {
      await Product.findByIdAndUpdate(item.productId, {
        $inc: { stock: -item.quantity }
      });
    }

    await newOrder.save();
    cart.items = [];
    await cart.save();

    res.json(newOrder);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getOrderById = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id)
      .populate('items.productId', 'name price');
    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }
    res.json(order);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const updateOrder = async (req, res) => {
  try {
    const allowedUpdates = ['orderStatus', 'paymentStatus', 'shippingAddress'];
    const updates = Object.keys(req.body);
    const isValidOperation = updates.every(update => allowedUpdates.includes(update));

    if (!isValidOperation) {
      return res.status(400).json({ message: "Invalid updates" });
    }

    const order = await Order.findById(req.params.id);
    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    if (req.body.orderStatus === 'cancelled' && order.orderStatus !== 'cancelled') {
      for (const item of order.items) {
        await Product.findByIdAndUpdate(item.productId, {
          $inc: { stock: item.quantity }
        });
      }
    }

    updates.forEach(update => order[update] = req.body[update]);
    await order.save();
    
    res.json(order);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const deleteOrder = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);
    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    if (order.orderStatus !== 'cancelled') {
      for (const item of order.items) {
        await Product.findByIdAndUpdate(item.productId, {
          $inc: { stock: item.quantity }
        });
      }
    }

    await order.deleteOne();
    res.json({ message: "Order deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getUserOrders = async (req, res) => {
  try {
    const userId = req.params.userId;
    const orders = await Order.find({ userId })
      .populate('items.productId', 'name price')
      .sort({ createdAt: -1 });
    res.json(orders);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export default { createOrder, getOrderById, updateOrder, deleteOrder, getUserOrders };