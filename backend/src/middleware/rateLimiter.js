import ratelimit from "../config/upstash.js";

const rateLimiter = async (req, res, next) => {
  try {
    // 1. Identify by User ID if logged in, otherwise fallback to IP
    // This ensures that 'User A' doesn't get 'User B' blocked.
    const identifier = req.user?._id?.toString() || req.ip || "global";

    const { success, limit, reset, remaining } = await ratelimit.limit(identifier);

    res.setHeader("X-RateLimit-Limit", limit);
    res.setHeader("X-RateLimit-Remaining", remaining);
    res.setHeader("X-RateLimit-Reset", reset);

    if (!success) {
      // IMPORTANT: Status 429 is what triggers your React 'isRateLimited' state
      return res.status(429).json({
        message: "Too many requests, slow down",
      });
    }

    next();
  } catch (error) {
    console.error("Rate limit error:", error);
    next(); 
  }
};

export default rateLimiter;