import express from "express";
import ProductController from "../controllers/product.controller.js";

const productRouter = express.Router();

productRouter.post("/create", ProductController.create);
productRouter.post("/update/:id", ProductController.update);

productRouter.post("/find-all", ProductController.findAll);
productRouter.post("/find/:id", ProductController.findProduct);

export default productRouter;
