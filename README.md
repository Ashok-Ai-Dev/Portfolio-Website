# Ashok Kumar — Portfolio Website (MERN + AI-ready)

Modern, responsive, ATS-optimized portfolio for a final-year B.Tech (CSE) student.

## Folder structure

- `frontend/` — React + Vite + Tailwind + Framer Motion (UI/UX + animations)
- `backend/` — Node.js + Express (MongoDB-ready) API for deployment (Render)

## Features

- **Responsive**: mobile / tablet / desktop
- **Dark/Light mode**: persisted in localStorage
- **Smooth animations**: Framer Motion reveal + scroll progress bar
- **Projects**: curated cards + GitHub API auto-fetch (top repos)
- **Contact**: EmailJS form integration
- **SEO**: meta tags + canonical + clean section headings

## Setup (local)

### 1) Frontend

```bash
cd frontend
copy .env.example .env
npm install
npm run dev
```

Open the dev server URL shown in the terminal (usually `http://localhost:5173`).

### 2) Backend

```bash
cd backend
copy .env.example .env
npm install
npm run dev
```

Health check: `http://localhost:8080/api/health`

## Environment variables

### Frontend (`frontend/.env`)

- `VITE_GITHUB_USERNAME`: your GitHub username
- `VITE_GITHUB_TOKEN` (optional): reduces GitHub API rate-limit issues
- `VITE_EMAILJS_SERVICE_ID`, `VITE_EMAILJS_TEMPLATE_ID`, `VITE_EMAILJS_PUBLIC_KEY`: EmailJS keys

### Backend (`backend/.env`)

- `PORT`: server port (Render sets this automatically)
- `CORS_ORIGIN`: your frontend URL (comma-separated allowed)
- `MONGODB_URI` (optional for future DB features)
- `GITHUB_TOKEN` (optional): used by `/api/github/repos` proxy endpoint

## Content customization (important)

Edit your portfolio content in:

- `frontend/src/data/profile.js`

Add your resume:

- Put PDF at `frontend/public/resume.pdf` (see `resume.README.txt`)

Update your social links:

- `profile.socials` in `frontend/src/data/profile.js`

## Deployment

### Frontend → Vercel

- Import the repo in Vercel
- Set **Root Directory** to `frontend`
- Build command: `npm run build`
- Output directory: `dist`
- Add env vars from `frontend/.env.example`

### Backend → Render

- Create a new **Web Service**
- Root directory: `backend`
- Build command: `npm install`
- Start command: `npm start`
- Add env vars from `backend/.env.example`

## Backend API endpoints

- `GET /api/health` — uptime + status
- `GET /api/github/repos?username=<name>&per_page=12` — optional GitHub proxy

