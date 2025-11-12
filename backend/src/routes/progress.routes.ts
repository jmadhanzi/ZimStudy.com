import { Router } from 'express';
import * as progressController from '../controllers/progress.controller';
import { authenticate } from '../middleware/auth.middleware';

const router = Router();

// All routes require authentication
router.use(authenticate);

router.get('/my', progressController.getMyProgress);
router.get('/subject/:subjectId', progressController.getSubjectProgress);
router.post('/topic/:topicId/complete', progressController.markTopicComplete);

export default router;
