import { Router } from 'express';
import * as whatsappController from '../controllers/whatsapp.controller';
import { authenticate, authorize } from '../middleware/auth.middleware';

const router = Router();

// Webhook for incoming WhatsApp messages
router.post('/webhook', whatsappController.handleWebhook);
router.get('/webhook', whatsappController.verifyWebhook);

// Protected routes
router.use(authenticate);

// Send messages (admin/teacher only)
router.post(
  '/send',
  authorize('ADMIN', 'TEACHER'),
  whatsappController.sendMessage
);

router.post(
  '/broadcast',
  authorize('ADMIN'),
  whatsappController.broadcastMessage
);

// User opt-in/out
router.post('/opt-in', whatsappController.optIn);
router.post('/opt-out', whatsappController.optOut);

// Message history and stats
router.get('/history', whatsappController.getMessageHistory);
router.get('/stats', authorize('ADMIN', 'TEACHER'), whatsappController.getWhatsAppStats);

// Test endpoints (admin only)
router.post('/test/daily-quiz', authorize('ADMIN'), whatsappController.testDailyQuiz);
router.post('/test/study-reminder', authorize('ADMIN'), whatsappController.testStudyReminder);
router.post('/test/progress-update', authorize('ADMIN'), whatsappController.testProgressUpdate);

export default router;
