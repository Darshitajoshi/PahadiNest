🏔️ PahadiNest

AI-Powered Homestay & Travel Discovery Platform

PahadiNest is an AI-powered travel and accommodation discovery platform focused on Uttarakhand. It helps users discover suitable stays, get personalized travel assistance, and find accommodation according to destination, budget, number of travellers, stay type, and preferences.

Developed as an individual capstone project for the TBI GEU Summer Internship Program 2026 – AI-Assisted Full Stack Web Development.

👩‍💻 Intern Details

Name: Darshita JoshiIntern ID: TBI-26100444Program: TBI GEU Summer Internship Program 2026Track: AI-Assisted Full Stack Web DevelopmentProject Type: Individual ProjectProject Name: PahadiNest

🔗 Project Links

Resource

Link

🌐 Live Demo

https://pahadi-nest.vercel.app/

🎥 Demo Video

https://youtu.be/WhGsOPdGQGo

💻 GitHub Repository

https://github.com/Darshitajoshi/PahadiNest

⚙️ Backend API

https://pahadinest-backend.onrender.com

📌 Project Overview

PahadiNest is designed to simplify travel planning in Uttarakhand. Instead of manually checking multiple websites, users can enter their destination, budget, number of travellers, stay type, and preferences.

The platform provides:

AI-powered travel assistance

AI-assisted accommodation discovery

Personalized stay recommendations

Original source/booking links

User authentication

Google OAuth

Saved stays

Recent search history

Personalized dashboard

Responsive modern UI

✨ Main Features

🏠 1. Home Page

The home page introduces PahadiNest and provides quick access to finding a stay and asking the AI assistant.



🤖 2. AI Travel Assistant

The PahadiNest AI Assistant works as a personal Himalayan travel assistant.

Users can ask about:

Trip planning

Homestays & hotels

Tourist places

Packing

Local food

Transport

Budget travel

The interface also provides ready-made prompts for common travel searches.



🔎 3. AI-Powered Find Stay

Users provide:

Destination

Number of travellers

Maximum budget per night

Stay type

Additional preferences

PahadiNest then provides suitable accommodation recommendations with details such as:

Name

Location

Price

Stay type

Rating when available

Why the stay was recommended

Source

Original website / booking link



📊 4. User Dashboard

The dashboard allows users to manage their travel activity.

It includes:

Saved stays

Recent searches

Travel activity

Links to continue searching

Saved accommodation information



🧠 AI & Web Search

Google Gemini API

Gemini is used for the AI-powered travel assistant and AI-assisted travel/accommodation recommendations.

Tavily Search API

Tavily is used to search the live web for accommodation information and source links.

API keys and other secrets are stored in environment variables and are not committed to GitHub.

🛠️ Technology Stack

Frontend

React.js

Vite

Tailwind CSS

React Router

Axios

React Icons

Backend

Node.js

Express.js

REST APIs

Express Session

Passport.js

Database

MongoDB

Mongoose

MongoDB Atlas

Authentication

JWT

Google OAuth

Passport.js

Express Rate Limit

CORS

AI / Search

Google Gemini API

Tavily Search API

Deployment

Vercel — Frontend

Render — Backend

MongoDB Atlas — Database

🏗️ System Architecture

                         ┌───────────────────┐
                         │       User        │
                         └─────────┬─────────┘
                                   │
                                   ▼
                         ┌───────────────────┐
                         │ React + Vite UI  │
                         │    Tailwind CSS   │
                         └─────────┬─────────┘
                                   │
                              REST / Axios
                                   │
                                   ▼
                         ┌───────────────────┐
                         │ Node.js + Express │
                         │      Backend      │
                         └─────┬─────┬───────┘
                               │     │
                 ┌─────────────┘     └──────────────┐
                 ▼                                  ▼
        ┌─────────────────┐                ┌─────────────────┐
        │ MongoDB Atlas   │                │ Gemini / Tavily │
        │     Database    │                │   AI + Search   │
        └─────────────────┘                └─────────────────┘

📂 Project Structure

PahadiNest/
│
├── frontend/
│   ├── public/
│   ├── src/
│   ├── package.json
│   └── ...
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── server.js
│   ├── package.json
│   └── ...
│
├── docs/
│   └── screenshots/
│       ├── home.png
│       ├── ai-assistant.png
│       ├── find-stay.png
│       └── dashboard.png
│
├── README.md
└── .gitignore

🔄 User Flow

Visit PahadiNest
       │
       ▼
   Register / Login
       │
       ▼
     Dashboard
       │
       ├──────────────► AI Travel Assistant
       │
       └──────────────► Find Stay
                              │
                              ▼
                    Enter requirements
                              │
                              ▼
                       AI + Web Search
                              │
                              ▼
                    Stay Recommendations
                              │
                    ┌─────────┴─────────┐
                    ▼                   ▼
                Save Stay          View Source

🔐 Authentication & Security

The application includes:

User registration and login

JWT authentication

Google OAuth authentication

Passport.js

Session management

Rate limiting for authentication routes

CORS configuration

Environment variables for secrets

Sensitive information such as API keys, database credentials, OAuth secrets, and session secrets must never be committed to the repository.

⚙️ Local Setup

1. Clone Repository

git clone https://github.com/Darshitajoshi/PahadiNest.git
cd PahadiNest

2. Frontend

cd frontend
npm install
npm run dev

3. Backend

Open another terminal:

cd backend
npm install
npm start

🔑 Environment Variables

Frontend

Create:

frontend/.env

Example:

VITE_API_URL=http://localhost:5000

Backend

Create:

backend/.env

Example:

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
SESSION_SECRET=your_session_secret
GEMINI_API_KEY=your_gemini_api_key
TAVILY_API_KEY=your_tavily_api_key
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret

Never commit actual secret values.

🚀 Deployment

The project was deployed as a production full-stack application:

Frontend: Vercel

Backend: Render

Database: MongoDB Atlas

Production deployment required configuring:

CORS

Environment variables

Google OAuth callback URLs

API endpoints

React Router production routes

Frontend/backend communication

🐛 Challenges Faced

1. CORS Error

The deployed Vercel frontend initially could not communicate with the Render backend.

Solution: Configured the backend CORS policy to allow the production frontend origin.

2. Google OAuth Deployment

Google authentication required correct production callback and redirect URLs.

Solution: Updated OAuth configuration for the deployed frontend/backend URLs.

3. Environment Variables

The application worked locally but required separate production configuration.

Solution: Added required variables to Vercel and Render without exposing secrets in GitHub.

4. React Router / Vercel 404

Direct access to some frontend routes could return a Vercel NOT_FOUND response.

Solution: Configured the production deployment to correctly serve the React application routes.

5. Gemini API Quota

The Gemini free tier can return 429 RESOURCE_EXHAUSTED after the allowed request quota is reached.

Solution: Tested the AI functionality within the available quota and handled API errors during development.

📚 What I Learned

Through this project, I learned:

Full-stack web development

React and component-based UI development

REST API development with Express.js

MongoDB and Mongoose

Authentication and authorization

Google OAuth

AI API integration

Web search API integration

Environment variable management

CORS configuration

Vercel and Render deployment

Git and GitHub

Debugging production issues

Connecting frontend, backend, database, and external APIs

A major learning was understanding that a project working on localhost can still require significant configuration and debugging before it works correctly in production.

🔮 Future Scope

Possible future improvements include:

Real-time accommodation availability

Online booking

Payment gateway integration

Google Maps integration

Route planning

User reviews and verified ratings

More personalized recommendation models

AI-generated complete travel itineraries

Weather-aware recommendations

Mobile application

🎥 Demo Video

PahadiNest – Project Demonstration

https://youtu.be/WhGsOPdGQGo

📜 Internship Submission

This project was developed as part of:

TBI GEU Summer Internship Program 2026AI-Assisted Full Stack Web Development

Intern: Darshita JoshiIntern ID: TBI-26100444Project: PahadiNestProject Type: Individual Capstone Project

🙏 Thank You

PahadiNest 🏔️

Explore Uttarakhand. Discover better stays. Travel smarter.