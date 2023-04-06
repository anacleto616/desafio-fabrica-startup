import { Router } from 'express';
import AuthController from '../controllers/AuthController';
import AuthMiddleware from '../middlewares/AuthMiddleware';
import CategoryController from '../controllers/CategoryController';
import ProductController from '../controllers/ProductController';

export const router = Router();

// Login
router.post('/auth/login', AuthController.auth);

router.use(AuthMiddleware.authenticationMiddleware);

// Category
router.get('/categories', CategoryController.index);

// Product
router.post('/products', ProductController.store);
router.get('/products', ProductController.index);
router.get('/products/:id', ProductController.show);
router.patch('/products/:id', ProductController.update);
router.delete('/products/:id', ProductController.delete);

