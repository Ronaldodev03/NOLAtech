import express from "express";
import {
  createEvaluation,
  getEmployeeEvaluations,
  getEvaluationById,
  updateEvaluation,
} from "../controllers/evaluation.controller.js";

const router = express.Router();

router.post("/", createEvaluation);
router.get("/employee/:id", getEmployeeEvaluations);
router.get("/:id", getEvaluationById);
router.put("/:id", updateEvaluation);

export default router;
