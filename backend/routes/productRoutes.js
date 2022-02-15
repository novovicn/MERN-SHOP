import express from 'express';
import { getProductById, getProducts, getTopProducts, deleteProduct, createProduct, updateProduct, createProductReview } from '../controllers/productController.js';
import { isAdmin, protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.route('/').get(getProducts).post(protect, isAdmin, createProduct);
router.route('/top').get(getTopProducts);
router.route('/:id').get(getProductById).delete(protect, isAdmin, deleteProduct).put(protect, isAdmin, updateProduct);
router.route('/:id/reviews').post(protect, createProductReview);

export default router;
