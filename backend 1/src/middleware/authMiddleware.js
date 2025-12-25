import jwt from "jsonwebtoken";
import { User } from "../models/User.js"; // Ensure path and .js extension are correct

export const protect = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(" ")[1];

    if (!token) return res.status(401).json({ message: "No token" });

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // KEY FIX: Fetch the actual user document from MongoDB
    const user = await User.findById(decoded.id); 

    if (!user) return res.status(404).json({ message: "User not found" });

    // Attach the DATABASE user, not the DECODED token
    req.user = user; 
    next();
  } catch (error) {
    res.status(401).json({ message: "Invalid token" });
  }
};