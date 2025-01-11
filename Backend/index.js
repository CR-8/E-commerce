import express from "express";
import db from "./database/db.js"
import authrouter from "./routes/auth.router.js";
import productrouter from "./routes/product.router.js";
import cartRouter from "./routes/cart.router.js";
import orderRouter from "./routes/order.router.js";
const app = express();
const PORT = 8005;

app.use(express.json());

db();

app.use("/api/auth", authrouter);
app.use("/api/product", productrouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
 