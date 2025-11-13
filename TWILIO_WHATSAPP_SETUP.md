# Twilio WhatsApp API Setup Guide for ZimStudy.com

**Author:** Manus AI  
**Date:** November 12, 2025

## Overview

This guide will walk you through setting up Twilio WhatsApp API for ZimStudy.com, from creating an account to testing your first AI-powered WhatsApp conversation.

## Part 1: Create Twilio Account

### Step 1: Sign Up for Twilio

1. Go to [https://www.twilio.com/try-twilio](https://www.twilio.com/try-twilio)
2. Click **"Sign up"** and fill in your details:
   - First Name
   - Last Name
   - Email
   - Password
3. Verify your email address
4. Verify your phone number (you'll receive an SMS code)

### Step 2: Complete Account Setup

After verification, Twilio will ask you a few questions:

1. **Which Twilio product are you here to use?**
   - Select: **"Messaging"**

2. **What do you plan to build?**
   - Select: **"Alerts & Notifications"** or **"Other"**

3. **How do you want to build with Twilio?**
   - Select: **"With code"**

4. **What is your preferred language?**
   - Select: **"Node.js"**

### Step 3: Get Your Account Credentials

Once logged in to the Twilio Console:

1. You'll see your **Dashboard** with important credentials
2. Find and copy these values (you'll need them later):
   - **Account SID** (starts with `AC...`)
   - **Auth Token** (click the eye icon to reveal it)

**⚠️ Important:** Keep these credentials secure! Never commit them to GitHub.

## Part 2: Set Up WhatsApp Sandbox (For Testing)

The WhatsApp Sandbox allows you to test WhatsApp messaging without needing a production WhatsApp Business Account.

### Step 1: Access WhatsApp Sandbox

1. In the Twilio Console, click **"Explore Products"** in the left sidebar
2. Under **"Messaging"**, click **"Try it out"**
3. Select **"Send a WhatsApp message"**
4. You'll be taken to the WhatsApp Sandbox page

Alternatively, go directly to:
```
https://console.twilio.com/us1/develop/sms/try-it-out/whatsapp-learn
```

### Step 2: Join the Sandbox

You'll see a screen with:
- A **sandbox phone number** (e.g., `+1 415 523 8886`)
- A **join code** (e.g., `join <your-code>`)

**To activate the sandbox:**

1. Open WhatsApp on your phone
2. Create a new message to the sandbox number shown
3. Send the exact join code (e.g., `join happy-tiger`)
4. You'll receive a confirmation message from Twilio

**Example:**
```
To: +1 415 523 8886
Message: join happy-tiger
```

You should receive:
```
✅ Twilio Sandbox: You are all set! 
Reply with a message to test it out.
```

### Step 3: Test Sending a Message

Try sending a test message:
```
Hello!
```

You should receive an echo back. This confirms the sandbox is working!

## Part 3: Configure Webhook

Now we need to tell Twilio where to send incoming WhatsApp messages.

### Option A: Using ngrok (For Local Development)

If you're running the backend locally, you need a public URL. We'll use **ngrok**.

#### Install ngrok

**On Ubuntu/Linux:**
```bash
# Download ngrok
wget https://bin.equinox.io/c/bNyj1mQVY4c/ngrok-v3-stable-linux-amd64.tgz

# Extract
tar xvzf ngrok-v3-stable-linux-amd64.tgz

# Move to /usr/local/bin
sudo mv ngrok /usr/local/bin/

# Verify installation
ngrok version
```

**On macOS:**
```bash
brew install ngrok
```

**On Windows:**
Download from [https://ngrok.com/download](https://ngrok.com/download)

#### Sign up for ngrok (Optional but recommended)

1. Go to [https://dashboard.ngrok.com/signup](https://dashboard.ngrok.com/signup)
2. Sign up for a free account
3. Get your auth token from the dashboard
4. Configure it:
```bash
ngrok config add-authtoken YOUR_AUTH_TOKEN
```

#### Start ngrok

```bash
# Start your backend server first
cd backend
npm run dev

# In a new terminal, start ngrok
ngrok http 5000
```

You'll see output like:
```
Forwarding  https://abc123.ngrok-free.app -> http://localhost:5000
```

Copy the `https://` URL (e.g., `https://abc123.ngrok-free.app`)

### Option B: Using a Production Server

If you have a deployed server (e.g., on Heroku, DigitalOcean, AWS):

Your webhook URL will be:
```
https://your-domain.com/api/whatsapp/webhook
```

### Step 4: Configure Webhook in Twilio

1. In Twilio Console, go to **Messaging** → **Settings** → **WhatsApp sandbox settings**

   Or go directly to:
   ```
   https://console.twilio.com/us1/develop/sms/settings/whatsapp-sandbox
   ```

2. Scroll down to **"Sandbox Configuration"**

3. Under **"WHEN A MESSAGE COMES IN"**, enter your webhook URL:
   ```
   https://your-ngrok-url.ngrok-free.app/api/whatsapp/webhook
   ```
   OR
   ```
   https://your-domain.com/api/whatsapp/webhook
   ```

4. Make sure the method is set to **"HTTP POST"**

5. Click **"Save"**

## Part 4: Configure Environment Variables

### Step 1: Update .env File

In your `backend` directory, create or update the `.env` file:

```bash
cd backend
cp .env.example .env
nano .env  # or use your preferred editor
```

### Step 2: Add Twilio Credentials

Update the following values in `.env`:

```env
# Database
DATABASE_URL="postgresql://user:password@localhost:5432/zimstudy?schema=public"

# JWT
JWT_SECRET="your-super-secret-jwt-key-change-this-in-production"
JWT_EXPIRES_IN="7d"

# Server
NODE_ENV="development"
PORT=5000

# WhatsApp Integration (Twilio)
TWILIO_ACCOUNT_SID="ACxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
TWILIO_AUTH_TOKEN="your_auth_token_here"
TWILIO_WHATSAPP_NUMBER="whatsapp:+14155238886"
WHATSAPP_VERIFY_TOKEN="my-secure-random-token-12345"

# OpenAI API for AI Chatbot
OPENAI_API_KEY="sk-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"

# CORS
FRONTEND_URL="http://localhost:3000"
```

**Where to find each value:**

- **TWILIO_ACCOUNT_SID**: From Twilio Dashboard
- **TWILIO_AUTH_TOKEN**: From Twilio Dashboard (click eye icon to reveal)
- **TWILIO_WHATSAPP_NUMBER**: The sandbox number (e.g., `whatsapp:+14155238886`)
- **WHATSAPP_VERIFY_TOKEN**: Create your own secure random string
- **OPENAI_API_KEY**: From [platform.openai.com/api-keys](https://platform.openai.com/api-keys)

### Step 3: Restart Your Server

```bash
cd backend
npm run dev
```

You should see:
```
🚀 Server running on port 5000
📚 ZimStudy API ready at http://localhost:5000
📱 WhatsApp AI bot and schedulers initialized
```

## Part 5: Test the Integration

### Test 1: Send a Message to Your Bot

1. Open WhatsApp on your phone
2. Go to the conversation with the Twilio sandbox number
3. Send: `Hello!`

**Expected Response:**
```
👋 Hello! I'm ZimBot, your AI study assistant. How can I help you today?
```

### Test 2: Try a Command

Send: `/help`

**Expected Response:**
```
🤖 ZimBot Commands

📚 /subjects - View available subjects
📖 /topics [subject] - List topics in a subject
🎯 /quiz [subject] - Take a quick quiz
📊 /progress - Check your progress
💡 /study [subject] - Get study tips
📝 /summary [topic] - Get topic summary
🔄 /reset - Clear chat history

Or just ask me anything about your studies! I'm here to help. 😊
```

### Test 3: Ask a Question

Send: `What is photosynthesis?`

**Expected Response:**
You should get an AI-generated explanation about photosynthesis.

### Test 4: Take a Quiz

Send: `/quiz`

**Expected Response:**
You should receive a quiz question with multiple choice options.

## Part 6: Verify Webhook is Working

### Check Server Logs

In your terminal where the backend is running, you should see:

```
Webhook received: {
  "From": "whatsapp:+263771234567",
  "Body": "Hello!",
  ...
}
```

### Check Twilio Logs

1. Go to Twilio Console → **Monitor** → **Logs** → **Messaging**
2. You should see incoming and outgoing messages
3. Check for any errors

## Part 7: Common Issues & Solutions

### Issue 1: "Webhook not responding"

**Solution:**
- Verify ngrok is running and the URL hasn't changed
- Check that your backend server is running
- Ensure the webhook URL in Twilio matches your ngrok URL exactly
- Check server logs for errors

### Issue 2: "No response from bot"

**Solution:**
- Check that `OPENAI_API_KEY` is set correctly
- Verify you have credits in your OpenAI account
- Check server logs for API errors

### Issue 3: "User not found" errors

**Solution:**
- Make sure you've registered an account on the website first
- Ensure your phone number in the database matches the WhatsApp number
- Use international format: `+263771234567`

### Issue 4: ngrok URL keeps changing

**Solution:**
- Sign up for a free ngrok account to get a stable subdomain
- Or use a production server with a fixed domain

## Part 8: Moving to Production

When you're ready to go live with real users:

### Step 1: Get a WhatsApp Business Account

1. Apply for WhatsApp Business API access through Twilio
2. This requires:
   - A Facebook Business Manager account
   - Business verification
   - WhatsApp Business Profile

### Step 2: Get a Dedicated Phone Number

1. In Twilio Console, go to **Phone Numbers** → **Buy a number**
2. Select a number that supports WhatsApp
3. Purchase the number

### Step 3: Request WhatsApp Enablement

1. Submit a request to enable WhatsApp on your number
2. Wait for approval (can take 1-3 business days)

### Step 4: Update Configuration

1. Update `TWILIO_WHATSAPP_NUMBER` in `.env` to your new number
2. Configure the webhook for the production number
3. Update messaging templates (required for production)

## Part 9: Cost Considerations

### Twilio Pricing (as of 2025)

- **WhatsApp Sandbox**: Free for testing
- **WhatsApp Production**:
  - Business-initiated messages: ~$0.005 - $0.01 per message
  - User-initiated messages (24-hour window): Free
  - Varies by country

### OpenAI Pricing

- **GPT-4o-mini**:
  - Input: ~$0.15 per 1M tokens
  - Output: ~$0.60 per 1M tokens
  - Very affordable for educational use

**Estimated costs for 100 active students:**
- ~$5-10/month for Twilio
- ~$10-20/month for OpenAI
- **Total: $15-30/month**

## Next Steps

✅ You've successfully set up Twilio WhatsApp API!

**What to do next:**

1. **Test all commands** - Try every bot command to ensure they work
2. **Invite test users** - Have a few students test the bot
3. **Monitor logs** - Watch for errors and usage patterns
4. **Customize responses** - Edit `ai.service.ts` to adjust the bot's personality
5. **Set up monitoring** - Use Twilio's monitoring tools to track usage

**Need help?** Check the troubleshooting section or review the server logs for detailed error messages.
