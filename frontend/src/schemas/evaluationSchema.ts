import { z } from "zod";
import { UserSchema } from "./userSchema";

const EvaluatorSchema = UserSchema.omit({ password: true });

const EvaluationSchema = z.object({
  _id: z.string(),
  employee: z.string(),
  evaluator: EvaluatorSchema,
  score: z.number().int().min(1).max(5),
  comments: z.string(),
});

export const ResponseEvaluationSchema = z.object({
  evaluations: z.array(EvaluationSchema),
  averageScore: z.number(),
});
