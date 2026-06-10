# 🚀 SEO Brain Pro

SEO Brain Pro is a full-stack SEO automation platform built with Next.js, Express, TypeScript, Prisma, and PostgreSQL. It is designed to automate SEO workflows, job execution, analytics, reporting, and AI-powered content operations.

---

# Tech Stack

## Frontend

* Next.js 16
* TypeScript
* Tailwind CSS
* shadcn/ui
* Lucide Icons

## Backend

* Express.js
* TypeScript
* Prisma ORM
* PostgreSQL
* JWT Authentication
* bcryptjs

---

# Current Features

## Authentication

* User Registration
* User Login
* JWT Authentication
* Protected APIs

## Project Management

* Create Project
* List Projects
* Project Details
* User Assignment
* Role Middleware

## Dashboard

* Sidebar Navigation
* Navbar
* Stats Cards
* Quick Actions
* Recent Activity

---

# Database Models

## User

```text
User
├── id
├── name
├── email
├── password
├── role
└── timestamps
```

## Project

```text
Project
├── id
├── name
├── description
└── timestamps
```

## UserProject

```text
UserProject
├── userId
└── projectId
```

## Job

```text
Job
├── id
├── name
├── status
└── projectId
```

## JobLog

```text
JobLog
├── id
├── message
└── jobId
```

---

# Folder Structure

```text
SEO-BRAIN-PRO
│
├── backend
│   ├── prisma
│   ├── src
│   │   ├── controllers
│   │   ├── middleware
│   │   ├── routes
│   │   ├── services
│   │   ├── lib
│   │   ├── app.ts
│   │   └── server.ts
│   │
│   └── package.json
│
├── frontend
│   ├── app
│   ├── components
│   ├── lib
│   ├── public
│   └── package.json
│
└── README.md
```

---

# Installation

## Clone Repository

```bash
git clone https://github.com/kishorkumarbairagi69/seobrain.git

cd seobrain
```

---

# Backend Setup

```bash
cd backend

npm install
```

Create `.env`

```env
DATABASE_URL=postgresql://username@localhost:5432/seo_brain_pro

JWT_SECRET=your-secret-key

PORT=5000
```

Run:

```bash
npx prisma generate

npx prisma migrate dev

npm run dev
```

Backend runs on:

```text
http://localhost:5000
```

---

# Frontend Setup

```bash
cd frontend

npm install

npm run dev
```

Frontend runs on:

```text
http://localhost:3000
```

---

# API Endpoints

## Authentication

```http
POST /api/auth/register

POST /api/auth/login

GET /api/me
```

## Projects

```http
POST /api/projects

GET /api/projects

GET /api/projects/:id

POST /api/projects/:id/users
```

---

# Upcoming Modules

## Phase 12

* Page Traffic Engine
* Job System
* Scheduler
* Logs

## Phase 13

* Queue Management
* Background Workers

## Phase 14

* Google Search Console Integration

## Phase 15

* GA4 Integration

## Phase 16

* Weekly Reports

## Phase 17

* AI SEO Brain Engine

---

# Author

**Kishor Kumar Bairagi**

GitHub:
https://github.com/kishorkumarbairagi69

---

# Repository

https://github.com/kishorkumarbairagi69/seobrain
