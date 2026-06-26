const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

// Load environment variables
dotenv.config();

// Import Routes
const homestayRoutes = require("./routes/homestayRoutes");

// Create Express App
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Port
const PORT = process.env.PORT || 5000;

// Home Route
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "🚀 Welcome to PahadiNest Backend API",
    version: "1.0.0",
  });
});

// API Routes
app.use("/api/homestays", homestayRoutes);

// 404 Handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route Not Found",
  });
});

// Global Error Handler
app.use((err, req, res, next) => {
  console.error(err.stack);

  res.status(500).json({
    success: false,
    message: "Internal Server Error",
  });
});

// Start Server
app.listen(PORT, () => {
  console.log(`✅ Server is running on http://localhost:${PORT}`);
});