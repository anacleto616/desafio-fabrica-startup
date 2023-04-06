import { Router } from 'express';
import CategoryController from '../controllers/CategoryController';
import ProductController from '../controllers/ProductController';
import AuthController from '../controllers/AuthController';

export const router = Router();

// Login
router.post('/auth/login', AuthController.auth);

// Category
router.get('/categories', CategoryController.index);

// Product
router.post('/products', ProductController.store);
router.get('/products', ProductController.index);
router.get('/products/:id', ProductController.show);
router.patch('/products/:id', ProductController.update);
router.delete('/products/:id', ProductController.delete);

