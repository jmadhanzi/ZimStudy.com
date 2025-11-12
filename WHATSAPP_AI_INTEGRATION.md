# ZimStudy.com WhatsApp AI Integration

**Author:** Manus AI
**Date:** November 12, 2025

## 1. Overview

This document provides a comprehensive technical overview of the WhatsApp AI integration for the ZimStudy.com platform. This feature transforms the platform's WhatsApp capabilities from a simple notification system into an interactive, AI-powered learning assistant named **ZimBot**. 

The integration is designed to provide an accessible, low-bandwidth learning experience for Zimbabwean students, allowing them to study, take quizzes, and get AI-powered tutoring directly through WhatsApp.

## 2. Core Features

The WhatsApp AI integration includes the following key features:

### 2.1. AI-Powered Chatbot (ZimBot)
- **Natural Language Understanding:** Students can chat with ZimBot in plain English to ask questions and get help with their studies.
- **Personalized Tutoring:** The bot leverages OpenAI's `gpt-4o-mini` model to provide context-aware explanations, examples, and study guidance.
- **Conversation History:** The bot maintains a short-term memory of the conversation to provide more relevant follow-up responses.

### 2.2. Command-Based Interaction
Students can use simple commands to access specific features:

| Command               | Description                      |
| --------------------- | -------------------------------- |
| `/help`               | Shows a list of all commands.    |
| `/subjects`           | Lists the user's enrolled subjects. |
| `/topics [subject]`   | Shows topics for a specific subject. |
| `/quiz [subject]`     | Starts a quick practice quiz.    |
| `/progress`           | Displays the user's learning stats. |
| `/study [subject]`    | Provides AI-generated study tips. |
| `/summary [topic]`    | Gives a concise summary of a topic. |
| `/reset`              | Clears the conversation history. |

### 2.3. Automated & Scheduled Messaging
- **Daily Quizzes:** A scheduler sends a new quiz question to opted-in users every morning at 9 AM.
- **Study Reminders:** A daily reminder is sent at 6 PM to users who have not been active on the platform that day.
- **Weekly Progress Updates:** A summary of the week's progress is sent every Sunday at 10 AM.
- **Motivational Messages:** Encouraging messages are sent out on Mondays, Wednesdays, and Fridays at 7 AM.

### 2.4. Event-Driven Notifications
- **Welcome Message:** New users who opt-in receive a welcome message and a quick start guide.
- **Quiz & Topic Completion:** Instant notifications are sent upon completing a quiz or a topic.
- **Achievement Unlocks:** Users are notified when they achieve milestones, such as a study streak.

## 3. Technical Architecture

The integration is built upon several key services and components:

- **Twilio WhatsApp Business API:** Serves as the gateway for sending and receiving WhatsApp messages.
- **OpenAI API:** Powers the AI chatbot's intelligence, providing natural language responses, explanations, and summaries.
- **Express.js Backend:** Hosts the webhook that processes incoming messages and orchestrates the responses.
- **Prisma & PostgreSQL:** The database stores user information, conversation logs, and learning progress.
- **Node-Cron:** Manages the scheduled delivery of daily quizzes, reminders, and other automated messages.

### 3.1. Message Flow

1.  A student sends a message to the ZimStudy WhatsApp number.
2.  Twilio forwards the message to the `/api/whatsapp/webhook` endpoint on the backend.
3.  The `handleWebhook` controller logs the message and passes it to the `processWhatsAppMessage` service.
4.  The service determines if the message is a command, a quiz answer, or a general query.
5.  Based on the message type, it either executes a command handler or calls the `generateAIResponse` service.
6.  The AI service constructs a prompt (including conversation history and user context) and sends it to the OpenAI API.
7.  The AI's response is received and sent back to the user via the Twilio API.

## 4. Setup and Configuration

To enable the WhatsApp AI integration, follow these steps:

### 4.1. Environment Variables

Add the following variables to your `.env` file in the `backend` directory:

```env
# WhatsApp Integration (Twilio)
TWILIO_ACCOUNT_SID="your-twilio-account-sid"
TWILIO_AUTH_TOKEN="your-twilio-auth-token"
TWILIO_WHATSAPP_NUMBER="whatsapp:+14155238886" # Your Twilio number
WHATSAPP_VERIFY_TOKEN="your-webhook-verify-token" # A secure, random string

# OpenAI API for AI Chatbot
OPENAI_API_KEY="your-openai-api-key"
```

### 4.2. Twilio Webhook Configuration

1.  In your Twilio console, navigate to the settings for your WhatsApp-enabled phone number.
2.  Under "Messaging", find the "A MESSAGE COMES IN" webhook setting.
3.  Set the URL to `https://your-backend-url.com/api/whatsapp/webhook`.
4.  Ensure the method is set to `HTTP POST`.

## 5. New & Updated Files

### 5.1. New Files

| File                                               | Description                                                              |
| -------------------------------------------------- | ------------------------------------------------------------------------ |
| `backend/src/services/ai.service.ts`               | Handles all interactions with the OpenAI API.                            |
| `backend/src/services/whatsapp-bot.service.ts`     | Contains the core logic for command handling and message processing.     |
| `backend/src/services/scheduler.service.ts`        | Manages all scheduled tasks using `node-cron`.                           |
| `backend/src/services/notification.service.ts`     | A new, enhanced service for creating and sending multi-channel notifications. |
| `backend/test-whatsapp-ai.ts`                      | A test script to validate the AI and bot functionality.                  |

### 5.2. Modified Files

- **`backend/src/controllers/whatsapp.controller.ts`**: Updated to handle AI responses, new test endpoints, and stats.
- **`backend/src/routes/whatsapp.routes.ts`**: Added new routes for testing and statistics.
- **`backend/src/server.ts`**: Modified to initialize the new schedulers on server startup.
- **`backend/.env.example`**: Added `OPENAI_API_KEY` and `WHATSAPP_VERIFY_TOKEN`.
- **`backend/package.json`**: Added `openai` and `node-cron` dependencies.

## 6. API Endpoints

The following new API endpoints have been added to manage and test the WhatsApp integration:

| Method | Endpoint                               | Description                                    |
| ------ | -------------------------------------- | ---------------------------------------------- |
| `GET`  | `/api/whatsapp/history`                | Retrieves the message history for the logged-in user. |
| `GET`  | `/api/whatsapp/stats`                  | (Admin) Gets usage statistics for the WhatsApp bot. |
| `POST` | `/api/whatsapp/test/daily-quiz`        | (Admin) Manually triggers a daily quiz for a phone number. |
| `POST` | `/api/whatsapp/test/study-reminder`    | (Admin) Manually triggers a study reminder.    |
| `POST` | `/api/whatsapp/test/progress-update`   | (Admin) Manually triggers a progress update.   |

## 7. Testing

A test script has been created to validate the core components of the AI integration. To run it, use the following command from the `backend` directory:

```bash
ts-node test-whatsapp-ai.ts
```

This script will test:
- Basic AI responses from the `ai.service`.
- All command handlers in the `whatsapp-bot.service`.
- AI-powered content generation for notifications.

**Note:** This script uses mock data and does not actually send WhatsApp messages. End-to-end testing must be performed by sending messages from a real WhatsApp account to the configured Twilio number.
