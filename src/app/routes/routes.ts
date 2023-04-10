import { Router } from 'express';
import apicache from 'apicache';

import AuthController from '../controllers/AuthController';
import AuthMiddleware from '../middlewares/AuthMiddleware';
import CategoryController from '../controllers/CategoryController';
import ProductController from '../controllers/ProductController';

export const router = Router();
const cache = apicache.middleware;

// Login
router.post('/auth/login', AuthController.auth);

router.use(AuthMiddleware.authenticationMiddleware);

// Category
router.get('/categories', cache('5 minutes'), CategoryController.index);

// Product
router.post('/products', ProductController.store);
router.get('/products', cache('2 minutes'), ProductController.index);
router.get('/products/:id', ProductController.show);
router.patch('/products/:id', ProductController.update);
router.delete('/products/:id', ProductController.delete);

