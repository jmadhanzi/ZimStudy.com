#!/usr/bin/env node

/**
 * Interactive Twilio WhatsApp Setup Script
 * Helps configure Twilio credentials and test the integration
 */

const readline = require('readline');
const fs = require('fs');
const path = require('path');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function question(query) {
  return new Promise(resolve => rl.question(query, resolve));
}

async function main() {
  console.log('\n╔════════════════════════════════════════════════════════╗');
  console.log('║   Twilio WhatsApp Setup for ZimStudy.com             ║');
  console.log('╚════════════════════════════════════════════════════════╝\n');

  console.log('This script will help you configure Twilio WhatsApp API.\n');
  console.log('Before starting, make sure you have:');
  console.log('  ✓ Created a Twilio account');
  console.log('  ✓ Joined the WhatsApp Sandbox');
  console.log('  ✓ Your Account SID and Auth Token ready\n');

  const proceed = await question('Ready to proceed? (yes/no): ');
  
  if (proceed.toLowerCase() !== 'yes' && proceed.toLowerCase() !== 'y') {
    console.log('\nSetup cancelled. Run this script again when ready.\n');
    rl.close();
    return;
  }

  console.log('\n📝 Step 1: Twilio Credentials\n');
  
  const accountSid = await question('Enter your Twilio Account SID (starts with AC): ');
  const authToken = await question('Enter your Twilio Auth Token: ');
  const whatsappNumber = await question('Enter your WhatsApp number (e.g., whatsapp:+14155238886): ');
  
  console.log('\n🔐 Step 2: Security\n');
  
  const verifyToken = await question('Enter a webhook verify token (or press Enter for auto-generated): ');
  const finalVerifyToken = verifyToken || `verify_${Math.random().toString(36).substring(2, 15)}`;
  
  console.log('\n🤖 Step 3: OpenAI Configuration\n');
  console.log('The AI chatbot requires an OpenAI API key.');
  console.log('Get one at: https://platform.openai.com/api-keys\n');
  
  const openaiKey = await question('Enter your OpenAI API key (starts with sk-): ');

  // Read existing .env or create from example
  const envPath = path.join(__dirname, '.env');
  const envExamplePath = path.join(__dirname, '.env.example');
  
  let envContent = '';
  
  if (fs.existsSync(envPath)) {
    envContent = fs.readFileSync(envPath, 'utf8');
    console.log('\n✓ Found existing .env file. Will update Twilio and OpenAI settings.');
  } else if (fs.existsSync(envExamplePath)) {
    envContent = fs.readFileSync(envExamplePath, 'utf8');
    console.log('\n✓ Creating .env file from .env.example');
  } else {
    console.log('\n⚠️  No .env.example found. Creating minimal .env file.');
    envContent = `# ZimStudy Backend Environment Variables
DATABASE_URL="postgresql://user:password@localhost:5432/zimstudy?schema=public"
JWT_SECRET="your-super-secret-jwt-key-change-this-in-production"
JWT_EXPIRES_IN="7d"
NODE_ENV="development"
PORT=5000
FRONTEND_URL="http://localhost:3000"
`;
  }

  // Update or add Twilio settings
  const twilioSettings = {
    'TWILIO_ACCOUNT_SID': accountSid,
    'TWILIO_AUTH_TOKEN': authToken,
    'TWILIO_WHATSAPP_NUMBER': whatsappNumber,
    'WHATSAPP_VERIFY_TOKEN': finalVerifyToken,
    'OPENAI_API_KEY': openaiKey
  };

  Object.entries(twilioSettings).forEach(([key, value]) => {
    const regex = new RegExp(`^${key}=.*$`, 'm');
    if (regex.test(envContent)) {
      envContent = envContent.replace(regex, `${key}="${value}"`);
    } else {
      envContent += `\n${key}="${value}"`;
    }
  });

  // Write .env file
  fs.writeFileSync(envPath, envContent);
  
  console.log('\n✅ Configuration saved to .env file!\n');

  // Display summary
  console.log('╔════════════════════════════════════════════════════════╗');
  console.log('║   Configuration Summary                               ║');
  console.log('╚════════════════════════════════════════════════════════╝\n');
  
  console.log(`Account SID: ${accountSid.substring(0, 10)}...`);
  console.log(`Auth Token: ${authToken.substring(0, 10)}...`);
  console.log(`WhatsApp Number: ${whatsappNumber}`);
  console.log(`Verify Token: ${finalVerifyToken}`);
  console.log(`OpenAI Key: ${openaiKey.substring(0, 10)}...`);

  console.log('\n╔════════════════════════════════════════════════════════╗');
  console.log('║   Next Steps                                          ║');
  console.log('╚════════════════════════════════════════════════════════╝\n');

  console.log('1. Configure Webhook in Twilio:');
  console.log('   - Go to: https://console.twilio.com/us1/develop/sms/settings/whatsapp-sandbox');
  console.log('   - Set "WHEN A MESSAGE COMES IN" to your webhook URL');
  console.log('   - Method: HTTP POST\n');

  console.log('2. If running locally, start ngrok:');
  console.log('   $ ngrok http 5000');
  console.log('   Then use the ngrok URL in Twilio webhook\n');

  console.log('3. Start your backend server:');
  console.log('   $ npm run dev\n');

  console.log('4. Test by sending a WhatsApp message:');
  console.log('   - Open WhatsApp');
  console.log('   - Message the sandbox number');
  console.log('   - Send: "Hello!"\n');

  console.log('5. Check server logs for incoming webhook requests\n');

  console.log('📚 Full setup guide: TWILIO_WHATSAPP_SETUP.md\n');

  const testNow = await question('Would you like to test the Twilio connection now? (yes/no): ');
  
  if (testNow.toLowerCase() === 'yes' || testNow.toLowerCase() === 'y') {
    console.log('\n🧪 Testing Twilio connection...\n');
    
    try {
      // Load environment variables
      require('dotenv').config({ path: envPath });
      
      const twilio = require('twilio');
      const client = twilio(accountSid, authToken);
      
      // Test by fetching account info
      const account = await client.api.accounts(accountSid).fetch();
      
      console.log('✅ Twilio connection successful!');
      console.log(`   Account Name: ${account.friendlyName}`);
      console.log(`   Status: ${account.status}\n`);
      
      console.log('⚠️  Note: To test WhatsApp messaging, you need to:');
      console.log('   1. Configure the webhook URL in Twilio');
      console.log('   2. Start your backend server');
      console.log('   3. Send a message from WhatsApp\n');
      
    } catch (error) {
      console.error('❌ Twilio connection failed:', error.message);
      console.log('\nPlease check your credentials and try again.\n');
    }
  }

  console.log('Setup complete! 🎉\n');
  rl.close();
}

main().catch(error => {
  console.error('Error:', error);
  rl.close();
  process.exit(1);
});
