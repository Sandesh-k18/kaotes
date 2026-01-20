import mongoose from "mongoose";

let isConnected = false; // This stays alive in Vercel's "Warm" containers

export const connectDB = async () => {
  if (isConnected) {
    // console.log("Using existing database connection");
    return;
  }

  try {
    const db = await mongoose.connect(process.env.MONGO_URI, {
      // These settings help manage the pool
      maxPoolSize: 10,
      serverSelectionTimeoutMS: 5000,
    });

    isConnected = db.connections[0].readyState;
    console.log("New MongoDB connection established");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    throw error;
  }
};
