import { prisma } from '../server';
import { sendWhatsAppMessage } from './whatsapp.service';
import { 
  generateAIResponse, 
  getUserContext, 
  generateQuizExplanation,
  generateStudyTips,
  generateTopicSummary,
  clearConversationHistory
} from './ai.service';

interface BotCommand {
  command: string;
  description: string;
  handler: (phoneNumber: string, args: string[]) => Promise<string>;
}

// Command handlers
const handleHelp = async (phoneNumber: string): Promise<string> => {
  return `🤖 *ZimBot Commands*

📚 /subjects - View available subjects
📖 /topics [subject] - List topics in a subject
🎯 /quiz [subject] - Take a quick quiz
📊 /progress - Check your progress
💡 /study [subject] - Get study tips
📝 /summary [topic] - Get topic summary
🔄 /reset - Clear chat history

Or just ask me anything about your studies! I'm here to help. 😊`;
};

const handleSubjects = async (phoneNumber: string): Promise<string> => {
  try {
    const user = await prisma.user.findFirst({
      where: { phoneNumber },
      include: {
        enrollments: {
          include: { subject: true }
        }
      }
    });

    if (!user) {
      return "Please register at ZimStudy.com first to access subjects!";
    }

    if (user.enrollments.length === 0) {
      const subjects = await prisma.subject.findMany({
        where: { isActive: true },
        take: 5
      });
      
      const subjectList = subjects.map((s, idx) => `${idx + 1}. ${s.name}`).join('\n');
      return `📚 *Available Subjects:*\n\n${subjectList}\n\nEnroll at ZimStudy.com to start learning!`;
    }

    const enrolledSubjects = user.enrollments
      .map((e, idx) => `${idx + 1}. ${e.subject.name}`)
      .join('\n');

    return `📚 *Your Subjects:*\n\n${enrolledSubjects}\n\nType /topics [subject name] to see topics!`;
  } catch (error) {
    console.error('Error in handleSubjects:', error);
    return "Sorry, I couldn't fetch subjects right now. Please try again later.";
  }
};

const handleTopics = async (phoneNumber: string, args: string[]): Promise<string> => {
  try {
    const subjectName = args.join(' ');
    
    if (!subjectName) {
      return "Please specify a subject! Example: /topics Mathematics";
    }

    const subject = await prisma.subject.findFirst({
      where: {
        name: {
          contains: subjectName,
          mode: 'insensitive'
        }
      },
      include: {
        topics: {
          where: { isActive: true },
          take: 10,
          orderBy: { order: 'asc' }
        }
      }
    });

    if (!subject) {
      return `Subject "${subjectName}" not found. Type /subjects to see available subjects.`;
    }

    if (subject.topics.length === 0) {
      return `No topics available for ${subject.name} yet.`;
    }

    const topicList = subject.topics
      .map((t, idx) => `${idx + 1}. ${t.title}`)
      .join('\n');

    return `📖 *${subject.name} Topics:*\n\n${topicList}\n\nType /summary [topic name] to get a summary!`;
  } catch (error) {
    console.error('Error in handleTopics:', error);
    return "Sorry, I couldn't fetch topics right now.";
  }
};

const handleQuiz = async (phoneNumber: string, args: string[]): Promise<string> => {
  try {
    const user = await prisma.user.findFirst({
      where: { phoneNumber }
    });

    if (!user) {
      return "Please register at ZimStudy.com first!";
    }

    const subjectName = args.join(' ');
    
    // Find quiz
    let quiz;
    if (subjectName) {
      const subject = await prisma.subject.findFirst({
        where: {
          name: {
            contains: subjectName,
            mode: 'insensitive'
          }
        }
      });

      if (!subject) {
        return `Subject "${subjectName}" not found. Type /subjects to see available subjects.`;
      }

      quiz = await prisma.quiz.findFirst({
        where: {
          isActive: true,
          content: {
            topic: {
              subjectId: subject.id
            }
          }
        },
        include: {
          questions: {
            take: 1,
            orderBy: { order: 'asc' }
          }
        }
      });
    } else {
      // Get random quiz from enrolled subjects
      quiz = await prisma.quiz.findFirst({
        where: {
          isActive: true,
          content: {
            topic: {
              subject: {
                enrollments: {
                  some: {
                    userId: user.id
                  }
                }
              }
            }
          }
        },
        include: {
          questions: {
            take: 1,
            orderBy: { order: 'asc' }
          }
        }
      });
    }

    if (!quiz || quiz.questions.length === 0) {
      return "No quizzes available right now. Check back later!";
    }

    const question = quiz.questions[0];
    const options = (question.options as string[])
      .map((opt, idx) => `${idx + 1}. ${opt}`)
      .join('\n');

    // Store quiz session
    await prisma.whatsAppMessage.create({
      data: {
        phoneNumber,
        message: `QUIZ_SESSION:${quiz.id}:${question.id}`,
        status: 'pending',
        type: 'quiz',
        metadata: {
          quizId: quiz.id,
          questionId: question.id,
          correctAnswer: question.correctAnswer
        }
      }
    });

    return `🎯 *Quiz Time!*\n\n${question.question}\n\n${options}\n\nReply with the number of your answer (1-${(question.options as string[]).length})`;
  } catch (error) {
    console.error('Error in handleQuiz:', error);
    return "Sorry, I couldn't load a quiz right now.";
  }
};

const handleProgress = async (phoneNumber: string): Promise<string> => {
  try {
    const user = await prisma.user.findFirst({
      where: { phoneNumber },
      include: {
        progress: {
          where: { completed: true }
        },
        quizAttempts: {
          where: { completed: true }
        },
        enrollments: true
      }
    });

    if (!user) {
      return "Please register at ZimStudy.com first!";
    }

    const completedTopics = user.progress.length;
    const quizzesTaken = user.quizAttempts.length;
    const avgScore = user.quizAttempts.length > 0
      ? Math.round(
          user.quizAttempts.reduce((sum, a) => sum + a.score, 0) / user.quizAttempts.length
        )
      : 0;

    return `📊 *Your Progress*\n\n✅ Topics Completed: ${completedTopics}\n🎯 Quizzes Taken: ${quizzesTaken}\n⭐ Average Score: ${avgScore}%\n📚 Subjects Enrolled: ${user.enrollments.length}\n\nKeep up the great work! 💪`;
  } catch (error) {
    console.error('Error in handleProgress:', error);
    return "Sorry, I couldn't fetch your progress right now.";
  }
};

const handleStudyTips = async (phoneNumber: string, args: string[]): Promise<string> => {
  try {
    const subjectName = args.join(' ');
    
    if (!subjectName) {
      return "Please specify a subject! Example: /study Mathematics";
    }

    const subject = await prisma.subject.findFirst({
      where: {
        name: {
          contains: subjectName,
          mode: 'insensitive'
        }
      }
    });

    if (!subject) {
      return `Subject "${subjectName}" not found. Type /subjects to see available subjects.`;
    }

    const tips = await generateStudyTips(subject.name);
    return `💡 *Study Tips for ${subject.name}*\n\n${tips}`;
  } catch (error) {
    console.error('Error in handleStudyTips:', error);
    return "Sorry, I couldn't generate study tips right now.";
  }
};

const handleSummary = async (phoneNumber: string, args: string[]): Promise<string> => {
  try {
    const topicName = args.join(' ');
    
    if (!topicName) {
      return "Please specify a topic! Example: /summary Algebra Basics";
    }

    const topic = await prisma.topic.findFirst({
      where: {
        title: {
          contains: topicName,
          mode: 'insensitive'
        }
      },
      include: {
        contents: {
          where: { type: 'NOTE' },
          take: 1
        }
      }
    });

    if (!topic) {
      return `Topic "${topicName}" not found. Type /topics [subject] to see available topics.`;
    }

    if (topic.contents.length === 0) {
      return `No content available for "${topic.title}" yet.`;
    }

    const summary = await generateTopicSummary(topic.title, topic.contents[0].content);
    return `📝 *${topic.title}*\n\n${summary}\n\nRead more at ZimStudy.com!`;
  } catch (error) {
    console.error('Error in handleSummary:', error);
    return "Sorry, I couldn't generate a summary right now.";
  }
};

const handleReset = async (phoneNumber: string): Promise<string> => {
  clearConversationHistory(phoneNumber);
  return "✅ Chat history cleared! Starting fresh. How can I help you today?";
};

// Command registry
const commands: BotCommand[] = [
  { command: '/help', description: 'Show available commands', handler: handleHelp },
  { command: '/subjects', description: 'View available subjects', handler: handleSubjects },
  { command: '/topics', description: 'List topics in a subject', handler: handleTopics },
  { command: '/quiz', description: 'Take a quick quiz', handler: handleQuiz },
  { command: '/progress', description: 'Check your progress', handler: handleProgress },
  { command: '/study', description: 'Get study tips', handler: handleStudyTips },
  { command: '/summary', description: 'Get topic summary', handler: handleSummary },
  { command: '/reset', description: 'Clear chat history', handler: handleReset },
];

// Main message processor
export const processWhatsAppMessage = async (
  phoneNumber: string,
  message: string
): Promise<string> => {
  try {
    const trimmedMessage = message.trim();
    
    // Check if it's a command
    if (trimmedMessage.startsWith('/')) {
      const parts = trimmedMessage.split(' ');
      const commandName = parts[0].toLowerCase();
      const args = parts.slice(1);

      const command = commands.find(cmd => cmd.command === commandName);
      
      if (command) {
        return await command.handler(phoneNumber, args);
      } else {
        return `Unknown command: ${commandName}\n\nType /help to see available commands.`;
      }
    }

    // Check if it's a quiz answer
    const pendingQuiz = await prisma.whatsAppMessage.findFirst({
      where: {
        phoneNumber,
        status: 'pending',
        type: 'quiz',
        message: {
          startsWith: 'QUIZ_SESSION:'
        }
      },
      orderBy: {
        createdAt: 'desc'
      }
    });

    if (pendingQuiz && /^[1-4]$/.test(trimmedMessage)) {
      return await handleQuizAnswer(phoneNumber, parseInt(trimmedMessage) - 1, pendingQuiz);
    }

    // Otherwise, use AI to generate response
    const context = await getUserContext(phoneNumber);
    const aiResponse = await generateAIResponse(phoneNumber, trimmedMessage, context || undefined);
    
    return aiResponse;
  } catch (error) {
    console.error('Error processing WhatsApp message:', error);
    return "Sorry, I encountered an error. Please try again or type /help for available commands.";
  }
};

// Handle quiz answer
const handleQuizAnswer = async (
  phoneNumber: string,
  userAnswer: number,
  quizSession: any
): Promise<string> => {
  try {
    const metadata = quizSession.metadata as any;
    const correctAnswer = metadata.correctAnswer;
    const questionId = metadata.questionId;

    // Get question details
    const question = await prisma.question.findUnique({
      where: { id: questionId }
    });

    if (!question) {
      return "Quiz session expired. Type /quiz to start a new one!";
    }

    const options = question.options as string[];
    const isCorrect = userAnswer === correctAnswer;

    // Mark quiz session as completed
    await prisma.whatsAppMessage.update({
      where: { id: quizSession.id },
      data: { status: 'completed' }
    });

    // Generate AI explanation
    const explanation = await generateQuizExplanation(
      question.question,
      options,
      correctAnswer,
      userAnswer
    );

    const result = isCorrect ? "✅ *Correct!*" : "❌ *Incorrect*";
    const correctAnswerText = `\n\nCorrect answer: ${correctAnswer + 1}. ${options[correctAnswer]}`;

    return `${result}\n\n${explanation}${!isCorrect ? correctAnswerText : ''}\n\nType /quiz to try another one!`;
  } catch (error) {
    console.error('Error handling quiz answer:', error);
    return "Sorry, I couldn't process your answer. Type /quiz to start a new quiz!";
  }
};

// Send automated message
export const sendAutomatedMessage = async (
  phoneNumber: string,
  messageType: 'welcome' | 'daily_quiz' | 'study_reminder' | 'progress_update',
  data?: any
): Promise<void> => {
  try {
    let message = '';

    switch (messageType) {
      case 'welcome':
        message = `🎉 Welcome to ZimStudy!\n\nI'm ZimBot, your AI study assistant. I can help you with:\n\n📚 Learning materials\n🎯 Practice quizzes\n💡 Study tips\n📊 Progress tracking\n\nType /help to get started!`;
        break;

      case 'daily_quiz':
        message = await handleQuiz(phoneNumber, []);
        break;

      case 'study_reminder':
        const user = await prisma.user.findFirst({
          where: { phoneNumber },
          select: { firstName: true }
        });
        message = `📖 Hi ${user?.firstName || 'there'}!\n\nTime for your daily study session. Type /subjects to continue learning or /quiz to test your knowledge!\n\nKeep up the great work! 💪`;
        break;

      case 'progress_update':
        message = await handleProgress(phoneNumber);
        break;
    }

    await sendWhatsAppMessage(phoneNumber, message, messageType);
  } catch (error) {
    console.error('Error sending automated message:', error);
  }
};
