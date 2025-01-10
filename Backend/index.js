import express from "express";
import authrouter from "./routes/auth.router.js";
import ConnectDB from "./database/db.js";
import productrouter from "./routes/product.router.js";
const app = express();
const PORT = 8005;

app.use(express.json());

ConnectDB();

app.use("/api/auth", authrouter);
app.use("/api/product", productrouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
 