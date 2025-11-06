// 🧩 1. Define Zod schema
import { z } from "zod";
export const forgotPasswordSchema = z.object({
  email: z.string().email("Invalid email address"),
});
