#!/bin/bash

# ZimStudy.com Health Monitoring Script
# Checks the status of all services

echo "╔════════════════════════════════════════════════════════╗"
echo "║   ZimStudy.com System Health Check                   ║"
echo "╚════════════════════════════════════════════════════════╝"
echo ""
echo "Timestamp: $(date)"
echo ""

# Check PM2 processes
echo "📊 PM2 Process Status:"
pm2 list | grep -E "zimstudy|id.*name"
echo ""

# Check database
echo "🗄️  Database Status:"
if sudo systemctl is-active --quiet postgresql; then
    echo "✅ PostgreSQL is running"
    PGPASSWORD="zimstudy_secure_password_2025" psql -U zimstudy_user -d zimstudy -h localhost -c "SELECT 1;" > /dev/null 2>&1
    if [ $? -eq 0 ]; then
        echo "✅ Database connection successful"
    else
        echo "❌ Database connection failed"
    fi
else
    echo "❌ PostgreSQL is not running"
fi
echo ""

# Check backend health
echo "🔧 Backend API Health:"
BACKEND_HEALTH=$(curl -s http://localhost:5000/health 2>/dev/null)
if [ $? -eq 0 ]; then
    echo "✅ Backend is responding"
    echo "$BACKEND_HEALTH" | python3 -m json.tool 2>/dev/null | head -10
else
    echo "❌ Backend is not responding"
fi
echo ""

# Check frontend health
echo "🌐 Frontend Health:"
FRONTEND_STATUS=$(curl -s -o /dev/null -w "%{http_code}" http://localhost:3000 2>/dev/null)
if [ "$FRONTEND_STATUS" = "200" ]; then
    echo "✅ Frontend is responding (HTTP $FRONTEND_STATUS)"
else
    echo "❌ Frontend is not responding (HTTP $FRONTEND_STATUS)"
fi
echo ""

# Check public URLs
echo "🌍 Public Access:"
echo "Frontend: https://3000-i7ushcv2e4515e4wxq4bk-9c938076.manusvm.computer"
echo "Backend:  https://5000-i7ushcv2e4515e4wxq4bk-9c938076.manusvm.computer"
echo ""

# Check disk space
echo "💾 Disk Usage:"
df -h / | grep -E "Filesystem|/$"
echo ""

# Check memory
echo "🧠 Memory Usage:"
free -h | grep -E "Mem:|Swap:"
echo ""

# PM2 logs summary
echo "📝 Recent Errors (last 10 lines):"
pm2 logs --err --lines 10 --nostream 2>/dev/null || echo "No recent errors"
echo ""

echo "════════════════════════════════════════════════════════"
echo "Health check complete!"
echo "════════════════════════════════════════════════════════"
