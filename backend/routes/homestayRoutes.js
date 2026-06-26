const express = require("express");

const {
  getAllHomestays,
  getHomestayById,
  createHomestay,
  updateHomestay,
  deleteHomestay,
  searchHomestays,
} = require("../controllers/homestayController");

const router = express.Router();

// Search Route
router.get("/search", searchHomestays);

// CRUD Routes
router.get("/", getAllHomestays);

router.get("/:id", getHomestayById);

router.post("/", createHomestay);

router.put("/:id", updateHomestay);

router.delete("/:id", deleteHomestay);

module.exports = router;