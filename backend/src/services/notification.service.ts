import { prisma } from '../server';
import { sendWhatsAppMessage } from './whatsapp.service';

export type NotificationType = 'info' | 'success' | 'warning' | 'achievement';
export type NotificationChannel = 'web' | 'whatsapp' | 'both';

interface NotificationData {
  userId: string;
  title: string;
  message: string;
  type: NotificationType;
  channel?: NotificationChannel;
  metadata?: any;
}

export const createNotification = async (data: NotificationData): Promise<void> => {
  try {
    const { userId, title, message, type, channel = 'both', metadata } = data;

    // Get user details
    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: {
        phoneNumber: true,
        whatsappOptIn: true,
        firstName: true
      }
    });

    if (!user) {
      console.error(`User ${userId} not found`);
      return;
    }

    // Create web notification
    if (channel === 'web' || channel === 'both') {
      await prisma.notification.create({
        data: {
          userId,
          title,
          message,
          type,
          sentVia: 'web',
        }
      });
    }

    // Send WhatsApp notification
    if ((channel === 'whatsapp' || channel === 'both') && 
        user.phoneNumber && 
        user.whatsappOptIn) {
      
      const emoji = getEmojiForType(type);
      const whatsappMessage = `${emoji} *${title}*\n\n${message}`;
      
      await sendWhatsAppMessage(user.phoneNumber, whatsappMessage, 'notification');
      
      // Create notification record for WhatsApp
      await prisma.notification.create({
        data: {
          userId,
          title,
          message,
          type,
          sentVia: 'whatsapp',
        }
      });
    }
  } catch (error) {
    console.error('Error creating notification:', error);
  }
};

export const notifyQuizCompletion = async (
  userId: string,
  quizTitle: string,
  score: number,
  passed: boolean
): Promise<void> => {
  const emoji = passed ? '🎉' : '💪';
  const title = passed ? 'Quiz Passed!' : 'Quiz Completed';
  const message = passed
    ? `Congratulations! You scored ${score}% on "${quizTitle}". Great work!`
    : `You scored ${score}% on "${quizTitle}". Keep practicing, you'll get there!`;

  await createNotification({
    userId,
    title,
    message,
    type: passed ? 'success' : 'info',
    channel: 'both',
    metadata: { quizTitle, score, passed }
  });
};

export const notifyTopicCompletion = async (
  userId: string,
  topicTitle: string,
  subjectName: string
): Promise<void> => {
  await createNotification({
    userId,
    title: 'Topic Completed! 🎯',
    message: `You've completed "${topicTitle}" in ${subjectName}. Keep up the excellent progress!`,
    type: 'achievement',
    channel: 'both',
    metadata: { topicTitle, subjectName }
  });
};

export const notifyNewContent = async (
  userId: string,
  contentTitle: string,
  subjectName: string
): Promise<void> => {
  await createNotification({
    userId,
    title: 'New Content Available! 📚',
    message: `New content "${contentTitle}" has been added to ${subjectName}. Check it out!`,
    type: 'info',
    channel: 'both',
    metadata: { contentTitle, subjectName }
  });
};

export const notifyStreakMilestone = async (
  userId: string,
  streakDays: number
): Promise<void> => {
  await createNotification({
    userId,
    title: `${streakDays}-Day Streak! 🔥`,
    message: `Amazing! You've been learning for ${streakDays} days in a row. Keep the momentum going!`,
    type: 'achievement',
    channel: 'both',
    metadata: { streakDays }
  });
};

export const notifyEnrollment = async (
  userId: string,
  subjectName: string
): Promise<void> => {
  await createNotification({
    userId,
    title: 'Enrollment Successful! 🎓',
    message: `You're now enrolled in ${subjectName}. Start learning today!`,
    type: 'success',
    channel: 'both',
    metadata: { subjectName }
  });
};

export const notifyInactivity = async (
  userId: string,
  daysSinceLastActivity: number
): Promise<void> => {
  const user = await prisma.user.findUnique({
    where: { id: userId },
    select: { firstName: true }
  });

  await createNotification({
    userId,
    title: 'We Miss You! 👋',
    message: `Hi ${user?.firstName}! It's been ${daysSinceLastActivity} days since your last study session. Come back and continue your learning journey!`,
    type: 'info',
    channel: 'whatsapp', // Only WhatsApp for re-engagement
    metadata: { daysSinceLastActivity }
  });
};

export const notifyDailyGoalAchieved = async (
  userId: string,
  goalType: string
): Promise<void> => {
  await createNotification({
    userId,
    title: 'Daily Goal Achieved! ⭐',
    message: `Congratulations! You've completed your daily ${goalType} goal. Excellent work!`,
    type: 'achievement',
    channel: 'both',
    metadata: { goalType }
  });
};

export const broadcastToAllUsers = async (
  title: string,
  message: string,
  type: NotificationType = 'info',
  filters?: {
    level?: string;
    hasWhatsApp?: boolean;
  }
): Promise<number> => {
  try {
    const where: any = {};
    
    if (filters?.level) {
      where.level = filters.level;
    }
    
    if (filters?.hasWhatsApp) {
      where.whatsappOptIn = true;
      where.phoneNumber = { not: null };
    }

    const users = await prisma.user.findMany({
      where,
      select: { id: true }
    });

    // Create notifications for all users
    await Promise.all(
      users.map(user =>
        createNotification({
          userId: user.id,
          title,
          message,
          type,
          channel: filters?.hasWhatsApp ? 'whatsapp' : 'both'
        })
      )
    );

    return users.length;
  } catch (error) {
    console.error('Error broadcasting notification:', error);
    return 0;
  }
};

// Helper function to get emoji for notification type
function getEmojiForType(type: NotificationType): string {
  const emojiMap: Record<NotificationType, string> = {
    info: 'ℹ️',
    success: '✅',
    warning: '⚠️',
    achievement: '🏆'
  };
  return emojiMap[type] || 'ℹ️';
}

// Mark notification as read
export const markNotificationAsRead = async (notificationId: string): Promise<void> => {
  try {
    await prisma.notification.update({
      where: { id: notificationId },
      data: { isRead: true }
    });
  } catch (error) {
    console.error('Error marking notification as read:', error);
  }
};

// Get unread notifications for a user
export const getUnreadNotifications = async (userId: string) => {
  try {
    return await prisma.notification.findMany({
      where: {
        userId,
        isRead: false
      },
      orderBy: {
        createdAt: 'desc'
      },
      take: 20
    });
  } catch (error) {
    console.error('Error getting unread notifications:', error);
    return [];
  }
};

// Clean up old notifications (older than 30 days)
export const cleanupOldNotifications = async (): Promise<number> => {
  try {
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

    const result = await prisma.notification.deleteMany({
      where: {
        createdAt: {
          lt: thirtyDaysAgo
        },
        isRead: true
      }
    });

    return result.count;
  } catch (error) {
    console.error('Error cleaning up notifications:', error);
    return 0;
  }
};
