import { Router } from 'express';
import { body } from 'express-validator';
import * as contentController from '../controllers/content.controller';
import { authenticate, authorize } from '../middleware/auth.middleware';
import { validate } from '../middleware/validation.middleware';

const router = Router();

// Public routes
router.get('/topic/:topicId', contentController.getContentByTopic);
router.get('/:id', contentController.getContentById);

// Protected routes
router.use(authenticate);

// Track views
router.post('/:id/view', contentController.trackView);

// Admin/Teacher routes
router.post(
  '/',
  authorize('ADMIN', 'TEACHER'),
  validate([
    body('topicId').notEmpty(),
    body('title').trim().notEmpty(),
    body('type').isIn(['NOTE', 'VIDEO', 'QUIZ', 'PAST_PAPER', 'ASSIGNMENT']),
    body('content').notEmpty()
  ]),
  contentController.createContent
);

router.patch(
  '/:id',
  authorize('ADMIN', 'TEACHER'),
  contentController.updateContent
);

router.delete(
  '/:id',
  authorize('ADMIN'),
  contentController.deleteContent
);

export default router;
