import express from "express";
import ProductController from "../controllers/product.controller.js";

const productRouter = express.Router();

productRouter.post("/", ProductController.create);
productRouter.put("/:id", ProductController.update);

productRouter.get("/", ProductController.findAll);
productRouter.get("/:id", ProductController.findById);

export default authRouter;
