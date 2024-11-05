import { z } from "zod";
import { UserSchema } from "../schemas/userSchema";
import { ResponseEvaluationSchema } from "@/schemas/evaluationSchema";

export type UserType = z.infer<typeof UserSchema>;

export type EvaluationType = z.infer<typeof ResponseEvaluationSchema>;

export type EmployeeWithScore = UserType & { averageScore: number | null };
