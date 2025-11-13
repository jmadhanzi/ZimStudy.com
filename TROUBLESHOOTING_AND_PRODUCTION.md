# ZimStudy.com - WhatsApp Integration Troubleshooting & Production Guide

**Author:** Manus AI  
**Date:** November 12, 2025

## 1. Overview

This guide provides solutions to common issues with the Twilio WhatsApp integration and outlines the steps for moving from a testing environment to a live production setup.

## 2. Troubleshooting Common Issues

### Issue 1: No response from the bot

**Symptom:** You send a message to the WhatsApp bot, but it doesn't reply.

**Checklist:**

1.  **Is your webhook server running?**
    -   The `webhook-test-server.js` or the full backend must be running.
    -   Check the terminal for any error messages.

2.  **Is your public webhook URL active?**
    -   If using ngrok, ensure the tunnel is active. The URL can change if you restart ngrok.
    -   If using a Manus VM, the URL is stable but the server must be running.

3.  **Is the webhook URL correct in Twilio?**
    -   Go to [WhatsApp Sandbox Settings](https://console.twilio.com/us1/develop/sms/settings/whatsapp-sandbox).
    -   Verify that the URL under "WHEN A MESSAGE COMES IN" is correct and includes `/api/whatsapp/webhook`.

4.  **Check Twilio Message Logs:**
    -   Go to [Twilio Message Logs](https://console.twilio.com/us1/monitor/logs/sms).
    -   Find your incoming message. Does it have an error? Common errors include `11200 - HTTP retrieval failure` (webhook down) or `11220 - HTTP connection failure`.

5.  **Check Server Logs:**
    -   Look at the terminal where your server is running. Do you see an "Incoming WhatsApp message" log? If not, Twilio isn't reaching your server.

### Issue 2: Bot responds with an error message

**Symptom:** The bot replies, but with a generic error like "Sorry, I encountered an error."

**Checklist:**

1.  **Check Server Logs for Errors:**
    -   This is the most important step. The terminal will show detailed error messages.
    -   Common errors include `OPENAI_API_KEY not set`, database connection issues, or code bugs.

2.  **Verify OpenAI API Key:**
    -   Ensure `OPENAI_API_KEY` in your `.env` file is correct and has credits.
    -   A missing or invalid key is a common cause for AI response failures.

3.  **Check Database Connection:**
    -   Ensure your `DATABASE_URL` is correct and the database is running.

### Issue 3: "Webhook verification failed"

**Symptom:** You see errors in Twilio logs about webhook verification.

**Solution:**

1.  **Verify Token Mismatch:**
    -   The `WHATSAPP_VERIFY_TOKEN` in your `.env` file must exactly match the token used in the webhook verification logic.
    -   For the test server, it's hardcoded as `zimstudy-webhook-verify-token-2025`.

2.  **GET vs. POST:**
    -   Webhook verification uses a `GET` request. Incoming messages use `POST`. Ensure your server handles both.

## 3. Moving to Production

Moving from the Twilio Sandbox to a live production environment involves several key steps to ensure a smooth and scalable setup.

### Step 1: WhatsApp Business Account & Number

1.  **Apply for a WhatsApp Business Account (WABA):**
    -   This is done through the Twilio Console and requires a Facebook Business Manager account.
    -   Your business will need to be verified by Facebook.

2.  **Purchase a Twilio Phone Number:**
    -   Buy a number that is WhatsApp-capable. Not all numbers are.

3.  **Enable WhatsApp on Your Number:**
    -   Submit a request in the Twilio Console to link your WABA and phone number.
    -   This process can take a few days.

### Step 2: Deploy Your Backend

Your backend needs to be hosted on a server with a stable public URL. Options include:

-   **Heroku:** Easy to deploy Node.js applications.
-   **DigitalOcean:** Provides virtual private servers (Droplets) for more control.
-   **AWS (EC2 or Lambda):** Scalable but more complex to set up.
-   **Vercel/Netlify:** Good for serverless functions.

**Deployment Checklist:**

1.  **Set Production Environment Variables:**
    -   `NODE_ENV=production`
    -   Use a strong, unique `JWT_SECRET`.
    -   Use a production `DATABASE_URL`.

2.  **Build the Application:**
    -   Run `npm run build` to compile the TypeScript to JavaScript (output in `dist` folder).

3.  **Run the Production Server:**
    -   Use a process manager like `pm2` to keep your server running.
    -   `pm2 start dist/server.js --name zimstudy-backend`

### Step 3: Configure Production Webhook

1.  In the Twilio Console, go to the settings for your **production WhatsApp number** (not the sandbox).
2.  Set the webhook URL to your production server's public URL:
    ```
    https://your-production-domain.com/api/whatsapp/webhook
    ```

### Step 4: Message Templates

For business-initiated conversations (e.g., daily quizzes, notifications), WhatsApp requires you to use pre-approved **Message Templates**.

-   You must create and submit these templates for approval in the Twilio Console.
-   Example template for a daily quiz:
    > "🎯 Daily Quiz Time! Here is your question for today, {{1}}:
    > 
    > {{2}}
    > 
    > Reply with the number of your answer."

-   Your code will need to be updated to call the Twilio API with the template SID and variables.

### Step 5: Scalability & Monitoring

-   **Database:** Ensure your database can handle the expected load.
-   **Rate Limiting:** Implement rate limiting on your API to prevent abuse.
-   **Logging:** Use a production-grade logging service (e.g., Winston, Pino) to monitor for errors.
-   **Twilio Monitoring:** Use Twilio's built-in analytics and debugger to monitor message delivery and costs.

## 4. Production Best Practices

| Area | Recommendation |
|---|---|
| **Security** | - Use unique, strong secrets for `JWT_SECRET` and `WHATSAPP_VERIFY_TOKEN`.<br>- Store secrets securely (e.g., AWS Secrets Manager, HashiCorp Vault).<br>- Implement rate limiting on your webhook endpoint. |
| **Reliability** | - Use a process manager like `pm2` to automatically restart the server on crashes.<br>- Set up health checks that your hosting provider can use to monitor server status. |
| **Cost** | - Monitor your Twilio and OpenAI usage closely.<br>- Implement caching for common AI queries to reduce API calls.<br>- Optimize prompts to be as short as possible. |
| **User Experience** | - Clearly explain to users how to opt-in and opt-out.<br>- Provide a `/help` command that explains how to use the bot.<br>- Handle errors gracefully and provide helpful feedback to the user. |
