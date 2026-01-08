import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI!;

if (!MONGODB_URI) {
  throw new Error("❌ MONGODB_URI is not defined");
}

export const connectDB = async () => {
  if (mongoose.connection.readyState === 1) {
    console.log("MongoDB connected");
    return;
  }
  if (mongoose.connection.readyState === 2) {
    console.log("MongoDB connecting");
    return;
  }
  await mongoose.connect(MONGODB_URI);
};
