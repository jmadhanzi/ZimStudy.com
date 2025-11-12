import { Request, Response } from 'express';
import { prisma } from '../server';
import { AuthRequest } from '../middleware/auth.middleware';
import { sendWhatsAppMessage, sendBulkWhatsAppMessages } from '../services/whatsapp.service';

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

    await prisma.user.update({
      where: { id: userId },
      data: {
        phoneNumber,
        whatsappOptIn: true
      }
    });

    // Send welcome message
    await sendWhatsAppMessage(
      phoneNumber,
      'Welcome to ZimStudy! You will now receive updates, quizzes, and study reminders via WhatsApp.',
      'notification'
    );

    res.json({
      status: 'success',
      message: 'Successfully opted in to WhatsApp notifications'
    });
  } catch (error) {
    res.status(500).json({ status: 'error', message: 'Failed to opt in' });
  }
};

export const optOut = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const userId = req.user!.id;

    await prisma.user.update({
      where: { id: userId },
      data: { whatsappOptIn: false }
    });

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
    // Handle incoming WhatsApp messages
    const { from, body } = req.body;

    // Log the message
    console.log(`Received WhatsApp message from ${from}: ${body}`);

    // You can implement auto-responses or commands here
    // Example: if body.toLowerCase() includes 'help', send help message

    res.sendStatus(200);
  } catch (error) {
    console.error('Webhook error:', error);
    res.sendStatus(500);
  }
};

export const verifyWebhook = async (req: Request, res: Response): Promise<void> => {
  // Webhook verification for Twilio/WhatsApp Business API
  const mode = req.query['hub.mode'];
  const token = req.query['hub.verify_token'];
  const challenge = req.query['hub.challenge'];

  if (mode && token === process.env.WHATSAPP_VERIFY_TOKEN) {
    res.status(200).send(challenge);
  } else {
    res.sendStatus(403);
  }
};
