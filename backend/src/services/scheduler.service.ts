import cron from 'node-cron';
import { prisma } from '../server';
import { sendAutomatedMessage } from './whatsapp-bot.service';

// Daily quiz delivery - runs every day at 9 AM
export const scheduleDailyQuizzes = () => {
  cron.schedule('0 9 * * *', async () => {
    console.log('Running daily quiz delivery...');
    
    try {
      // Get all users who opted in for WhatsApp
      const users = await prisma.user.findMany({
        where: {
          whatsappOptIn: true,
          phoneNumber: { not: null }
        },
        select: {
          id: true,
          phoneNumber: true,
          firstName: true
        }
      });

      console.log(`Sending daily quizzes to ${users.length} users...`);

      // Send quiz to each user
      for (const user of users) {
        try {
          await sendAutomatedMessage(user.phoneNumber!, 'daily_quiz');
          
          // Add small delay to avoid rate limiting
          await new Promise(resolve => setTimeout(resolve, 1000));
        } catch (error) {
          console.error(`Failed to send daily quiz to ${user.phoneNumber}:`, error);
        }
      }

      console.log('Daily quiz delivery completed');
    } catch (error) {
      console.error('Error in daily quiz scheduler:', error);
    }
  });

  console.log('Daily quiz scheduler initialized (9 AM daily)');
};

// Study reminders - runs every day at 6 PM
export const scheduleStudyReminders = () => {
  cron.schedule('0 18 * * *', async () => {
    console.log('Running study reminder delivery...');
    
    try {
      // Get users who haven't studied today
      const today = new Date();
      today.setHours(0, 0, 0, 0);

      const users = await prisma.user.findMany({
        where: {
          whatsappOptIn: true,
          phoneNumber: { not: null },
          progress: {
            none: {
              lastViewedAt: {
                gte: today
              }
            }
          }
        },
        select: {
          id: true,
          phoneNumber: true,
          firstName: true
        }
      });

      console.log(`Sending study reminders to ${users.length} users...`);

      for (const user of users) {
        try {
          await sendAutomatedMessage(user.phoneNumber!, 'study_reminder');
          
          // Add small delay to avoid rate limiting
          await new Promise(resolve => setTimeout(resolve, 1000));
        } catch (error) {
          console.error(`Failed to send study reminder to ${user.phoneNumber}:`, error);
        }
      }

      console.log('Study reminder delivery completed');
    } catch (error) {
      console.error('Error in study reminder scheduler:', error);
    }
  });

  console.log('Study reminder scheduler initialized (6 PM daily)');
};

// Weekly progress update - runs every Sunday at 10 AM
export const scheduleWeeklyProgressUpdates = () => {
  cron.schedule('0 10 * * 0', async () => {
    console.log('Running weekly progress update delivery...');
    
    try {
      const users = await prisma.user.findMany({
        where: {
          whatsappOptIn: true,
          phoneNumber: { not: null }
        },
        select: {
          id: true,
          phoneNumber: true,
          firstName: true
        }
      });

      console.log(`Sending weekly progress updates to ${users.length} users...`);

      for (const user of users) {
        try {
          await sendAutomatedMessage(user.phoneNumber!, 'progress_update');
          
          // Add small delay to avoid rate limiting
          await new Promise(resolve => setTimeout(resolve, 1000));
        } catch (error) {
          console.error(`Failed to send progress update to ${user.phoneNumber}:`, error);
        }
      }

      console.log('Weekly progress update delivery completed');
    } catch (error) {
      console.error('Error in weekly progress scheduler:', error);
    }
  });

  console.log('Weekly progress update scheduler initialized (Sunday 10 AM)');
};

// Motivational messages - runs Monday, Wednesday, Friday at 7 AM
export const scheduleMotivationalMessages = () => {
  cron.schedule('0 7 * * 1,3,5', async () => {
    console.log('Running motivational message delivery...');
    
    try {
      const users = await prisma.user.findMany({
        where: {
          whatsappOptIn: true,
          phoneNumber: { not: null }
        },
        select: {
          phoneNumber: true,
          firstName: true
        },
        take: 100 // Limit to avoid overwhelming the system
      });

      const motivationalMessages = [
        "🌟 Good morning! Every expert was once a beginner. Keep learning!",
        "💪 You're doing great! Small progress is still progress.",
        "🎯 Success is the sum of small efforts repeated daily. Keep going!",
        "📚 The beautiful thing about learning is that no one can take it away from you.",
        "🚀 Believe in yourself! You're capable of amazing things.",
      ];

      const randomMessage = motivationalMessages[Math.floor(Math.random() * motivationalMessages.length)];

      console.log(`Sending motivational messages to ${users.length} users...`);

      const { sendWhatsAppMessage } = await import('./whatsapp.service');

      for (const user of users) {
        try {
          const personalizedMessage = `${randomMessage}\n\nHave a productive day, ${user.firstName}! 😊`;
          await sendWhatsAppMessage(user.phoneNumber!, personalizedMessage, 'motivation');
          
          // Add small delay to avoid rate limiting
          await new Promise(resolve => setTimeout(resolve, 1000));
        } catch (error) {
          console.error(`Failed to send motivational message to ${user.phoneNumber}:`, error);
        }
      }

      console.log('Motivational message delivery completed');
    } catch (error) {
      console.error('Error in motivational message scheduler:', error);
    }
  });

  console.log('Motivational message scheduler initialized (Mon/Wed/Fri 7 AM)');
};

// Initialize all schedulers
export const initializeSchedulers = () => {
  console.log('Initializing WhatsApp schedulers...');
  
  scheduleDailyQuizzes();
  scheduleStudyReminders();
  scheduleWeeklyProgressUpdates();
  scheduleMotivationalMessages();
  
  console.log('All WhatsApp schedulers initialized successfully');
};

// Manual trigger functions for testing
export const triggerDailyQuiz = async (phoneNumber: string) => {
  await sendAutomatedMessage(phoneNumber, 'daily_quiz');
};

export const triggerStudyReminder = async (phoneNumber: string) => {
  await sendAutomatedMessage(phoneNumber, 'study_reminder');
};

export const triggerProgressUpdate = async (phoneNumber: string) => {
  await sendAutomatedMessage(phoneNumber, 'progress_update');
};
