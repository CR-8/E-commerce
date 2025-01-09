import express from 'express';
import ProductController from '../controllers/product.controller.js';

const productRouter = express.Router();

productRouter.get('/', ProductController.findAll);
productRouter.get('/:id', ProductController.findById);
productRouter.post('/', ProductController.create);
productRouter.put('/:id', ProductController.update);

export default authRouter;