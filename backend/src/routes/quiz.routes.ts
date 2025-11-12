import { Router } from 'express';
import { body } from 'express-validator';
import * as quizController from '../controllers/quiz.controller';
import { authenticate, authorize } from '../middleware/auth.middleware';
import { validate } from '../middleware/validation.middleware';

const router = Router();

// Protected routes
router.use(authenticate);

router.get('/:id', quizController.getQuizById);
router.post('/:id/attempt', quizController.startQuizAttempt);
router.patch('/attempt/:attemptId', quizController.submitQuizAttempt);
router.get('/attempt/:attemptId', quizController.getQuizAttempt);
router.get('/user/attempts', quizController.getUserAttempts);

// Admin/Teacher routes
router.post(
  '/',
  authorize('ADMIN', 'TEACHER'),
  validate([
    body('contentId').notEmpty(),
    body('title').trim().notEmpty(),
    body('difficulty').isIn(['EASY', 'MEDIUM', 'HARD']),
    body('questions').isArray({ min: 1 })
  ]),
  quizController.createQuiz
);

router.patch(
  '/:id',
  authorize('ADMIN', 'TEACHER'),
  quizController.updateQuiz
);

router.delete(
  '/:id',
  authorize('ADMIN'),
  quizController.deleteQuiz
);

export default router;
