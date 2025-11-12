import { Router } from 'express';
import * as notificationController from '../controllers/notification.controller';
import { authenticate } from '../middleware/auth.middleware';

const router = Router();

// All routes require authentication
router.use(authenticate);

router.get('/', notificationController.getMyNotifications);
router.patch('/:id/read', notificationController.markAsRead);
router.patch('/read-all', notificationController.markAllAsRead);
router.delete('/:id', notificationController.deleteNotification);

export default router;
