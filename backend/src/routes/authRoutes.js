import express from "express";
import passport from "passport";
import { protect } from "../middleware/authMiddleware.js";
import { googleAuthCallback } from "../controllers/authController.js";


const router = express.Router();

// This starts the Google Login process
router.get("/google", passport.authenticate("google", { scope: ["profile", "email"] }));

// This is where Google redirects the user after they log in
router.get("/google/callback", 
  passport.authenticate("google", { session: false, failureRedirect: "/login" }),
  googleAuthCallback
);

// routes/authRoutes.js
router.get("/me", protect, (req, res) => {
  try {
    if (!req.user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(req.user);
  } catch (error) {
    console.error("Error in /me route:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

export default router;