import { Router } from 'express';
const router = Router();
import { createMenuItem, getMenuItems } from '../controllers/menuController';
import authMiddleware from '../middleware/authMiddleware';

router.post('/', authMiddleware, createMenuItem);
router.get('/', getMenuItems);

export default router;