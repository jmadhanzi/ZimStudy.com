import twilio from 'twilio';
import { prisma } from '../server';

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const whatsappNumber = process.env.TWILIO_WHATSAPP_NUMBER;

let twilioClient: twilio.Twilio | null = null;

if (accountSid && authToken) {
  twilioClient = twilio(accountSid, authToken);
}

export const sendWhatsAppMessage = async (
  phoneNumber: string,
  message: string,
  type: string = 'notification'
): Promise<any> => {
  try {
    if (!twilioClient) {
      console.warn('Twilio client not configured');
      // Store message in database as pending
      return await prisma.whatsAppMessage.create({
        data: {
          phoneNumber,
          message,
          status: 'pending',
          type
        }
      });
    }

    // Ensure phone number is in correct format
    const formattedNumber = phoneNumber.startsWith('whatsapp:')
      ? phoneNumber
      : `whatsapp:${phoneNumber}`;

    // Send message via Twilio
    const result = await twilioClient.messages.create({
      body: message,
      from: whatsappNumber!,
      to: formattedNumber
    });

    // Store message in database
    await prisma.whatsAppMessage.create({
      data: {
        phoneNumber,
        message,
        status: 'sent',
        type,
        sentAt: new Date(),
        metadata: {
          messageSid: result.sid
        }
      }
    });

    return result;
  } catch (error) {
    console.error('Failed to send WhatsApp message:', error);

    // Store failed message
    await prisma.whatsAppMessage.create({
      data: {
        phoneNumber,
        message,
        status: 'failed',
        type,
        metadata: {
          error: error instanceof Error ? error.message : 'Unknown error'
        }
      }
    });

    throw error;
  }
};

export const sendBulkWhatsAppMessages = async (
  phoneNumbers: string[],
  message: string,
  type: string = 'notification'
): Promise<void> => {
  const promises = phoneNumbers.map(phoneNumber =>
    sendWhatsAppMessage(phoneNumber, message, type)
      .catch(error => {
        console.error(`Failed to send to ${phoneNumber}:`, error);
        return null;
      })
  );

  await Promise.all(promises);
};

export const sendDailyQuiz = async (userId: string, quizId: string): Promise<void> => {
  try {
    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: { phoneNumber: true, firstName: true, whatsappOptIn: true }
    });

    if (!user || !user.phoneNumber || !user.whatsappOptIn) {
      return;
    }

    const quiz = await prisma.quiz.findUnique({
      where: { id: quizId },
      include: {
        questions: {
          take: 1,
          orderBy: { order: 'asc' }
        }
      }
    });

    if (!quiz || quiz.questions.length === 0) {
      return;
    }

    const question = quiz.questions[0];
    const options = (question.options as string[]).map((opt, idx) => `${idx + 1}. ${opt}`).join('\n');

    const message = `📚 Daily Quiz for ${user.firstName}!\n\n${question.question}\n\n${options}\n\nReply with the number of your answer!`;

    await sendWhatsAppMessage(user.phoneNumber, message, 'quiz');
  } catch (error) {
    console.error('Failed to send daily quiz:', error);
  }
};

export const sendStudyReminder = async (userId: string, topicTitle: string): Promise<void> => {
  try {
    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: { phoneNumber: true, firstName: true, whatsappOptIn: true }
    });

    if (!user || !user.phoneNumber || !user.whatsappOptIn) {
      return;
    }

    const message = `📖 Study Reminder for ${user.firstName}!\n\nDon't forget to continue learning about "${topicTitle}". Keep up the great work! 💪\n\nVisit ZimStudy.com to continue`;

    await sendWhatsAppMessage(user.phoneNumber, message, 'reminder');
  } catch (error) {
    console.error('Failed to send study reminder:', error);
  }
};
