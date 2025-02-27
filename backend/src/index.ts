import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes";
import mongoose from "mongoose";

dotenv.config();
import connectDB from "./config/db";
connectDB();

const app = express();
const PORT = process.env.PORT || 5000; // Define PORT first

app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoutes);

mongoose
  .connect(process.env.MONGO_URI as string)
  .then(() => {
    console.log("MongoDB Connected");
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`)); 
  })
  .catch((err) => console.error("Database connection error:", err));
