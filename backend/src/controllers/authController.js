import jwt from "jsonwebtoken";

export const googleAuthCallback = (req, res) => {
  // Passport attaches the user to req.user
  const user = req.user;

  // Create a token containing the User's ID
  const token = jwt.sign(
    { id: user._id }, 
    process.env.JWT_SECRET, 
    { expiresIn: "7d" }
  );

  // Send the token to the frontend via URL (we'll handle this in React later)
  res.redirect("/auth-success?token=" + token);
};