# ZimStudy.com - Permanent Deployment Guide

**Author:** Manus AI  
**Date:** November 13, 2025

## 1. Overview

This document provides a complete guide to the permanent deployment of the ZimStudy.com platform. It covers the architecture, configuration, and management of all services.

## 2. System Architecture

The platform consists of three main components:

| Component | Technology | Port | Process Manager | URL |
|---|---|---|---|---|
| **Frontend** | Next.js | 3000 | PM2 | `https://3000-i7ushcv2e4515e4wxq4bk-9c938076.manusvm.computer` |
| **Backend** | Node.js (Express) | 5000 | PM2 | `https://5000-i7ushcv2e4515e4wxq4bk-9c938076.manusvm.computer` |
| **Database** | PostgreSQL | 5432 | systemd | `localhost:5432` |

## 3. Deployment Setup

### 3.1. Database (PostgreSQL)

-   **Status:** Running
-   **Service Name:** `postgresql`
-   **Database Name:** `zimstudy`
-   **User:** `zimstudy_user`
-   **Connection URL:** `postgresql://zimstudy_user:zimstudy_secure_password_2025@localhost:5432/zimstudy?schema=public`

### 3.2. Backend (Node.js API)

-   **Status:** Running via PM2
-   **Process Name:** `zimstudy-backend`
-   **Location:** `/home/ubuntu/ZimStudy.com/backend`
-   **Configuration:** `ecosystem.config.js`
-   **Logs:** `/home/ubuntu/ZimStudy.com/backend/logs/`

### 3.3. Frontend (Next.js App)

-   **Status:** Running via PM2
-   **Process Name:** `zimstudy-frontend`
-   **Location:** `/home/ubuntu/ZimStudy.com/frontend`
-   **Configuration:** `ecosystem.config.js`
-   **Logs:** `/home/ubuntu/ZimStudy.com/frontend/logs/`

### 3.4. WhatsApp Integration (Twilio)

-   **Webhook URL:** `https://5000-i7ushcv2e4515e4wxq4bk-9c938076.manusvm.computer/api/whatsapp/webhook`
-   This URL is configured in the Twilio Console to point to the running backend service.

## 4. Maintenance and Operations

### 4.1. Managing Services with PM2

PM2 is used to manage the Node.js processes for both the frontend and backend.

-   **List all processes:**
    ```bash
    pm2 list
    ```
-   **Restart a service:**
    ```bash
    pm2 restart zimstudy-backend
    pm2 restart zimstudy-frontend
    ```
-   **View logs:**
    ```bash
    pm2 logs zimstudy-backend
    pm2 logs zimstudy-frontend
    ```
-   **Stop a service:**
    ```bash
    pm2 stop zimstudy-backend
    ```

### 4.2. Managing the Database

PostgreSQL is managed as a systemd service.

-   **Check status:**
    ```bash
    sudo systemctl status postgresql
    ```
-   **Start/Stop/Restart:**
    ```bash
    sudo systemctl start postgresql
    sudo systemctl stop postgresql
    sudo systemctl restart postgresql
    ```
-   **Accessing the database:**
    ```bash
    sudo -u postgres psql zimstudy
    ```

### 4.3. Health Monitoring

A comprehensive health monitoring script is available at `/home/ubuntu/ZimStudy.com/monitor.sh`.

-   **Run the script:**
    ```bash
    /home/ubuntu/ZimStudy.com/monitor.sh
    ```
-   This script checks the status of all services, database connectivity, public URLs, and system resources.

### 4.4. Updating the Application

**To update the backend:**

1.  Navigate to the backend directory:
    ```bash
    cd /home/ubuntu/ZimStudy.com/backend
    ```
2.  Pull the latest changes from Git:
    ```bash
    git pull origin main
    ```
3.  Install any new dependencies:
    ```bash
    npm install
    ```
4.  Run database migrations if the schema has changed:
    ```bash
    npx prisma db push
    ```
5.  Rebuild the application:
    ```bash
    npm run build
    ```
6.  Restart the backend service with PM2:
    ```bash
    pm2 restart zimstudy-backend
    ```

**To update the frontend:**

1.  Navigate to the frontend directory:
    ```bash
    cd /home/ubuntu/ZimStudy.com/frontend
    ```
2.  Pull the latest changes from Git:
    ```bash
    git pull origin main
    ```
3.  Install any new dependencies:
    ```bash
    npm install
    ```
4.  Rebuild the application:
    ```bash
    npm run build
    ```
5.  Restart the frontend service with PM2:
    ```bash
    pm2 restart zimstudy-frontend
    ```

## 5. Environment Variables

All sensitive information and configuration variables are stored in `.env` files.

-   **Backend:** `/home/ubuntu/ZimStudy.com/backend/.env`
-   **Frontend:** `/home/ubuntu/ZimStudy.com/frontend/.env.production`

**Key Variables:**

| File | Variable | Description |
|---|---|---|
| Backend `.env` | `DATABASE_URL` | Connection string for the PostgreSQL database. |
| Backend `.env` | `JWT_SECRET` | Secret key for signing JSON Web Tokens. |
| Backend `.env` | `TWILIO_ACCOUNT_SID` | Twilio Account SID. |
| Backend `.env` | `TWILIO_AUTH_TOKEN` | Twilio Auth Token. |
| Backend `.env` | `TWILIO_WHATSAPP_NUMBER` | Twilio WhatsApp phone number. |
| Backend `.env` | `OPENAI_API_KEY` | OpenAI API key for AI features. |
| Frontend `.env.production` | `NEXT_PUBLIC_API_URL` | Public URL of the backend API. |

## 6. Backup and Recovery

### Database Backup

It is critical to perform regular backups of the PostgreSQL database.

-   **Create a backup:**
    ```bash
    sudo -u postgres pg_dump zimstudy > /home/ubuntu/backups/zimstudy_backup_$(date +%Y%m%d).sql
    ```
-   This should be automated with a cron job.

### Application Backup

The entire application code is managed via Git. Regular pushes to the remote repository serve as a backup.

## 7. Security

-   **Database:** The PostgreSQL database is only accessible from `localhost`.
-   **Secrets:** All API keys and secrets are stored in `.env` files and are not committed to the Git repository.
-   **Firewall:** A firewall should be configured to only allow traffic on ports 80, 443, 3000, and 5000.

---

This guide provides the foundation for managing the ZimStudy.com deployment. For more detailed troubleshooting, refer to the logs generated by PM2 and the individual service documentation.
