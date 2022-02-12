import express from 'express';
import { addOrder, getOrderById, updateOrderToPaid, getUserOrders, getOrders, updateOrderToDelivered } from '../controllers/orderController.js';
import { protect, isAdmin } from '../middleware/authMiddleware.js';

const router = express.Router();

router.route('/').post(protect, addOrder).get(protect, isAdmin, getOrders);
router.route('/user-orders').get(protect, getUserOrders);
router.route('/:id').get(protect, getOrderById);
router.route('/:id/pay').put(protect, updateOrderToPaid);
router.route('/:id/deliver').put(protect, isAdmin, updateOrderToDelivered);


export default router