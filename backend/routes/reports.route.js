import express from "express";
import { generateEmployeeReport } from "../controllers/reports.controller.js";

const router = express.Router();

router.get("/employee/:id", generateEmployeeReport);

export default router;
