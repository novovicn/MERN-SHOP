import express from 'express';
import { getProductById, getProducts, deleteProduct, createProduct } from '../controllers/productController.js';
import { isAdmin, protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.route('/').get(getProducts).post(protect, isAdmin, createProduct);
router.route('/:id').get(getProductById).delete(protect, isAdmin, deleteProduct);

export default router;
