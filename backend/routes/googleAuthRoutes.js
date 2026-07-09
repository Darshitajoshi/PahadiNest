const express = require("express");
const passport = require("passport");

const router = express.Router();

// Start Google Login
router.get(
  "/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
    session: false,
  })
);

// Google Callback
router.get(
  "/google/callback",
  passport.authenticate("google", {
    session: false,
    failureRedirect: "http://localhost:5173/login",
  }),
  (req, res) => {
    const token = req.user.token;

    res.redirect(
      `http://localhost:5173/google-success?token=${token}`
    );
  }
);

module.exports = router;