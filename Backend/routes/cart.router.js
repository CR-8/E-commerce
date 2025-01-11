import express from "express";
import { getCart, addToCart, removeFromCart } from "../controllers/cart.controller.js";

const cartRouter = express.Router();

cartRouter.get("/:cartId", getCart);
cartRouter.post("/:userId/add", addToCart);
cartRouter.delete("/:userId/remove", removeFromCart);

export default cartRouter;