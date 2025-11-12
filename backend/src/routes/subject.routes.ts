import { Router } from 'express';
import { body } from 'express-validator';
import * as subjectController from '../controllers/subject.controller';
import { authenticate, authorize } from '../middleware/auth.middleware';
import { validate } from '../middleware/validation.middleware';

const router = Router();

// Public routes
router.get('/', subjectController.getAllSubjects);
router.get('/:id', subjectController.getSubjectById);
router.get('/:id/topics', subjectController.getSubjectTopics);

// Protected routes
router.use(authenticate);

// Enrollment
router.post('/:id/enroll', subjectController.enrollSubject);
router.delete('/:id/enroll', subjectController.unenrollSubject);
router.get('/enrolled/me', subjectController.getMyEnrolledSubjects);

// Admin/Teacher routes
router.post(
  '/',
  authorize('ADMIN', 'TEACHER'),
  validate([
    body('name').trim().notEmpty(),
    body('code').trim().notEmpty(),
    body('level').isIn(['PRIMARY', 'ORDINARY_LEVEL', 'ADVANCED_LEVEL', 'TERTIARY'])
  ]),
  subjectController.createSubject
);

router.patch(
  '/:id',
  authorize('ADMIN', 'TEACHER'),
  subjectController.updateSubject
);

router.delete(
  '/:id',
  authorize('ADMIN'),
  subjectController.deleteSubject
);

export default router;
