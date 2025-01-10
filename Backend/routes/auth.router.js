import { Router } from "express";
import { login, signup, SearchUser } from "../controllers/auth.controller.js";

const AuthRouter = Router();

AuthRouter.post("/signup", signup);
AuthRouter.get("/login", login);
AuthRouter.get("/:id", SearchUser);

export default AuthRouter;
