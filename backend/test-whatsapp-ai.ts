#!/usr/bin/env ts-node

/**
 * WhatsApp AI Integration Test Script
 * Tests the AI chatbot responses and command handling
 */

import dotenv from 'dotenv';
dotenv.config();

// Mock phone number for testing
const TEST_PHONE = '+263771234567';

async function testAIService() {
  console.log('🤖 Testing AI Service...\n');
  
  const { generateAIResponse, getUserContext } = await import('./src/services/ai.service');
  
  // Test 1: Basic greeting
  console.log('Test 1: Basic greeting');
  const response1 = await generateAIResponse(TEST_PHONE, 'Hello!');
  console.log(`User: Hello!`);
  console.log(`Bot: ${response1}\n`);
  
  // Test 2: Subject question
  console.log('Test 2: Subject question');
  const response2 = await generateAIResponse(
    TEST_PHONE, 
    'Can you explain quadratic equations?',
    { userName: 'Tafadzwa', currentSubject: 'Mathematics' }
  );
  console.log(`User: Can you explain quadratic equations?`);
  console.log(`Bot: ${response2}\n`);
  
  // Test 3: Study tips
  console.log('Test 3: Study tips request');
  const response3 = await generateAIResponse(TEST_PHONE, 'How can I improve my grades?');
  console.log(`User: How can I improve my grades?`);
  console.log(`Bot: ${response3}\n`);
  
  console.log('✅ AI Service tests completed\n');
}

async function testBotCommands() {
  console.log('🎮 Testing Bot Commands...\n');
  
  const { processWhatsAppMessage } = await import('./src/services/whatsapp-bot.service');
  
  const commands = [
    '/help',
    '/subjects',
    '/topics Mathematics',
    '/quiz',
    '/progress',
    '/study Mathematics',
    '/reset'
  ];
  
  for (const command of commands) {
    console.log(`Command: ${command}`);
    const response = await processWhatsAppMessage(TEST_PHONE, command);
    console.log(`Response: ${response.substring(0, 150)}${response.length > 150 ? '...' : ''}\n`);
  }
  
  console.log('✅ Bot command tests completed\n');
}

async function testNotifications() {
  console.log('📬 Testing Notification System...\n');
  
  const {
    generateStudyTips,
    generateTopicSummary,
    generateQuizExplanation
  } = await import('./src/services/ai.service');
  
  // Test study tips
  console.log('Test: Study tips generation');
  const tips = await generateStudyTips('Mathematics', 'Algebra');
  console.log(`Tips: ${tips}\n`);
  
  // Test topic summary
  console.log('Test: Topic summary generation');
  const summary = await generateTopicSummary(
    'Introduction to Algebra',
    'Algebra is a branch of mathematics dealing with symbols and the rules for manipulating those symbols...'
  );
  console.log(`Summary: ${summary}\n`);
  
  // Test quiz explanation
  console.log('Test: Quiz explanation generation');
  const explanation = await generateQuizExplanation(
    'What is 2 + 2?',
    ['3', '4', '5', '6'],
    1, // Correct answer index
    0  // User answer index
  );
  console.log(`Explanation: ${explanation}\n`);
  
  console.log('✅ Notification tests completed\n');
}

async function testSchedulerFunctions() {
  console.log('⏰ Testing Scheduler Functions...\n');
  
  console.log('Note: Scheduler functions are time-based and run automatically.');
  console.log('Manual triggers available via API endpoints:');
  console.log('- POST /api/whatsapp/test/daily-quiz');
  console.log('- POST /api/whatsapp/test/study-reminder');
  console.log('- POST /api/whatsapp/test/progress-update\n');
  
  console.log('✅ Scheduler info displayed\n');
}

async function runAllTests() {
  console.log('╔════════════════════════════════════════════════════════╗');
  console.log('║   ZimStudy WhatsApp AI Integration Test Suite        ║');
  console.log('╚════════════════════════════════════════════════════════╝\n');
  
  try {
    await testAIService();
    await testBotCommands();
    await testNotifications();
    await testSchedulerFunctions();
    
    console.log('╔════════════════════════════════════════════════════════╗');
    console.log('║   ✅ All Tests Completed Successfully!                ║');
    console.log('╚════════════════════════════════════════════════════════╝\n');
    
    console.log('📋 Next Steps:');
    console.log('1. Set up Twilio WhatsApp sandbox or production number');
    console.log('2. Configure webhook URL in Twilio dashboard');
    console.log('3. Add OPENAI_API_KEY to .env file');
    console.log('4. Test with real WhatsApp messages');
    console.log('5. Monitor logs for any issues\n');
    
  } catch (error) {
    console.error('❌ Test failed:', error);
    process.exit(1);
  }
}

// Run tests
runAllTests().catch(console.error);
