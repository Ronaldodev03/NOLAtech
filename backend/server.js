import express from "express";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import { ENV_VARS } from "./config/envVars.js";

import authRoutes from "./routes/auth.route.js";
import evaluationRoutes from "./routes/evaluation.route.js";
import feedbackRoutes from "./routes/feedback.route.js";
import reportsRoutes from "./routes/reports.route.js";
import userRoutes from "./routes/user.route.js";
//import { errorHandler } from './middleware/error.middleware.js';

import { connectDB } from "./config/db.js";

dotenv.config();
const app = express();

const PORT = ENV_VARS.PORT;

app.use(express.json());
app.use(cookieParser());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/evaluations", evaluationRoutes);
app.use("/api/feedback", feedbackRoutes);
app.use("/api/reports", reportsRoutes);

// Error handling middleware
//app.use(errorHandler);

app.listen(PORT, () => {
  console.log("Server started at http://localhost:" + PORT);
  connectDB();
});
