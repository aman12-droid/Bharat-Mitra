import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes.js";
import db from "./config/db.js";
import aiRoutes from "./routes/aiRoutes.js";
import schemeRoutes from "./routes/schemeRoutes.js";
import complaintRoutes from "./routes/complaintRoutes.js";
dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use("/api/ai", aiRoutes);
app.use("/api/schemes", schemeRoutes);
app.use("/api/complaints", complaintRoutes);
app.use("/uploads", express.static("uploads"));
app.use("/api/auth", authRoutes);


// Home Route
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Welcome to Bharat-Mitra API 🚀",
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(` Server running on port ${PORT}`);
});