# ZimStudy.com - Quick Access Information

**Date:** November 13, 2025  
**Status:** ✅ DEPLOYED AND LIVE

## 🌐 Public URLs

### Website (Frontend)
```
https://3000-i7ushcv2e4515e4wxq4bk-9c938076.manusvm.computer
```
- Main user interface
- Student dashboard
- Subject browsing
- Quiz interface

### API (Backend)
```
https://5000-i7ushcv2e4515e4wxq4bk-9c938076.manusvm.computer
```
- REST API endpoints
- WhatsApp webhook
- Health check: `/health`

### WhatsApp Webhook
```
https://5000-i7ushcv2e4515e4wxq4bk-9c938076.manusvm.computer/api/whatsapp/webhook
```
- Configure this URL in Twilio Console

## 🔐 Credentials

### Database
- **Host:** localhost
- **Port:** 5432
- **Database:** zimstudy
- **User:** zimstudy_user
- **Password:** zimstudy_secure_password_2025

### Twilio (Configured)
- Account SID: (in backend/.env)
- Auth Token: (in backend/.env)
- WhatsApp Number: +1 (866) 551-6275

### OpenAI (Configured)
- API Key: (in backend/.env)
- Model: gpt-4o-mini

## 📊 Service Status

Check service status anytime:
```bash
pm2 list
```

Run comprehensive health check:
```bash
/home/ubuntu/ZimStudy.com/monitor.sh
```

## 🔧 Quick Commands

### Restart Services
```bash
pm2 restart zimstudy-backend
pm2 restart zimstudy-frontend
```

### View Logs
```bash
pm2 logs zimstudy-backend
pm2 logs zimstudy-frontend
```

### Check Database
```bash
sudo systemctl status postgresql
```

## 📝 Important Files

- **Deployment Guide:** `/home/ubuntu/ZimStudy.com/DEPLOYMENT_GUIDE.md`
- **WhatsApp Setup:** `/home/ubuntu/ZimStudy.com/WHATSAPP_SETUP_COMPLETE.md`
- **Monitoring Script:** `/home/ubuntu/ZimStudy.com/monitor.sh`
- **Backend Config:** `/home/ubuntu/ZimStudy.com/backend/.env`
- **Frontend Config:** `/home/ubuntu/ZimStudy.com/frontend/.env.production`

## 🎯 Next Steps

1. **Test the website:** Visit the frontend URL
2. **Test the API:** Visit the backend health endpoint
3. **Configure Twilio:** Set webhook URL in Twilio Console
4. **Test WhatsApp:** Send a message to the bot
5. **Create user accounts:** Register via the website

---

**Everything is running and ready to use!** 🚀
