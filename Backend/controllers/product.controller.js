import Product from "../models/product.model.js";

export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.json(product);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const createProduct = async (req, res) => {
  try {
    const product = new Product(req.body);
    await product.save();
    res.status(201).json(product);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const updateProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.json(product);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.json({ message: "Product deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const addReview = async (req, res) => {
  try {
    const { userId, userName, reviewText, rating } = req.body;
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    product.reviewList.push({
      userId,
      userName,
      reviewText,
      rating,
    });

    product.reviews = product.reviewList.length;
    product.rating =
      product.reviewList.reduce((acc, review) => acc + review.rating, 0) /
      product.reviews;

    await product.save();
    res.json(product);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const removeReview = async (req, res) => {
  try {
    const { reviewId } = req.body;
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    product.reviewList = product.reviewList.filter(
      (review) => review._id.toString() !== reviewId
    );

    product.reviews = product.reviewList.length;
    product.rating =
      product.reviewList.length > 0
        ? product.reviewList.reduce((acc, review) => acc + review.rating, 0) /
          product.reviewList.length
        : 0;

    await product.save();
    res.json(product);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};


export const getProductsByCategory = async (req, res) => {
  try {
    const category = req.params.category;
    const products = await Product.find({ category });
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
export default {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
  addReview,
  removeReview,
  getProductsByCategory,
};