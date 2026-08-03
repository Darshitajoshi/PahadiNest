const express = require("express");
const verifyToken = require("../middleware/authMiddleware");

const {
  getAllHomestays,
  getHomestayById,
  createHomestay,
  updateHomestay,
  deleteHomestay,
  searchHomestays,
} = require("../controllers/homestayController");

const router = express.Router();

// =========================
// Public Routes
// =========================

// Get all homestays (Homepage)
router.get("/", getAllHomestays);

// Search homestays
router.get("/search", searchHomestays);

// Get single homestay
router.get("/:id", getHomestayById);

// =========================
// Protected Routes
// =========================

// Create new homestay
router.post("/", verifyToken, createHomestay);

// Update homestay
router.put("/:id", verifyToken, updateHomestay);

// Delete homestay
router.delete("/:id", verifyToken, deleteHomestay);

module.exports = router;