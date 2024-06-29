import { Router } from 'express';
const router = Router();
import { createMenuItem, getMenuItems } from '../controllers/menuController.js';
import authMiddleware from '../middlewares/authMiddleware.js';

router.post('/', authMiddleware, createMenuItem);
router.get('/', getMenuItems);

export default router;