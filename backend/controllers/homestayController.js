const homestays = require("../data/homestays");

// GET /api/homestays
const getAllHomestays = (req, res) => {
  res.status(200).json({
    success: true,
    count: homestays.length,
    data: homestays,
  });
};

// GET /api/homestays/:id
const getHomestayById = (req, res) => {
  const id = parseInt(req.params.id);

  const homestay = homestays.find((item) => item.id === id);

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
};

// POST /api/homestays
const createHomestay = (req, res) => {
  const newHomestay = {
    id: homestays.length + 1,
    ...req.body,
  };

  homestays.push(newHomestay);

  res.status(201).json({
    success: true,
    message: "Homestay created successfully",
    data: newHomestay,
  });
};

// PUT /api/homestays/:id
const updateHomestay = (req, res) => {
  const id = parseInt(req.params.id);

  const index = homestays.findIndex((item) => item.id === id);

  if (index === -1) {
    return res.status(404).json({
      success: false,
      message: "Homestay not found",
    });
  }

  homestays[index] = {
    ...homestays[index],
    ...req.body,
  };

  res.status(200).json({
    success: true,
    message: "Homestay updated successfully",
    data: homestays[index],
  });
};

// DELETE /api/homestays/:id
const deleteHomestay = (req, res) => {
  const id = parseInt(req.params.id);

  const index = homestays.findIndex((item) => item.id === id);

  if (index === -1) {
    return res.status(404).json({
      success: false,
      message: "Homestay not found",
    });
  }

  homestays.splice(index, 1);

  res.status(204).send();
};

// GET /api/homestays/search?q=
const searchHomestays = (req, res) => {
  const query = req.query.q?.toLowerCase() || "";

  const results = homestays.filter(
    (item) =>
      item.name.toLowerCase().includes(query) ||
      item.location.toLowerCase().includes(query)
  );

  res.status(200).json({
    success: true,
    count: results.length,
    data: results,
  });
};

module.exports = {
  getAllHomestays,
  getHomestayById,
  createHomestay,
  updateHomestay,
  deleteHomestay,
  searchHomestays,
};