import express from 'express';
import { authUser, deleteUser, getUserProfile, getUsers, registerUser, updateUser } from '../controllers/userController.js';
import { isAdmin, protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.route('/').get(protect, isAdmin, getUsers);
router.route('/register').post(registerUser);
router.route('/login').post(authUser);
router.route('/profile').get(protect, getUserProfile).put(protect, updateUser);
router.route('/:id').delete(protect, isAdmin, deleteUser);


export default router