# 🏔️ PahadiNest

### AI-Powered Homestay & Travel Discovery Platform for Uttarakhand

PahadiNest is an AI-powered travel discovery platform designed to help
travelers find suitable homestays, hotels, resorts, and other stays across
Uttarakhand.

Users can enter their destination, number of travelers, budget, stay type,
and preferences. PahadiNest uses AI-powered search to discover and compare
suitable accommodation options from available web sources.

---

## 🚀 Live Demo

🔗 https://pahadi-nest.vercel.app/

## 💻 GitHub Repository

🔗 https://github.com/Darshitajoshi/PahadiNest

---

## ✨ Features

- 🏔️ Explore destinations across Uttarakhand
- 🤖 AI-powered Himalayan Travel Assistant
- 🔎 AI-powered accommodation search
- 💰 Budget-based stay recommendations
- 👥 Search according to number of travelers
- 🏡 Filter by stay type
- ⭐ Compare ratings and prices
- 🔗 Visit original booking/source websites
- ❤️ Save favorite stays
- 📊 Personal dashboard
- 🕒 Recent search history
- 🔐 Email/password authentication
- 🔑 Google OAuth authentication
- 🌙 Dark mode
- 📱 Responsive design

---

## 🤖 AI Features

PahadiNest includes two major AI-powered features:

### 1. AI Travel Assistant

The AI Assistant helps users with:

- Trip planning
- Homestays and hotels
- Tourist places
- Packing
- Local food
- Transportation
- Budget travel

### 2. AI Stay Finder

Users can provide:

- Destination
- Number of travelers
- Maximum budget
- Stay type
- Personal preferences

The system searches for suitable accommodation options and presents
recommendations with price, location, rating, source and original links.

---

## 🛠️ Tech Stack

### Frontend
- React.js
- Vite
- Tailwind CSS
- React Router
- Axios
- React Icons

### Backend
- Node.js
- Express.js
- REST APIs
- Passport.js
- JWT Authentication
- Google OAuth

### Database
- MongoDB
- Mongoose

### AI & APIs
- Google Gemini API
- Tavily Search API

### Deployment
- Vercel — Frontend
- Render — Backend
- MongoDB Atlas — Database

### Development Tools
- Git
- GitHub
- VS Code
- Postman

---

## 🏗️ System Architecture

```text
User
  │
  ▼
React Frontend
  │
  │ Axios / REST API
  ▼
Express.js Backend
  │
  ├── Authentication
  │     ├── JWT
  │     └── Google OAuth
  │
  ├── AI Assistant
  │     └── Gemini API
  │
  ├── Stay Search
  │     └── Tavily Search API
  │
  └── Homestay APIs
        │
        ▼
     MongoDB