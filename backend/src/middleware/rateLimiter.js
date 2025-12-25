import ratelimit from "../config/upstash.js";

const rateLimiter = async (req, res, next) => {
  try {
    // Identify the user by their IP address
    // 'req.ip' works in Express, or use headers if behind a proxy (like Vercel/Render)
    const identifier = req.ip || req.headers["x-forwarded-for"] || "global";

    const { success, limit, reset, remaining } = await ratelimit.limit(identifier);

    // Optional: Send rate limit info in headers (good practice)
    res.setHeader("X-RateLimit-Limit", limit);
    res.setHeader("X-RateLimit-Remaining", remaining);
    res.setHeader("X-RateLimit-Reset", reset);

    if (!success) {
      return res.status(429).json({
        message: "Too many requests, please try again later.",
      });
    }

    next();
  } catch (error) {
    console.error("Rate limit error:", error);
    // Usually, you want to allow the request if the rate limiter fails
    next(); 
  }
};

export default rateLimiter;