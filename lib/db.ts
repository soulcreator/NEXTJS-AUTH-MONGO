import mongoose  from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI!;

if (!MONGODB_URI) {
    throw new Error("❌ MONGODB_URI is not defined");
}

export const connectDB = async () => {
    // 判断连接状态，避免重复连接数据库
    //todo >=1是否合理
    if (mongoose.connections[0].readyState >= 1) {
        console.log('MongoDB connected');
        return;
    }
    (await mongoose.connect(MONGODB_URI));
}