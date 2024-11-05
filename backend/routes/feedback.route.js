import express from "express";
import { createFeedback } from "../controllers/feedback.controller.js";
import { authorize, protectRoute } from "../middlewares/auth.middleware.js";
const router = express.Router();

router.post("/", protectRoute, authorize("Employeee"), createFeedback);

export default router;
