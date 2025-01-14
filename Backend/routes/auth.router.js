import { Router } from "express";
import { login, signUp, searchUser } from "../controllers/auth.controller.js";

const AuthRouter = Router();

AuthRouter.post("/signup", signUp);
AuthRouter.post("/login", login);
AuthRouter.get("/user/:id", searchUser);

export default AuthRouter;