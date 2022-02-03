import express from 'express';
import { addOrder, getOrderById, updateOrderToPaid, getUserOrders } from '../controllers/orderController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.route('/').post(protect, addOrder);
router.route('/user-orders').get(protect, getUserOrders);
router.route('/:id').get(protect, getOrderById);
router.route('/:id/pay').put(protect, updateOrderToPaid);


export default router