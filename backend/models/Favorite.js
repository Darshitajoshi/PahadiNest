const mongoose = require("mongoose");

const favoriteSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    homestay: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Homestay",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Favorite", favoriteSchema);