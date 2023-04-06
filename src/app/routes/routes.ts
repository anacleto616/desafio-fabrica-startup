import { Router } from 'express';
import CategoryController from '../controllers/CategoryController';
import ProductController from '../controllers/ProductController';

export const router = Router();

// Category
router.get('/categories', CategoryController.index);

// Product
router.post('/products', ProductController.store);
router.get('/products', ProductController.index);
router.get('/products/:id', ProductController.show);
router.delete('/products/:id', ProductController.delete);

