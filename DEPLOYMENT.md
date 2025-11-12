# Deployment Guide for ZimStudy.com

This guide will help you deploy ZimStudy.com to various platforms.

## Prerequisites

- Node.js 18+
- PostgreSQL 14+
- Docker & Docker Compose (for containerized deployment)
- Twilio account (for WhatsApp integration - optional)

## Local Development

### 1. Clone and Install

```bash
git clone <repository-url>
cd ZimStudy.com
npm install
```

### 2. Set Up Environment Variables

```bash
# Backend
cp backend/.env.example backend/.env
# Edit backend/.env with your database credentials

# Frontend
cp frontend/.env.example frontend/.env.local
# Edit frontend/.env.local with your API URL
```

### 3. Set Up Database

```bash
cd backend
npx prisma migrate dev
npx prisma db seed
cd ..
```

### 4. Run Development Servers

```bash
# Terminal 1: Backend
cd backend
npm run dev

# Terminal 2: Frontend
cd frontend
npm run dev
```

Visit http://localhost:3000

## Docker Deployment

### Using Docker Compose (Recommended)

```bash
# Build and start all services
docker-compose up -d

# View logs
docker-compose logs -f

# Stop services
docker-compose down
```

The application will be available at:
- Frontend: http://localhost:3000
- Backend API: http://localhost:5000

## Production Deployment

### Option 1: Deploy to VPS (DigitalOcean, AWS EC2, etc.)

1. **Set up server:**
```bash
# Update system
sudo apt update && sudo apt upgrade -y

# Install Node.js
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt install -y nodejs

# Install PostgreSQL
sudo apt install postgresql postgresql-contrib

# Install Nginx
sudo apt install nginx
```

2. **Clone and configure:**
```bash
git clone <repository-url>
cd ZimStudy.com
npm install
```

3. **Set up database:**
```bash
sudo -u postgres psql
CREATE DATABASE zimstudy;
CREATE USER zimstudy WITH ENCRYPTED PASSWORD 'your_password';
GRANT ALL PRIVILEGES ON DATABASE zimstudy TO zimstudy;
\q
```

4. **Configure environment:**
```bash
cp backend/.env.example backend/.env
# Edit backend/.env with production values
```

5. **Build and run:**
```bash
# Backend
cd backend
npm run build
npm run prisma:migrate
npm run prisma:seed

# Frontend
cd ../frontend
npm run build

# Use PM2 to manage processes
npm install -g pm2
pm2 start npm --name "zimstudy-backend" -- start
pm2 start npm --name "zimstudy-frontend" -- start
pm2 save
pm2 startup
```

6. **Configure Nginx:**
```nginx
server {
    listen 80;
    server_name your-domain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }

    location /api {
        proxy_pass http://localhost:5000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

7. **Set up SSL with Let's Encrypt:**
```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d your-domain.com
```

### Option 2: Deploy to Vercel (Frontend) + Railway (Backend + DB)

#### Deploy Backend to Railway

1. Go to [Railway.app](https://railway.app)
2. Create new project
3. Add PostgreSQL database
4. Deploy from GitHub repository
5. Set environment variables in Railway dashboard
6. Note the backend URL

#### Deploy Frontend to Vercel

1. Go to [Vercel.com](https://vercel.com)
2. Import GitHub repository
3. Select `frontend` folder as root
4. Set environment variable:
   - `NEXT_PUBLIC_API_URL`: Your Railway backend URL
5. Deploy

### Option 3: Deploy to AWS

#### Using AWS Elastic Beanstalk

1. Install EB CLI:
```bash
pip install awsebcli
```

2. Initialize EB:
```bash
eb init
```

3. Create environment:
```bash
eb create zimstudy-production
```

4. Deploy:
```bash
eb deploy
```

#### Using AWS ECS with Docker

1. Build and push Docker images to ECR
2. Create ECS task definitions
3. Set up ECS service with load balancer
4. Configure RDS for PostgreSQL

## WhatsApp Integration Setup

### Using Twilio

1. Sign up at [Twilio.com](https://www.twilio.com)
2. Get WhatsApp sandbox number or request production access
3. Configure webhook URL: `https://your-domain.com/api/whatsapp/webhook`
4. Set environment variables:
   - `TWILIO_ACCOUNT_SID`
   - `TWILIO_AUTH_TOKEN`
   - `TWILIO_WHATSAPP_NUMBER`

### Using WhatsApp Business API

1. Apply for WhatsApp Business API access
2. Set up webhook endpoint
3. Configure environment variables
4. Implement message templates

## Post-Deployment

### 1. Create Admin User

```bash
# Using Prisma Studio
npx prisma studio

# Or via API
curl -X POST https://your-domain.com/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "email": "admin@yourdomain.com",
    "password": "secure_password",
    "firstName": "Admin",
    "lastName": "User",
    "role": "ADMIN"
  }'
```

### 2. Add Initial Content

Use the admin panel or Prisma Studio to add:
- Subjects
- Topics
- Content (notes, videos, quizzes)

### 3. Set Up Monitoring

- Set up error tracking (Sentry, LogRocket)
- Configure uptime monitoring
- Set up database backups
- Enable application logs

### 4. Configure CDN (Optional)

Use Cloudflare or AWS CloudFront for:
- Static asset caching
- DDoS protection
- Global content delivery

## Maintenance

### Database Backups

```bash
# Backup
pg_dump -U zimstudy -d zimstudy > backup_$(date +%Y%m%d).sql

# Restore
psql -U zimstudy -d zimstudy < backup_20240101.sql
```

### Updates

```bash
# Pull latest code
git pull origin main

# Backend
cd backend
npm install
npx prisma migrate deploy
npm run build
pm2 restart zimstudy-backend

# Frontend
cd ../frontend
npm install
npm run build
pm2 restart zimstudy-frontend
```

## Security Checklist

- [ ] Change all default passwords
- [ ] Enable HTTPS/SSL
- [ ] Set secure JWT secret
- [ ] Configure CORS properly
- [ ] Enable rate limiting
- [ ] Set up firewall rules
- [ ] Regular security updates
- [ ] Database connection encryption
- [ ] Secure API keys in environment variables
- [ ] Regular backups

## Support

For issues or questions:
- Email: support@zimstudy.com
- GitHub Issues: <repository-url>/issues
