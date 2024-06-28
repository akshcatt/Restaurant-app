import { Router } from 'express';
const router = Router();
import { createOrder, getOrders, updateOrderStatus } from '../controllers/orderController';
import authMiddleware from '../middleware/authMiddleware';

router.post('/', authMiddleware, createOrder);
router.get('/', authMiddleware, getOrders);
router.put('/:id', authMiddleware, updateOrderStatus);

export default router;

