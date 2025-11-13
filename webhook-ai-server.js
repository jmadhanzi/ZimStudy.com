#!/usr/bin/env node

/**
 * ZimStudy.com - Full AI-Powered WhatsApp Webhook Server
 * Includes OpenAI integration for intelligent responses
 */

require('dotenv').config({ path: __dirname + '/backend/.env' });

const express = require('express');
const OpenAI = require('openai');
const twilio = require('twilio');

const app = express();
const PORT = 5000;

// Initialize OpenAI
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

// Initialize Twilio
const twilioClient = twilio(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

// Store conversation history (in-memory for demo)
const conversationHistory = new Map();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health check
app.get('/health', (req, res) => {
  res.json({ 
    status: 'ok', 
    message: 'ZimStudy WhatsApp AI Bot - Full Version',
    timestamp: new Date().toISOString(),
    ai_enabled: !!process.env.OPENAI_API_KEY,
    twilio_configured: !!(process.env.TWILIO_ACCOUNT_SID && process.env.TWILIO_AUTH_TOKEN)
  });
});

// WhatsApp webhook - GET (for verification)
app.get('/api/whatsapp/webhook', (req, res) => {
  console.log('\n📥 Webhook verification request');
  console.log('Query params:', req.query);
  
  const mode = req.query['hub.mode'];
  const token = req.query['hub.verify_token'];
  const challenge = req.query['hub.challenge'];
  
  const verifyToken = process.env.WHATSAPP_VERIFY_TOKEN || 'zimstudy-webhook-verify-token-2025';
  
  if (mode && token === verifyToken) {
    console.log('✅ Webhook verified successfully');
    res.status(200).send(challenge);
  } else {
    console.log('❌ Webhook verification failed');
    console.log('Expected token:', verifyToken);
    console.log('Received token:', token);
    res.sendStatus(403);
  }
});

// Generate AI response
async function generateAIResponse(phoneNumber, userMessage) {
  try {
    // Get conversation history
    let history = conversationHistory.get(phoneNumber) || [];
    
    // Add user message to history
    history.push({ role: 'user', content: userMessage });
    
    // Keep only last 10 messages to manage token usage
    if (history.length > 10) {
      history = history.slice(-10);
    }
    
    // Create system prompt
    const systemPrompt = `You are ZimBot, an AI study assistant for ZimStudy.com, an educational platform for Zimbabwean students. 

Your role:
- Help students with their studies in a friendly, encouraging way
- Provide clear, concise explanations (keep responses under 300 words for WhatsApp)
- Be culturally aware and supportive of Zimbabwe's educational context
- Use simple language and relevant examples
- Encourage students and celebrate their progress

Available commands students can use:
/help - Show available commands
/subjects - List available subjects
/topics [subject] - Show topics in a subject
/quiz - Take a practice quiz
/progress - Check learning progress
/study [subject] - Get study tips
/summary [topic] - Get topic summary

If a student asks a question, provide a helpful, educational response. Keep it concise and engaging!`;

    // Call OpenAI API
    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        { role: 'system', content: systemPrompt },
        ...history
      ],
      max_tokens: 500,
      temperature: 0.7
    });
    
    const response = completion.choices[0].message.content;
    
    // Add AI response to history
    history.push({ role: 'assistant', content: response });
    conversationHistory.set(phoneNumber, history);
    
    return response;
    
  } catch (error) {
    console.error('❌ OpenAI API error:', error.message);
    return "Sorry, I'm having trouble thinking right now. Please try again in a moment! 🤔";
  }
}

// Process commands
function processCommand(command, phoneNumber) {
  const cmd = command.toLowerCase().trim();
  
  if (cmd === '/help') {
    return `🤖 *ZimBot Commands*

📚 /subjects - View available subjects
📖 /topics [subject] - List topics
🎯 /quiz - Take a quick quiz
📊 /progress - Check your progress
💡 /study [subject] - Get study tips
📝 /summary [topic] - Get summary
🔄 /reset - Clear chat history

Or just ask me anything about your studies! I'm here to help. 😊`;
  }
  
  if (cmd === '/reset') {
    conversationHistory.delete(phoneNumber);
    return '✅ Chat history cleared! Let\'s start fresh. How can I help you today?';
  }
  
  if (cmd === '/subjects') {
    return `📚 *Available Subjects*

• Mathematics
• Science (Biology, Chemistry, Physics)
• English
• History
• Geography

Type /topics [subject name] to see topics, or ask me anything about these subjects!`;
  }
  
  if (cmd.startsWith('/topics')) {
    const subject = cmd.replace('/topics', '').trim();
    if (!subject) {
      return 'Please specify a subject. Example: /topics Mathematics';
    }
    return `📖 *Topics in ${subject}*

This feature requires the full backend with database access. For now, you can ask me questions about any topic in ${subject} and I'll help you learn!

Example: "Explain quadratic equations"`;
  }
  
  if (cmd === '/quiz' || cmd.startsWith('/quiz')) {
    return `🎯 *Quiz Time!*

What is the capital city of Zimbabwe?

1. Harare
2. Bulawayo
3. Mutare
4. Gweru

Reply with the number of your answer (1-4)

(Note: Full quiz system with database integration coming soon!)`;
  }
  
  if (cmd === '/progress') {
    return `📊 *Your Progress*

This feature requires the full backend with user authentication. 

For now, keep learning and asking questions! Every question you ask is progress. 💪

Want to learn something new? Just ask me!`;
  }
  
  if (cmd.startsWith('/study')) {
    const subject = cmd.replace('/study', '').trim() || 'your subjects';
    return `💡 *Study Tips for ${subject}*

1. **Set a Schedule** - Study at the same time each day
2. **Take Breaks** - 25 min study, 5 min break
3. **Practice Active Recall** - Test yourself regularly
4. **Teach Others** - Explain concepts to friends
5. **Stay Consistent** - Small daily progress adds up!

Need help with a specific topic? Just ask! 📚`;
  }
  
  if (cmd.startsWith('/summary')) {
    const topic = cmd.replace('/summary', '').trim();
    if (!topic) {
      return 'Please specify a topic. Example: /summary Photosynthesis';
    }
    return `📝 *Summary: ${topic}*

Let me help you understand ${topic}! 

Could you tell me which subject this topic is from? That way I can give you a more accurate summary tailored to your curriculum.`;
  }
  
  return null; // Not a command
}

// WhatsApp webhook - POST (for incoming messages)
app.post('/api/whatsapp/webhook', async (req, res) => {
  console.log('\n📨 Incoming WhatsApp message');
  console.log('Timestamp:', new Date().toISOString());
  
  const from = req.body.From || req.body.from;
  const body = req.body.Body || req.body.body;
  const messageId = req.body.MessageSid || req.body.messageSid;
  
  console.log('From:', from);
  console.log('Message:', body);
  console.log('ID:', messageId);
  
  const phoneNumber = from ? from.replace('whatsapp:', '') : null;
  
  if (!phoneNumber || !body) {
    console.log('⚠️  Missing phone number or message body');
    res.sendStatus(200);
    return;
  }
  
  try {
    let responseMessage;
    
    // Check if it's a command
    if (body.startsWith('/')) {
      console.log('🎮 Processing command:', body);
      responseMessage = processCommand(body, phoneNumber);
    }
    
    // If not a command or command returned null, use AI
    if (!responseMessage) {
      console.log('🤖 Generating AI response...');
      responseMessage = await generateAIResponse(phoneNumber, body);
    }
    
    console.log('📤 Sending response:', responseMessage.substring(0, 100) + '...');
    
    // Send response via Twilio
    const message = await twilioClient.messages.create({
      from: process.env.TWILIO_WHATSAPP_NUMBER || 'whatsapp:+18665516275',
      to: from,
      body: responseMessage
    });
    
    console.log('✅ Response sent successfully:', message.sid);
    
  } catch (error) {
    console.error('❌ Error processing message:', error.message);
  }
  
  res.sendStatus(200);
});

// Start server
app.listen(PORT, '0.0.0.0', () => {
  console.log('╔════════════════════════════════════════════════════════╗');
  console.log('║   ZimStudy WhatsApp AI Bot - Full Version            ║');
  console.log('╚════════════════════════════════════════════════════════╝\n');
  console.log(`✅ Server running on port ${PORT}`);
  console.log(`📡 Webhook URL: http://localhost:${PORT}/api/whatsapp/webhook`);
  console.log(`🏥 Health check: http://localhost:${PORT}/health\n`);
  
  // Check configuration
  if (process.env.OPENAI_API_KEY) {
    console.log('✅ OpenAI API configured');
  } else {
    console.log('⚠️  OpenAI API key not found');
  }
  
  if (process.env.TWILIO_ACCOUNT_SID && process.env.TWILIO_AUTH_TOKEN) {
    console.log('✅ Twilio configured');
  } else {
    console.log('⚠️  Twilio credentials not found');
  }
  
  console.log('\n🎉 AI-powered WhatsApp bot is ready!');
  console.log('Waiting for incoming messages...\n');
});
