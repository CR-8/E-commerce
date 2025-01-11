import express from "express";
import { createOrder, getOrderById, updateOrder, deleteOrder, getUserOrders } from "../controllers/order.controller.js";

const orderRouter = express.Router();

orderRouter.post("/", createOrder);
orderRouter.get("/user/:userId", getUserOrders);
orderRouter.get("/:id", getOrderById);
orderRouter.put("/:id", updateOrder);
orderRouter.delete("/:id", deleteOrder);

export default orderRouter;
