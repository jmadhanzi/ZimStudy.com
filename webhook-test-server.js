#!/usr/bin/env node

/**
 * Simple Webhook Test Server for Twilio WhatsApp
 * Tests the webhook integration without full backend
 */

const express = require('express');
const app = express();
const PORT = 5000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health check
app.get('/health', (req, res) => {
  res.json({ 
    status: 'ok', 
    message: 'ZimStudy WhatsApp Webhook Test Server',
    timestamp: new Date().toISOString()
  });
});

// WhatsApp webhook - GET (for verification)
app.get('/api/whatsapp/webhook', (req, res) => {
  console.log('\n📥 Webhook verification request received');
  console.log('Query params:', req.query);
  
  const mode = req.query['hub.mode'];
  const token = req.query['hub.verify_token'];
  const challenge = req.query['hub.challenge'];
  
  if (mode && token === 'zimstudy-webhook-verify-token-2025') {
    console.log('✅ Webhook verified successfully');
    res.status(200).send(challenge);
  } else {
    console.log('❌ Webhook verification failed');
    res.sendStatus(403);
  }
});

// WhatsApp webhook - POST (for incoming messages)
app.post('/api/whatsapp/webhook', (req, res) => {
  console.log('\n📨 Incoming WhatsApp message:');
  console.log(JSON.stringify(req.body, null, 2));
  
  const from = req.body.From || req.body.from;
  const body = req.body.Body || req.body.body;
  const messageId = req.body.MessageSid || req.body.messageSid;
  
  console.log('\nParsed:');
  console.log('  From:', from);
  console.log('  Message:', body);
  console.log('  ID:', messageId);
  
  // Send simple response
  const twilio = require('twilio');
  // Load environment variables
  require('dotenv').config({ path: __dirname + '/backend/.env' });
  
  const accountSid = process.env.TWILIO_ACCOUNT_SID;
  const authToken = process.env.TWILIO_AUTH_TOKEN;
  
  if (!accountSid || !authToken) {
    console.error('❌ TWILIO_ACCOUNT_SID and TWILIO_AUTH_TOKEN must be set in backend/.env');
    res.sendStatus(200);
    return;
  }
  
  const client = twilio(accountSid, authToken);
  
  const phoneNumber = from ? from.replace('whatsapp:', '') : null;
  
  if (phoneNumber) {
    const responseMessage = `✅ Message received!\n\nYou said: "${body}"\n\nThis is a test response from ZimStudy.com. The full AI bot will be available once the backend is fully configured.`;
    
    client.messages.create({
      from: process.env.TWILIO_WHATSAPP_NUMBER || 'whatsapp:+18665516275',
      to: from,
      body: responseMessage
    })
    .then(message => {
      console.log('✅ Response sent:', message.sid);
    })
    .catch(error => {
      console.error('❌ Failed to send response:', error.message);
    });
  }
  
  res.sendStatus(200);
});

// Start server
app.listen(PORT, '0.0.0.0', () => {
  console.log('╔════════════════════════════════════════════════════════╗');
  console.log('║   ZimStudy WhatsApp Webhook Test Server              ║');
  console.log('╚════════════════════════════════════════════════════════╝\n');
  console.log(`✅ Server running on port ${PORT}`);
  console.log(`📡 Webhook URL: http://localhost:${PORT}/api/whatsapp/webhook`);
  console.log(`🏥 Health check: http://localhost:${PORT}/health\n`);
  console.log('Waiting for incoming WhatsApp messages...\n');
});
