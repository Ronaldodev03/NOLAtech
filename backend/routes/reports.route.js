import express from "express";
import { generateEmployeeReport } from "../controllers/reports.controller.js";
import { protectRoute, authorize } from "../middlewares/auth.middleware.js";
const router = express.Router();

router.get(
  "/employee/:id",
  protectRoute,
  authorize("Admin"),
  generateEmployeeReport
);

export default router;
