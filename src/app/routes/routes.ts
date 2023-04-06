import { Router } from 'express';
import CategoryController from '../controllers/CategoryController';
import ProductController from '../controllers/ProductController';

export const router = Router();

// Category
router.get('/categories', CategoryController.index);

// Product
router.post('/products', ProductController.store);

