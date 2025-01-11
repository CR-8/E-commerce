import express from "express";
import {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
  addReview,
  removeReview,
  getFeaturedProducts,
  getProductsByCategory,
} from "../controllers/product.controller.js";

const router = express.Router();

router.get("/", getAllProducts);
router.get("/:id", getProductById);
router.post("/", createProduct);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

router.post("/:id/review", addReview);
router.delete("/:id/review", removeReview);

router.get("/featured", getFeaturedProducts);
router.get("/category/:category", getProductsByCategory);

export default router;
