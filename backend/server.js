const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

// Load environment variables FIRST
dotenv.config();

console.log(
  "Gemini Key Loaded:",
  process.env.GEMINI_API_KEY ? "YES" : "NO"
);

const rateLimit = require("express-rate-limit");
const session = require("express-session");
const passport = require("./config/passport");
const connectDB = require("./config/db");

// Connect MongoDB
connectDB();

// Routes
const authRoutes = require("./routes/authRoutes");
const googleAuthRoutes = require("./routes/googleAuthRoutes");
const homestayRoutes = require("./routes/homestayRoutes");
const aiRoutes = require("./routes/aiRoutes");

const app = express();

/* =========================
   CORS
========================= */

const allowedOrigins = [
  "http://localhost:5173",
  "https://pahadi-nest-mh5k.vercel.app",
];

app.use(
  cors({
    origin: function (origin, callback) {
      // Allow requests without an origin
      // such as Postman or server-to-server requests
      if (!origin) {
        return callback(null, true);
      }

      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      }

      return callback(
        new Error("Not allowed by CORS")
      );
    },
    credentials: true,
  })
);

/* =========================
   Middleware
========================= */

app.use(express.json());

/* =========================
   Session
========================= */

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: process.env.NODE_ENV === "production",
      httpOnly: true,
      sameSite: process.env.NODE_ENV === "production"
        ? "none"
        : "lax",
    },
  })
);

/* =========================
   Passport
========================= */

app.use(passport.initialize());
app.use(passport.session());

/* =========================
   Rate Limiter
========================= */

const authLimiter = rateLimit({
  windowMs: 60 * 1000,
  max: 5,
  message: {
    success: false,
    message:
      "Too many login attempts. Please try again after 1 minute.",
  },
});

/* =========================
   Health Check
========================= */

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "🚀 Welcome to PahadiNest Backend API",
    version: "1.0.0",
  });
});

/* =========================
   Routes
========================= */

app.use("/api/homestays", homestayRoutes);

app.use(
  "/api/auth",
  authLimiter,
  authRoutes
);

app.use(
  "/auth",
  googleAuthRoutes
);

app.use(
  "/api/ai",
  aiRoutes
);

/* =========================
   404 Route
========================= */

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route Not Found",
  });
});

/* =========================
   Global Error Handler
========================= */

app.use((err, req, res, next) => {
  console.error(err.stack);

  res.status(500).json({
    success: false,
    message: "Internal Server Error",
  });
});

/* =========================
   Start Server
========================= */

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(
    `✅ Server is running on port ${PORT}`
  );
});