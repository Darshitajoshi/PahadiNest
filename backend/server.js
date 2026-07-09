const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

// Load .env FIRST
dotenv.config();

const authRoutes = require("./routes/authRoutes");
const rateLimit = require("express-rate-limit");
const session = require("express-session");
const passport = require("./config/passport");
const googleAuthRoutes = require("./routes/googleAuthRoutes");

const connectDB = require("./config/db");
connectDB();

const homestayRoutes = require("./routes/homestayRoutes");

const app = express();

const authLimiter = rateLimit({
  windowMs: 60 * 1000,
  max: 5,
  message: {
    success: false,
    message: "Too many login attempts. Please try again after 1 minute.",
  },
});

app.use(cors());
app.use(express.json());

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
  })
);

app.use(passport.initialize());
app.use(passport.session());

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "🚀 Welcome to PahadiNest Backend API",
    version: "1.0.0",
  });
});

app.use("/api/homestays", homestayRoutes);
app.use("/api/auth", authLimiter, authRoutes);

// Google OAuth Routes
app.use("/auth", googleAuthRoutes);

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route Not Found",
  });
});

app.use((err, req, res, next) => {
  console.error(err.stack);

  res.status(500).json({
    success: false,
    message: "Internal Server Error",
  });
});

app.listen(PORT, () => {
  console.log(`✅ Server is running on http://localhost:${PORT}`);
});