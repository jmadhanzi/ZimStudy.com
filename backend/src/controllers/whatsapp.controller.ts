import { Request, Response } from 'express';
import { prisma } from '../server';
import { AuthRequest } from '../middleware/auth.middleware';
import { sendWhatsAppMessage, sendBulkWhatsAppMessages } from '../services/whatsapp.service';
import { processWhatsAppMessage, sendAutomatedMessage } from '../services/whatsapp-bot.service';
import { 
  triggerDailyQuiz, 
  triggerStudyReminder, 
  triggerProgressUpdate 
} from '../services/scheduler.service';

export const sendMessage = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const { phoneNumber, message, type } = req.body;

    if (!phoneNumber || !message) {
      res.status(400).json({ status: 'error', message: 'Phone number and message required' });
      return;
    }

    const result = await sendWhatsAppMessage(phoneNumber, message, type || 'notification');

    res.json({
      status: 'success',
      data: { result }
    });
  } catch (error) {
    res.status(500).json({ status: 'error', message: 'Failed to send message' });
  }
};

export const broadcastMessage = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const { message, type, level } = req.body;

    if (!message) {
      res.status(400).json({ status: 'error', message: 'Message required' });
      return;
    }

    // Get all opted-in users
    const where: any = { whatsappOptIn: true, phoneNumber: { not: null } };
    if (level) where.level = level;

    const users = await prisma.user.findMany({
      where,
      select: { phoneNumber: true }
    });

    const phoneNumbers = users
      .map(u => u.phoneNumber)
      .filter((phone): phone is string => phone !== null);

    if (phoneNumbers.length === 0) {
      res.status(400).json({ status: 'error', message: 'No users to send to' });
      return;
    }

    await sendBulkWhatsAppMessages(phoneNumbers, message, type || 'notification');

    res.json({
      status: 'success',
      message: `Broadcast sent to ${phoneNumbers.length} users`
    });
  } catch (error) {
    res.status(500).json({ status: 'error', message: 'Failed to broadcast message' });
  }
};

export const optIn = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const userId = req.user!.id;
    const { phoneNumber } = req.body;

    if (!phoneNumber) {
      res.status(400).json({ status: 'error', message: 'Phone number required' });
      return;
    }

    // Validate phone number format (basic validation)
    const phoneRegex = /^\+?[1-9]\d{1,14}$/;
    const cleanNumber = phoneNumber.replace(/\s+/g, '');
    
    if (!phoneRegex.test(cleanNumber)) {
      res.status(400).json({ 
        status: 'error', 
        message: 'Invalid phone number format. Use international format (e.g., +263771234567)' 
      });
      return;
    }

    await prisma.user.update({
      where: { id: userId },
      data: {
        phoneNumber: cleanNumber,
        whatsappOptIn: true
      }
    });

    // Send welcome message with AI
    await sendAutomatedMessage(cleanNumber, 'welcome');

    res.json({
      status: 'success',
      message: 'Successfully opted in to WhatsApp notifications'
    });
  } catch (error) {
    console.error('Opt-in error:', error);
    res.status(500).json({ status: 'error', message: 'Failed to opt in' });
  }
};

export const optOut = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const userId = req.user!.id;

    const user = await prisma.user.update({
      where: { id: userId },
      data: { whatsappOptIn: false },
      select: { phoneNumber: true, firstName: true }
    });

    // Send goodbye message
    if (user.phoneNumber) {
      await sendWhatsAppMessage(
        user.phoneNumber,
        `Goodbye ${user.firstName}! You've been unsubscribed from WhatsApp notifications. You can opt back in anytime from your ZimStudy account settings.`,
        'notification'
      );
    }

    res.json({
      status: 'success',
      message: 'Successfully opted out of WhatsApp notifications'
    });
  } catch (error) {
    res.status(500).json({ status: 'error', message: 'Failed to opt out' });
  }
};

export const handleWebhook = async (req: Request, res: Response): Promise<void> => {
  try {
    console.log('Webhook received:', JSON.stringify(req.body, null, 2));

    // Twilio WhatsApp webhook format
    const from = req.body.From || req.body.from;
    const body = req.body.Body || req.body.body;

    if (!from || !body) {
      console.log('Invalid webhook payload');
      res.sendStatus(400);
      return;
    }

    // Extract phone number (remove 'whatsapp:' prefix if present)
    const phoneNumber = from.replace('whatsapp:', '');

    // Log incoming message
    await prisma.whatsAppMessage.create({
      data: {
        phoneNumber,
        message: body,
        status: 'received',
        type: 'incoming',
        metadata: {
          from,
          timestamp: new Date().toISOString()
        }
      }
    });

    // Process message with AI bot
    const response = await processWhatsAppMessage(phoneNumber, body);

    // Send response
    await sendWhatsAppMessage(phoneNumber, response, 'bot_response');

    res.sendStatus(200);
  } catch (error) {
    console.error('Webhook error:', error);
    res.sendStatus(500);
  }
};

export const verifyWebhook = async (req: Request, res: Response): Promise<void> => {
  try {
    // Twilio webhook verification
    const mode = req.query['hub.mode'];
    const token = req.query['hub.verify_token'];
    const challenge = req.query['hub.challenge'];

    console.log('Webhook verification request:', { mode, token, challenge });

    if (mode && token === process.env.WHATSAPP_VERIFY_TOKEN) {
      console.log('Webhook verified successfully');
      res.status(200).send(challenge);
    } else {
      console.log('Webhook verification failed');
      res.sendStatus(403);
    }
  } catch (error) {
    console.error('Webhook verification error:', error);
    res.sendStatus(500);
  }
};

// Test endpoints for manual triggering
export const testDailyQuiz = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const { phoneNumber } = req.body;

    if (!phoneNumber) {
      res.status(400).json({ status: 'error', message: 'Phone number required' });
      return;
    }

    await triggerDailyQuiz(phoneNumber);

    res.json({
      status: 'success',
      message: 'Daily quiz sent successfully'
    });
  } catch (error) {
    console.error('Test daily quiz error:', error);
    res.status(500).json({ status: 'error', message: 'Failed to send daily quiz' });
  }
};

export const testStudyReminder = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const { phoneNumber } = req.body;

    if (!phoneNumber) {
      res.status(400).json({ status: 'error', message: 'Phone number required' });
      return;
    }

    await triggerStudyReminder(phoneNumber);

    res.json({
      status: 'success',
      message: 'Study reminder sent successfully'
    });
  } catch (error) {
    console.error('Test study reminder error:', error);
    res.status(500).json({ status: 'error', message: 'Failed to send study reminder' });
  }
};

export const testProgressUpdate = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const { phoneNumber } = req.body;

    if (!phoneNumber) {
      res.status(400).json({ status: 'error', message: 'Phone number required' });
      return;
    }

    await triggerProgressUpdate(phoneNumber);

    res.json({
      status: 'success',
      message: 'Progress update sent successfully'
    });
  } catch (error) {
    console.error('Test progress update error:', error);
    res.status(500).json({ status: 'error', message: 'Failed to send progress update' });
  }
};

// Get WhatsApp message history
export const getMessageHistory = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const userId = req.user!.id;

    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: { phoneNumber: true }
    });

    if (!user || !user.phoneNumber) {
      res.status(404).json({ status: 'error', message: 'User phone number not found' });
      return;
    }

    const messages = await prisma.whatsAppMessage.findMany({
      where: {
        phoneNumber: user.phoneNumber
      },
      orderBy: {
        createdAt: 'desc'
      },
      take: 50
    });

    res.json({
      status: 'success',
      data: { messages }
    });
  } catch (error) {
    console.error('Get message history error:', error);
    res.status(500).json({ status: 'error', message: 'Failed to get message history' });
  }
};

// Get WhatsApp statistics
export const getWhatsAppStats = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const totalOptedIn = await prisma.user.count({
      where: {
        whatsappOptIn: true,
        phoneNumber: { not: null }
      }
    });

    const messagesSent = await prisma.whatsAppMessage.count({
      where: {
        status: 'sent'
      }
    });

    const messagesReceived = await prisma.whatsAppMessage.count({
      where: {
        type: 'incoming'
      }
    });

    const quizzesSent = await prisma.whatsAppMessage.count({
      where: {
        type: 'quiz',
        status: 'sent'
      }
    });

    res.json({
      status: 'success',
      data: {
        totalOptedIn,
        messagesSent,
        messagesReceived,
        quizzesSent
      }
    });
  } catch (error) {
    console.error('Get WhatsApp stats error:', error);
    res.status(500).json({ status: 'error', message: 'Failed to get statistics' });
  }
};
