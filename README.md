# ZimStudy.com

A Zimbabwe-focused learning platform integrated with WhatsApp for accessible education.

## Features

- 📚 Subject-specific content (notes, videos, quizzes)
- 👥 User management (students, teachers, admins)
- 📊 Progress tracking and analytics
- 💬 WhatsApp integration for notifications and daily quizzes
- 🎯 Interactive learning with quizzes and assessments
- 📱 Mobile-friendly responsive design

## Technology Stack

### Frontend
- **Next.js 14** - React framework with App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Shadcn/ui** - UI components
- **React Query** - Data fetching and caching

### Backend
- **Node.js** - Runtime
- **Express** - Web framework
- **TypeScript** - Type safety
- **Prisma** - ORM
- **PostgreSQL** - Database
- **JWT** - Authentication
- **Twilio/WhatsApp Business API** - WhatsApp integration

## Project Structure

```
zimstudy-platform/
├── frontend/          # Next.js frontend application
├── backend/           # Express backend API
├── prisma/            # Database schema and migrations
├── shared/            # Shared types and utilities
└── docs/              # Documentation
```

## Getting Started

### Prerequisites
- Node.js 18+
- PostgreSQL 14+
- npm or yarn
- Docker & Docker Compose (optional, for containerized setup)

### Quick Start with Docker (Recommended)

The easiest way to get started:

```bash
# Clone the repository
git clone <repository-url>
cd ZimStudy.com

# Copy environment file
cp .env.example .env

# Start all services with Docker Compose
docker-compose up -d

# View logs
docker-compose logs -f
```

That's it! The application will be available at:
- Frontend: http://localhost:3000
- Backend API: http://localhost:5000
- Database: PostgreSQL on localhost:5432

**Default Credentials:**
- Admin: `admin@zimstudy.com` / `admin123`
- Student: `student@example.com` / `student123`

### Manual Installation

1. **Clone the repository:**
```bash
git clone <repository-url>
cd ZimStudy.com
```

2. **Install dependencies:**
```bash
# Install root dependencies
npm install

# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd ../frontend
npm install
cd ..
```

3. **Set up PostgreSQL database:**
```bash
# Create database
createdb zimstudy

# Or using psql
psql -U postgres
CREATE DATABASE zimstudy;
\q
```

4. **Configure environment variables:**
```bash
# Backend
cp backend/.env.example backend/.env
# Edit backend/.env with your database URL and settings

# Frontend
cp frontend/.env.example frontend/.env.local
# Edit frontend/.env.local if needed
```

5. **Set up the database schema and seed data:**
```bash
cd backend
npx prisma migrate dev
npx prisma db seed
cd ..
```

6. **Start development servers:**

**Option A: Using root script (runs both servers):**
```bash
npm run dev
```

**Option B: Run separately in different terminals:**
```bash
# Terminal 1: Backend
cd backend
npm run dev

# Terminal 2: Frontend
cd frontend
npm run dev
```

Access the application:
- Frontend: http://localhost:3000
- Backend API: http://localhost:5000
- API Health Check: http://localhost:5000/health

## Environment Variables

### Backend (.env)
```
DATABASE_URL=postgresql://user:password@localhost:5432/zimstudy
JWT_SECRET=your-secret-key
WHATSAPP_API_KEY=your-whatsapp-api-key
WHATSAPP_PHONE_NUMBER=your-whatsapp-number
NODE_ENV=development
PORT=5000
```

### Frontend (.env.local)
```
NEXT_PUBLIC_API_URL=http://localhost:5000/api
```

## Development Roadmap

### Phase 1: MVP ✅ (Completed)
- [x] Project setup and architecture
- [x] User authentication system (registration, login, JWT)
- [x] Database schema with Prisma ORM
- [x] Student dashboard with stats
- [x] Subject browsing and enrollment
- [x] Topic and content management
- [x] Interactive quiz system with timer
- [x] Progress tracking and analytics
- [x] WhatsApp integration (Twilio)
- [x] Notification system
- [x] Seed data with sample subjects (Math, English, Science)
- [x] Docker deployment configuration
- [x] Responsive mobile-friendly design

### Phase 2: Interactive Learning (Next Steps)
- [ ] Discussion forums and Q&A
- [ ] WhatsApp daily quiz bot with automated delivery
- [ ] Video content integration
- [ ] Past papers library
- [ ] More subjects and expanded content
- [ ] Teacher dashboard for content creation

### Phase 3: Advanced Features
- [ ] AI tutor chatbot
- [ ] Gamification (badges, leaderboards)
- [ ] Offline content access
- [ ] Advanced analytics
- [ ] Mobile app

## Contributing

Please read CONTRIBUTING.md for details on our code of conduct and the process for submitting pull requests.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

For questions or support, contact: support@zimstudy.com
