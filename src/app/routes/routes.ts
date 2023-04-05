import { Router } from 'express';
import CategoryController from '../controllers/CategoryController';

export const router = Router();

// Category
router.get('/categories', CategoryController.index);
