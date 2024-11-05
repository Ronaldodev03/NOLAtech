import { z } from "zod";

export const UserSchema = z.object({
  _id: z.string(),
  username: z.string(),
  email: z.string(),
  password: z.string(),
  role: z.enum(["Manager", "Admin", "Employee"]),
});
