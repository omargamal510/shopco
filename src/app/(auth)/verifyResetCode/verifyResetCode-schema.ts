// 🧩 1. Define Zod schema
import { z } from "zod";
export const verifyResetCodeSchema = z.object({
  resetCode: z.string().min(5, "reset code is must be at least 5 characters"),
});
