const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const BACKEND_URL =
  process.env.BACKEND_URL || "http://localhost:5000";

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,

      callbackURL:
        process.env.GOOGLE_CALLBACK_URL ||
        `${BACKEND_URL}/auth/google/callback`,
    },

    async (accessToken, refreshToken, profile, done) => {
      try {
        const email = profile.emails?.[0]?.value;

        if (!email) {
          return done(
            new Error("Google account email not available"),
            null
          );
        }

        let user = await User.findOne({
          email,
        });

        if (!user) {
          user = await User.create({
            name: profile.displayName,
            email: email,
            googleId: profile.id,
            picture: profile.photos?.[0]?.value || "",
          });
        } else if (!user.googleId) {
          user.googleId = profile.id;

          if (!user.picture && profile.photos?.[0]?.value) {
            user.picture = profile.photos[0].value;
          }

          await user.save();
        }

        const token = jwt.sign(
          {
            id: user._id,
          },
          process.env.JWT_SECRET,
          {
            expiresIn: "7d",
          }
        );

        done(null, {
          user,
          token,
        });
      } catch (error) {
        console.error("Google Strategy Error:", error);

        done(error, null);
      }
    }
  )
);

/* =========================
   Passport Serialization
========================= */

passport.serializeUser((data, done) => {
  done(null, data);
});

passport.deserializeUser((data, done) => {
  done(null, data);
});

module.exports = passport;