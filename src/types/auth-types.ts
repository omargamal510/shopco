import { loginSchema } from "@/app/(auth)/login/login-schema";
import { registerSchema } from "@/app/(auth)/register/register-schema";
import z from "zod";

export interface registerInputDataTypes {
  type: string;
  name: string;
  placeholder: string;
  label: string;
}

export interface LoginState {
  error?: string;
  success?: boolean;
  user?: string;
  type?: string;
}

export type RegisterState = {
  error?: string;
  success?: boolean;
};
export interface InputsInterface {
  name: string | null;
  email: string | null;
  password: string | null;
  rePassword: string | null;
  phone: string | null;
}

export type AuthTokenStore = {
  token: string;
  setToken: (newToken: string) => void;
};

export type LoginForm = z.infer<typeof loginSchema>;
export type RegisterForm = z.infer<typeof registerSchema>;
