import "./config/env.js";
import express from "express";
import cors from "cors";

import path from "path";

import passport from "passport";
import "./config/passport.js";
import authRoutes from "./routes/authRoutes.js"; // We'll create this next
import { protect } from "./middleware/authMiddleware.js";

import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import rateLimiter from "./middleware/rateLimiter.js";

const app = express();
const PORT = process.env.PORT || 5001;
const __dirname = path.resolve();

// middleware
// middleware
if (process.env.NODE_ENV === "production") {
  app.use(
    cors({
      origin: ["https://kaotes.sandeshkharel.com.np"], // Your actual production domain
      credentials: true,
    })
  );
} else {
  app.use(cors());
}
app.use(express.json()); // this middleware will parse JSON bodies: req.body

app.set("trust proxy", 1); // Trust first proxy, to implement IP based rateLimiting

// our simple custom middleware
// app.use((req, res, next) => {
//   console.log(`Req method is ${req.method} & Req URL is ${req.url}`);
//   next();
// });
app.use(passport.initialize());

app.use("/api/auth", authRoutes);
app.use("/api/notes", protect, rateLimiter, notesRoutes);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
  });
}

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log("Server started on PORT:", PORT);
  });
});
