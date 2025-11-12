import { Router } from 'express';
import { body } from 'express-validator';
import * as userController from '../controllers/user.controller';
import { authenticate, authorize } from '../middleware/auth.middleware';
import { validate } from '../middleware/validation.middleware';

const router = Router();

// All routes require authentication
router.use(authenticate);

// Update profile
router.patch(
  '/profile',
  validate([
    body('firstName').optional().trim().notEmpty(),
    body('lastName').optional().trim().notEmpty(),
    body('phoneNumber').optional().isMobilePhone('any'),
    body('whatsappOptIn').optional().isBoolean()
  ]),
  userController.updateProfile
);

// Get user stats
router.get('/stats', userController.getStats);

// Admin routes
router.get('/', authorize('ADMIN'), userController.getAllUsers);
router.get('/:id', authorize('ADMIN', 'TEACHER'), userController.getUserById);

export default router;
