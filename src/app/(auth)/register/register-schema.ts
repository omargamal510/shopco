// 🧩 1. Define Zod schema
import { z } from "zod";
export const registerSchema = z
  .object({
    name: z.string().min(3, "Name must be at least 3 characters"),
    email: z.string().email("Invalid email address"),
    password: z
      .string()
      .min(6, "Password must be at least 6 characters")
      .regex(/[A-Z]/, "Password must contain at least one uppercase letter"),
    rePassword: z.string(),
    phone: z
      .string()
      .min(10, "Phone number must be at least 10 digits")
      .regex(/^\d+$/, "Phone number must contain only numbers"),
  })
  .refine((data) => data.password === data.rePassword, {
    message: "Passwords do not match",
    path: ["rePassword"],
  });
