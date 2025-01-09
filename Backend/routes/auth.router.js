import express from 'express';
import AuthController from '../controllers/auth.controller.js';

const authRouter = express.Router();

authRouter.get('/', AuthController.login);
authRouter.post('/', AuthController.signup);
authRouter.put('/:id', AuthController.changePassword);
authRouter.get('/:id', AuthController.findUserbyId);

export default authRouter;