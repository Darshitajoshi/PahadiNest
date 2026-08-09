const express = require("express");
const passport = require("passport");

const router = express.Router();

const FRONTEND_URL =
  process.env.FRONTEND_URL || "http://localhost:5173";

/* =========================
   Start Google Login
========================= */

router.get(
  "/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
    session: false,
  })
);

/* =========================
   Google Callback
========================= */

router.get(
  "/google/callback",
  passport.authenticate("google", {
    session: false,
    failureRedirect: `${FRONTEND_URL}/login`,
  }),
  (req, res) => {
    try {
      const token = req.user.token;

      res.redirect(
        `${FRONTEND_URL}/google-success?token=${token}`
      );
    } catch (error) {
      console.error("Google Login Redirect Error:", error);

      res.redirect(`${FRONTEND_URL}/login`);
    }
  }
);

module.exports = router;