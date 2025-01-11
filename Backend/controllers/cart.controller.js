import Cart from "../models/cart.model.js";
import Product from "../models/product.model.js";

export const getCart = async (req, res) => {
  try {
    const userId = req.params.userId;
    const cart = await Cart.findOne({ userId }).populate('items.productId', 'name price stock');
    if (!cart) {
      return res.status(404).json({ message: "Cart does not exist" });
    }
    res.json(cart);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const addToCart = async (req, res) => {
  try {
    const userId = req.params.userId;
    const { productId, quantity } = req.body;

    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    if (product.stock < quantity) {
      return res.status(400).json({ message: "Not enough stock available" });
    }

    const cart = await Cart.findOne({ userId });
    if (!cart) {
      const newCart = new Cart({
        userId,
        items: [{ productId, price: product.price, quantity }],
      });
      await newCart.save();
      return res.json(newCart);
    }

    const existingItem = cart.items.find(
      (item) => item.productId === productId
    );

    if (existingItem) {
      if (product.stock < (existingItem.quantity + quantity)) {
        return res.status(400).json({ message: "Not enough stock available" });
      }
      existingItem.quantity += quantity;
      existingItem.price = product.price;
    } else {
      cart.items.push({ productId, price: product.price, quantity });
    }

    await cart.save();
    res.json(cart);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const removeFromCart = async (req, res) => {
  try {
    const userId = req.params.userId;
    const { productId } = req.body;
    const cart = await Cart.findOne({ userId });
    
    if (!cart) {
      return res.status(404).json({ message: "Cart does not exist" });
    }

    cart.items = cart.items.filter(
      (item) => item.productId !== productId
    );
    
    await cart.save();
    res.json(cart);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export default { getCart, addToCart, removeFromCart };