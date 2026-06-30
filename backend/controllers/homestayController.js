const Homestay = require("../models/Homestay");

// GET /api/homestays
const getAllHomestays = async (req, res) => {
  try {
    const homestays = await Homestay.find();

    res.status(200).json({
      success: true,
      count: homestays.length,
      data: homestays,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// GET /api/homestays/:id
const getHomestayById = async (req, res) => {
  try {
    const homestay = await Homestay.findById(req.params.id);

    if (!homestay) {
      return res.status(404).json({
        success: false,
        message: "Homestay not found",
      });
    }

    res.status(200).json({
      success: true,
      data: homestay,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// POST /api/homestays
const createHomestay = async (req, res) => {
  try {
    const homestay = await Homestay.create(req.body);

    res.status(201).json({
      success: true,
      message: "Homestay created successfully",
      data: homestay,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// PUT /api/homestays/:id
const updateHomestay = async (req, res) => {
  try {
    const homestay = await Homestay.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );

    if (!homestay) {
      return res.status(404).json({
        success: false,
        message: "Homestay not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Homestay updated successfully",
      data: homestay,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// DELETE /api/homestays/:id
const deleteHomestay = async (req, res) => {
  try {
    const homestay = await Homestay.findByIdAndDelete(req.params.id);

    if (!homestay) {
      return res.status(404).json({
        success: false,
        message: "Homestay not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Homestay deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// GET /api/homestays/search?q=
const searchHomestays = async (req, res) => {
  try {
    const query = req.query.q || "";

    const homestays = await Homestay.find({
      $or: [
        { name: { $regex: query, $options: "i" } },
        { location: { $regex: query, $options: "i" } },
      ],
    });

    res.status(200).json({
      success: true,
      count: homestays.length,
      data: homestays,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  getAllHomestays,
  getHomestayById,
  createHomestay,
  updateHomestay,
  deleteHomestay,
  searchHomestays,
};