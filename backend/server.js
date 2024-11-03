import express from "express";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import { ENV_VARS } from "./config/envVars.js";

import authRoutes from "./routes/auth.route.js";

import { connectDB } from "./config/db.js";

dotenv.config();
const app = express();

const PORT = ENV_VARS.PORT;

app.use(express.json());
app.use(cookieParser());

// Routes
app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
  console.log("Server started at http://localhost:" + PORT);
  connectDB();
});
