"use server";

import { API_BASE_URL } from "@/utils/api";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function loginAction(prevState: any, formData: FormData) {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  const res = await fetch(`${API_BASE_URL}api/v1/auth/signin`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });

  if (!res.ok) {
    return { error: "Invalid email or password" };
  }

  const data = await res.json();

  // ✅ Store token securely in cookies
  (
    await // ✅ Store token securely in cookies
    cookies()
  ).set("token", data.token, {
    httpOnly: true,
    secure: true,
    sameSite: "strict",
    path: "/",
  });

  // ✅ Redirect to dashboard
  redirect("/");
}
