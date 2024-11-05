import express from "express";
import {
  createEvaluation,
  getEmployeeEvaluations,
  getEvaluationById,
  updateEvaluation,
} from "../controllers/evaluation.controller.js";

import { authorize, protectRoute } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.post("/", protectRoute, authorize("Admin", "Manager"), createEvaluation);
router.get("/employee/:id", protectRoute, getEmployeeEvaluations);
router.get("/:id", protectRoute, getEvaluationById);
router.put("/:id", protectRoute, authorize("Admin"), updateEvaluation);

export default router;
