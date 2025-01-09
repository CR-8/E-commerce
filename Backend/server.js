import express from "express";
import authrouter from "./routes/auth.router.js";
import db from "./database/db.js";

const app = express();
const PORT = 8005;

app.use(express.json());

db();

app.use('/api/auth', authrouter);

app.listen(PORT, () => {    
    console.log(`Server is running on port ${PORT}`);
});