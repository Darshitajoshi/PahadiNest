# 🏔️ PahadiNest

PahadiNest is an AI-powered homestay discovery platform for Uttarakhand. It helps travelers discover beautiful mountain homestays, explore destinations, and plan memorable trips with a modern full-stack web application.

---

# 🚀 Tech Stack

## Frontend

- React.js
- Vite
- Tailwind CSS
- React Router DOM

## Backend

- Node.js
- Express.js
- Mongoose
- CORS
- dotenv

## Database

- MongoDB Atlas

## AI (Coming Soon)

- Google Gemini API

---

# 🗄️ Database Choice

**Database Used:** MongoDB Atlas

### Why MongoDB Atlas?

- NoSQL document database suitable for flexible homestay data.
- Free cloud hosting through MongoDB Atlas.
- Easy integration with Mongoose.
- Data persists after server restart.
- Scalable for future features like users, bookings, and reviews.

---

# 🏗️ Database Schema

## Homestay

| Field | Type |
|--------|------|
| _id | ObjectId |
| name | String |
| location | String |
| price | Number |
| rating | Number |
| reviews | Number |
| image | String |
| amenities | Array |
| description | String |
| createdAt | Date |
| updatedAt | Date |

> *(Week 5 Schema Diagram will be added here.)*

---

# ⚙️ Backend Setup

```bash
cd backend
npm install
npm start
```

Create a `.env` file:

```env
PORT=5000

MONGO_URI=your_mongodb_connection_string
```

Backend runs on:

```
http://localhost:5000
```

---

# 💻 Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Frontend runs on:

```
http://localhost:5173
```

---

# 📡 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /api/homestays | Get all homestays |
| GET | /api/homestays/:id | Get homestay by ID |
| POST | /api/homestays | Create a new homestay |
| PUT | /api/homestays/:id | Update a homestay |
| DELETE | /api/homestays/:id | Delete a homestay |
| GET | /api/homestays/search?q= | Search homestays |

---

# ✅ Week 5 Features

- MongoDB Atlas Integration
- Mongoose ODM
- REST API
- Full CRUD Operations
- Persistent Database
- Environment Variables
- Responsive Dashboard
- React + Express Full Stack Architecture

---

# 👩‍💻 Developer

**Darshita Joshi**

B.Tech CSE (AI & Data Science)

Graphic Era Hill University