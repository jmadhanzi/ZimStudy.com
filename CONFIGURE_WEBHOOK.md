# Configure Twilio Webhook - Step by Step

## ✅ Your Setup is Ready!

Your ZimStudy.com WhatsApp webhook server is now running and ready to receive messages.

### 🌐 Your Webhook URL

```
https://5000-i7ushcv2e4515e4wxq4bk-9c938076.manusvm.computer/api/whatsapp/webhook
```

## 📋 Configure in Twilio (5 Minutes)

### Step 1: Access WhatsApp Sandbox Settings

1. Go to your Twilio Console
2. Click this link to go directly to sandbox settings:
   ```
   https://console.twilio.com/us1/develop/sms/settings/whatsapp-sandbox
   ```

### Step 2: Set the Webhook URL

1. Scroll down to **"Sandbox Configuration"**
2. Find the field **"WHEN A MESSAGE COMES IN"**
3. Paste your webhook URL:
   ```
   https://5000-i7ushcv2e4515e4wxq4bk-9c938076.manusvm.computer/api/whatsapp/webhook
   ```
4. Make sure the method is set to **"HTTP POST"**
5. Click **"Save"**

### Step 3: Join the WhatsApp Sandbox

1. In the same page, you'll see a **sandbox phone number** (e.g., `+1 415 523 8886`)
2. You'll also see a **join code** (e.g., `join happy-tiger`)
3. Open WhatsApp on your phone
4. Send a message to the sandbox number with the join code

**Example:**
```
To: +1 415 523 8886
Message: join happy-tiger
```

You should receive a confirmation:
```
✅ Twilio Sandbox: You are all set!
Reply with a message to test it out.
```

### Step 4: Test the Integration

Send a test message:
```
Hello!
```

**Expected Response:**
```
✅ Message received!

You said: "Hello!"

This is a test response from ZimStudy.com. The full AI bot will be available once the backend is fully configured.
```

## 🎉 Success!

If you received the test response, your WhatsApp integration is working!

## 🔧 Troubleshooting

### Issue: No response from bot

**Check 1: Webhook URL is correct**
- Make sure you copied the full URL including `/api/whatsapp/webhook`
- Verify there are no extra spaces

**Check 2: Server is running**
- The webhook server must be running for messages to work
- Check the terminal where you started the server

**Check 3: Check Twilio logs**
- Go to: https://console.twilio.com/us1/monitor/logs/sms
- Look for any error messages

### Issue: "Webhook verification failed"

**Solution:**
- Make sure the verify token in your .env matches: `zimstudy-webhook-verify-token-2025`
- Restart the webhook server

### Issue: Message received but no response sent

**Solution:**
- Check that your Twilio credentials are correct in `.env`
- Verify your Twilio account has credits (trial accounts get free credits)
- Check the server logs for error messages

## 📊 Monitor Your Webhook

### View Incoming Messages

Watch the terminal where the webhook server is running. You'll see:
```
📨 Incoming WhatsApp message:
{
  "From": "whatsapp:+263771234567",
  "Body": "Hello!",
  "MessageSid": "SM..."
}
```

### Check Twilio Logs

1. Go to: https://console.twilio.com/us1/monitor/logs/sms
2. You'll see all incoming and outgoing messages
3. Click on any message to see details

## 🚀 Next Steps

Once the test server is working, you can:

1. **Add OpenAI API Key** to enable the full AI chatbot
2. **Start the full backend** with all features
3. **Customize bot responses** in the AI service
4. **Set up automated messages** (daily quizzes, reminders)

## 💡 Important Notes

- **Trial Account Limits**: Twilio trial accounts can only send messages to verified phone numbers
- **Webhook URL Changes**: If you restart the server, you may need to update the webhook URL in Twilio
- **Production**: For production use, get a dedicated WhatsApp Business number

---

**Need help?** Check the server logs or refer to `TWILIO_WHATSAPP_SETUP.md` for detailed troubleshooting.
