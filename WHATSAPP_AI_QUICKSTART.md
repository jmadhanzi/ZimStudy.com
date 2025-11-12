# 🤖 WhatsApp AI Bot - Quick Start Guide

## What's New?

Your ZimStudy.com platform now has a **fully functional AI-powered WhatsApp chatbot** called **ZimBot**! Students can now:

✅ **Chat with an AI tutor** for instant help with their studies  
✅ **Take quizzes via WhatsApp** without needing internet on the website  
✅ **Get personalized study tips** and topic summaries  
✅ **Receive daily quizzes** and study reminders automatically  
✅ **Check their progress** directly from WhatsApp  

## 🚀 Quick Setup (5 Minutes)

### Step 1: Get Your API Keys

**Twilio WhatsApp (Required):**
1. Sign up at [twilio.com](https://www.twilio.com)
2. Get a WhatsApp-enabled phone number (or use the sandbox for testing)
3. Copy your Account SID and Auth Token

**OpenAI API (Required):**
1. Sign up at [platform.openai.com](https://platform.openai.com)
2. Create an API key
3. Copy the key (starts with `sk-`)

### Step 2: Configure Environment Variables

Edit `backend/.env` and add:

```env
# Twilio WhatsApp
TWILIO_ACCOUNT_SID="AC1234567890abcdef..."
TWILIO_AUTH_TOKEN="your-auth-token"
TWILIO_WHATSAPP_NUMBER="whatsapp:+14155238886"
WHATSAPP_VERIFY_TOKEN="my-secure-random-token-123"

# OpenAI
OPENAI_API_KEY="sk-..."
```

### Step 3: Set Up Twilio Webhook

1. Go to Twilio Console → WhatsApp Senders
2. Click on your WhatsApp number
3. Under "Messaging", set:
   - **When a message comes in:** `https://your-backend-url.com/api/whatsapp/webhook`
   - **Method:** `HTTP POST`

### Step 4: Install Dependencies & Run

```bash
cd backend
npm install
npm run dev
```

You should see:
```
🚀 Server running on port 5000
📚 ZimStudy API ready at http://localhost:5000
📱 WhatsApp AI bot and schedulers initialized
```

## 📱 Testing the Bot

### Option 1: Twilio Sandbox (Testing)

1. In Twilio Console, go to "Try WhatsApp"
2. Send the join code to the sandbox number
3. Start chatting!

### Option 2: Production Number

1. Users opt-in via the website (Settings → WhatsApp Notifications)
2. They receive a welcome message
3. They can start chatting immediately

## 💬 Example Conversations

**Student:** Hi!  
**ZimBot:** 👋 Hello! I'm ZimBot, your AI study assistant. How can I help you today?

**Student:** Can you explain photosynthesis?  
**ZimBot:** 🌱 Photosynthesis is the process where plants convert sunlight into energy...

**Student:** /quiz Science  
**ZimBot:** 🎯 **Quiz Time!** What is the powerhouse of the cell? 1. Nucleus 2. Mitochondria 3. Ribosome...

**Student:** 2  
**ZimBot:** ✅ **Correct!** Great job! The mitochondria is indeed the powerhouse...

## 🎮 Available Commands

| Command                | What it does                     |
| ---------------------- | -------------------------------- |
| `/help`                | Show all commands                |
| `/subjects`            | List your subjects               |
| `/topics Math`         | Show Math topics                 |
| `/quiz`                | Get a random quiz                |
| `/quiz Science`        | Get a Science quiz               |
| `/progress`            | Check your stats                 |
| `/study Math`          | Get Math study tips              |
| `/summary Algebra`     | Get topic summary                |
| `/reset`               | Clear chat history               |

## ⏰ Automated Messages

Once students opt-in, they'll automatically receive:

- **9:00 AM daily** - Daily quiz question
- **6:00 PM daily** - Study reminder (if inactive)
- **7:00 AM Mon/Wed/Fri** - Motivational message
- **10:00 AM Sunday** - Weekly progress update

## 🧪 Testing Endpoints

Use these admin endpoints to test manually:

```bash
# Test daily quiz
curl -X POST http://localhost:5000/api/whatsapp/test/daily-quiz \
  -H "Authorization: Bearer YOUR_ADMIN_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"phoneNumber": "+263771234567"}'

# Test study reminder
curl -X POST http://localhost:5000/api/whatsapp/test/study-reminder \
  -H "Authorization: Bearer YOUR_ADMIN_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"phoneNumber": "+263771234567"}'
```

## 📊 Monitor Usage

Check statistics via the API:

```bash
curl http://localhost:5000/api/whatsapp/stats \
  -H "Authorization: Bearer YOUR_ADMIN_TOKEN"
```

Response:
```json
{
  "status": "success",
  "data": {
    "totalOptedIn": 150,
    "messagesSent": 1250,
    "messagesReceived": 890,
    "quizzesSent": 450
  }
}
```

## 🔧 Troubleshooting

**Bot not responding?**
- Check that webhook URL is correct in Twilio
- Verify `OPENAI_API_KEY` is set correctly
- Check server logs for errors

**Messages not sending?**
- Verify Twilio credentials
- Check user has opted in (`whatsappOptIn: true`)
- Ensure phone number is in international format

**Schedulers not running?**
- Check server logs for initialization message
- Verify `NODE_ENV` is not set to `test`

## 🎯 Next Steps

1. **Customize the AI:** Edit `backend/src/services/ai.service.ts` to adjust the bot's personality
2. **Add more commands:** Extend `backend/src/services/whatsapp-bot.service.ts`
3. **Adjust schedules:** Modify times in `backend/src/services/scheduler.service.ts`
4. **Monitor costs:** Keep an eye on OpenAI and Twilio usage

## 💡 Pro Tips

- **Keep responses short:** WhatsApp users prefer concise messages
- **Use emojis:** They make messages more engaging
- **Test thoroughly:** Always test with real WhatsApp before going live
- **Monitor feedback:** Track which commands students use most

---

**Need help?** Check the full documentation in `WHATSAPP_AI_INTEGRATION.md`
