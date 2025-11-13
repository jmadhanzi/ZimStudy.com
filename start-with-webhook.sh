#!/bin/bash

# ZimStudy.com - Start Backend with ngrok Webhook
# This script starts the backend server and ngrok tunnel simultaneously

echo "╔════════════════════════════════════════════════════════╗"
echo "║   ZimStudy.com - Starting Backend with WhatsApp       ║"
echo "╚════════════════════════════════════════════════════════╝"
echo ""

# Check if backend dependencies are installed
if [ ! -d "backend/node_modules" ]; then
    echo "📦 Installing backend dependencies..."
    cd backend && npm install && cd ..
fi

# Check if .env exists
if [ ! -f "backend/.env" ]; then
    echo "❌ Error: backend/.env file not found!"
    echo "Please run the setup first or create .env manually."
    exit 1
fi

echo "✅ Configuration found"
echo ""

# Display Twilio configuration
echo "📱 Twilio Configuration:"
grep "TWILIO_ACCOUNT_SID" backend/.env | sed 's/=/ = /'
grep "TWILIO_WHATSAPP_NUMBER" backend/.env | sed 's/=/ = /'
echo ""

# Check if ngrok is installed
if ! command -v ngrok &> /dev/null; then
    echo "❌ ngrok not found. Installing..."
    wget -q https://bin.equinox.io/c/bNyj1mQVY4c/ngrok-v3-stable-linux-amd64.tgz
    tar xzf ngrok-v3-stable-linux-amd64.tgz
    sudo mv ngrok /usr/local/bin/
    rm ngrok-v3-stable-linux-amd64.tgz
    echo "✅ ngrok installed"
fi

echo "🚀 Starting services..."
echo ""

# Start backend in background
cd backend
npm run dev > ../backend.log 2>&1 &
BACKEND_PID=$!
cd ..

echo "✅ Backend server starting (PID: $BACKEND_PID)"
echo "   Logs: backend.log"

# Wait for backend to start
echo "⏳ Waiting for backend to be ready..."
sleep 5

# Check if backend is running
if ! ps -p $BACKEND_PID > /dev/null; then
    echo "❌ Backend failed to start. Check backend.log for errors."
    exit 1
fi

# Start ngrok
echo "✅ Backend is running on http://localhost:5000"
echo ""
echo "🌐 Starting ngrok tunnel..."
ngrok http 5000 > ngrok.log 2>&1 &
NGROK_PID=$!

echo "✅ ngrok tunnel starting (PID: $NGROK_PID)"
echo "   Logs: ngrok.log"

# Wait for ngrok to start
sleep 3

# Get ngrok URL
NGROK_URL=$(curl -s http://localhost:4040/api/tunnels | grep -o '"public_url":"https://[^"]*' | grep -o 'https://[^"]*' | head -1)

if [ -z "$NGROK_URL" ]; then
    echo "⚠️  Could not retrieve ngrok URL automatically"
    echo "   Check ngrok.log or visit http://localhost:4040"
else
    echo ""
    echo "╔════════════════════════════════════════════════════════╗"
    echo "║   🎉 Services Running Successfully!                   ║"
    echo "╚════════════════════════════════════════════════════════╝"
    echo ""
    echo "📊 Backend API: http://localhost:5000"
    echo "🌐 Public URL:  $NGROK_URL"
    echo "📈 ngrok Dashboard: http://localhost:4040"
    echo ""
    echo "╔════════════════════════════════════════════════════════╗"
    echo "║   Configure Twilio Webhook                            ║"
    echo "╚════════════════════════════════════════════════════════╝"
    echo ""
    echo "1. Go to: https://console.twilio.com/us1/develop/sms/settings/whatsapp-sandbox"
    echo ""
    echo "2. Set 'WHEN A MESSAGE COMES IN' to:"
    echo "   $NGROK_URL/api/whatsapp/webhook"
    echo ""
    echo "3. Method: HTTP POST"
    echo ""
    echo "4. Click 'Save'"
    echo ""
    echo "╔════════════════════════════════════════════════════════╗"
    echo "║   Test Your WhatsApp Bot                              ║"
    echo "╚════════════════════════════════════════════════════════╝"
    echo ""
    echo "1. Join WhatsApp Sandbox:"
    echo "   - Go to: https://console.twilio.com/us1/develop/sms/try-it-out/whatsapp-learn"
    echo "   - Send the join code to the sandbox number"
    echo ""
    echo "2. Send a test message:"
    echo "   - Message: Hello!"
    echo "   - Expected: AI greeting from ZimBot"
    echo ""
    echo "3. Try a command:"
    echo "   - Message: /help"
    echo "   - Expected: List of available commands"
    echo ""
    echo "📝 To stop services:"
    echo "   Press Ctrl+C or run: kill $BACKEND_PID $NGROK_PID"
    echo ""
fi

# Save PIDs to file for easy cleanup
echo "$BACKEND_PID" > .backend.pid
echo "$NGROK_PID" > .ngrok.pid

# Keep script running and show logs
echo "📋 Monitoring logs (Ctrl+C to stop)..."
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

tail -f backend.log
