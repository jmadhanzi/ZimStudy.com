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

export default router;
