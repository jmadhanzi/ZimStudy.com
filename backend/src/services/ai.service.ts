import OpenAI from 'openai';
import { prisma } from '../server';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY || '',
});

// Conversation history storage (in-memory for now, can be moved to Redis/DB)
const conversationHistory = new Map<string, OpenAI.Chat.ChatCompletionMessageParam[]>();

const SYSTEM_PROMPT = `You are ZimBot, an AI tutor for ZimStudy.com, a learning platform for Zimbabwean students. Your role is to:

1. Help students understand their subjects (Math, English, Science, etc.)
2. Answer questions about topics they're learning
3. Provide study tips and motivation
4. Guide them through quizzes and exercises
5. Be encouraging and supportive

Keep responses concise (2-3 sentences max for WhatsApp) unless explaining a complex topic.
Use simple, clear language appropriate for secondary school students.
Be culturally aware of Zimbabwe's education system (O-Level, A-Level).
When students ask about specific topics, provide helpful explanations with examples.

Available commands you can suggest:
- /help - Show available commands
- /quiz - Get a practice quiz
- /subjects - List available subjects
- /progress - Check learning progress
- /study - Get study tips

Always be friendly, patient, and encouraging. Remember, you're helping students who may have limited internet access.`;

export const generateAIResponse = async (
  phoneNumber: string,
  userMessage: string,
  context?: {
    userName?: string;
    currentSubject?: string;
    recentTopics?: string[];
  }
): Promise<string> => {
  try {
    // Get or create conversation history
    let history = conversationHistory.get(phoneNumber) || [];
    
    // Add context to system prompt if available
    let systemPrompt = SYSTEM_PROMPT;
    if (context) {
      if (context.userName) {
        systemPrompt += `\n\nThe student's name is ${context.userName}.`;
      }
      if (context.currentSubject) {
        systemPrompt += `\n\nThey are currently studying: ${context.currentSubject}.`;
      }
      if (context.recentTopics && context.recentTopics.length > 0) {
        systemPrompt += `\n\nRecent topics they've studied: ${context.recentTopics.join(', ')}.`;
      }
    }

    // Build messages array
    const messages: OpenAI.Chat.ChatCompletionMessageParam[] = [
      { role: 'system', content: systemPrompt },
      ...history,
      { role: 'user', content: userMessage }
    ];

    // Call OpenAI API
    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: messages,
      max_tokens: 300,
      temperature: 0.7,
    });

    const aiResponse = completion.choices[0]?.message?.content || 
      "Sorry, I couldn't generate a response. Please try again.";

    // Update conversation history (keep last 10 messages)
    history.push({ role: 'user', content: userMessage });
    history.push({ role: 'assistant', content: aiResponse });
    
    if (history.length > 20) {
      history = history.slice(-20);
    }
    
    conversationHistory.set(phoneNumber, history);

    return aiResponse;
  } catch (error) {
    console.error('AI response generation error:', error);
    return "I'm having trouble connecting right now. Please try again in a moment, or type /help for available commands.";
  }
};

export const clearConversationHistory = (phoneNumber: string): void => {
  conversationHistory.delete(phoneNumber);
};

export const generateQuizExplanation = async (
  question: string,
  options: string[],
  correctAnswer: number,
  userAnswer: number
): Promise<string> => {
  try {
    const isCorrect = userAnswer === correctAnswer;
    const prompt = `A student answered a quiz question ${isCorrect ? 'correctly' : 'incorrectly'}. 
    
Question: ${question}
Options: ${options.map((opt, idx) => `${idx + 1}. ${opt}`).join(', ')}
Correct Answer: ${correctAnswer + 1}. ${options[correctAnswer]}
Student's Answer: ${userAnswer + 1}. ${options[userAnswer]}

Provide a brief, encouraging explanation (2-3 sentences) that:
${isCorrect ? '- Congratulates them and reinforces why the answer is correct' : '- Explains why their answer was incorrect and why the correct answer is right'}
- Helps them understand the concept better

Keep it simple and encouraging for a secondary school student.`;

    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [{ role: 'user', content: prompt }],
      max_tokens: 200,
      temperature: 0.7,
    });

    return completion.choices[0]?.message?.content || 
      (isCorrect ? "Great job! 🎉" : "Not quite right, but keep trying! 💪");
  } catch (error) {
    console.error('Quiz explanation generation error:', error);
    return isCorrect ? "Correct! 🎉" : "Incorrect. Keep studying! 💪";
  }
};

export const generateStudyTips = async (
  subject: string,
  topic?: string
): Promise<string> => {
  try {
    const prompt = topic
      ? `Generate 3 concise study tips for a Zimbabwean secondary school student learning about "${topic}" in ${subject}. Keep each tip to one sentence.`
      : `Generate 3 concise study tips for a Zimbabwean secondary school student studying ${subject}. Keep each tip to one sentence.`;

    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [{ role: 'user', content: prompt }],
      max_tokens: 200,
      temperature: 0.8,
    });

    return completion.choices[0]?.message?.content || 
      "📚 Study regularly, practice with examples, and don't hesitate to ask questions!";
  } catch (error) {
    console.error('Study tips generation error:', error);
    return "📚 Study regularly, practice with examples, and don't hesitate to ask questions!";
  }
};

export const generateTopicSummary = async (
  topicTitle: string,
  content: string
): Promise<string> => {
  try {
    const prompt = `Summarize this educational content about "${topicTitle}" in 3-4 sentences for a secondary school student. Make it clear and easy to understand.

Content: ${content.substring(0, 1000)}...`;

    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [{ role: 'user', content: prompt }],
      max_tokens: 200,
      temperature: 0.5,
    });

    return completion.choices[0]?.message?.content || 
      `Here's a summary of ${topicTitle}. Visit ZimStudy.com to read the full content!`;
  } catch (error) {
    console.error('Topic summary generation error:', error);
    return `Learn about ${topicTitle} on ZimStudy.com!`;
  }
};

// Get user context for personalized responses
export const getUserContext = async (phoneNumber: string) => {
  try {
    const user = await prisma.user.findFirst({
      where: { phoneNumber },
      include: {
        enrollments: {
          include: {
            subject: true
          },
          take: 3
        },
        progress: {
          include: {
            topic: true
          },
          orderBy: {
            lastViewedAt: 'desc'
          },
          take: 5
        }
      }
    });

    if (!user) return null;

    return {
      userName: user.firstName,
      currentSubject: user.enrollments[0]?.subject.name,
      recentTopics: user.progress.map(p => p.topic.title)
    };
  } catch (error) {
    console.error('Error getting user context:', error);
    return null;
  }
};
