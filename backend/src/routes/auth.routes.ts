import { Router } from 'express';
import { body } from 'express-validator';
import * as authController from '../controllers/auth.controller';
import { validate } from '../middleware/validation.middleware';
import { authenticate } from '../middleware/auth.middleware';

const router = Router();

// Validation rules
const registerValidation = [
  body('email').isEmail().normalizeEmail(),
  body('password').isLength({ min: 6 }),
  body('firstName').trim().notEmpty(),
  body('lastName').trim().notEmpty(),
  body('phoneNumber').optional().isMobilePhone('any')
];

const loginValidation = [
  body('email').isEmail().normalizeEmail(),
  body('password').notEmpty()
];

// Routes
router.post('/register', validate(registerValidation), authController.register);
router.post('/login', validate(loginValidation), authController.login);
router.get('/me', authenticate, authController.getMe);
router.post('/refresh', authController.refreshToken);
router.post('/logout', authenticate, authController.logout);

export default router;
