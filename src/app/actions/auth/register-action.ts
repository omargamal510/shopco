"use server";

import { RegisterState } from "@/types/auth-types";
import { API_BASE_URL } from "@/utils/api";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function registerAction(
  prevState: RegisterState,
  formData: FormData
): Promise<RegisterState> {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const rePassword = formData.get("rePassword") as string;
  const phone = formData.get("phone") as string;

  try {
    const res: Response = await fetch(`${API_BASE_URL}api/v1/auth/signup`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password, rePassword, phone }),
    });

    if (!res.ok) {
      let message = "Something went wrong";

      try {
        const errorData = await res.json();
        if (errorData.message) {
          message = errorData.message;
          console.log(errorData);
        } else if (errorData.errors) {
          message = Object.values(errorData.errors).join(", ");
        }
      } catch {
        // ignore JSON parse errors
      }

      return { error: message, success: false };
    }

    const data = await res.json();

    (await cookies()).set("token", data.token, {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
      path: "/",
    });

    redirect("/");
  } catch {
    return { error: "Network error, please try again.", success: false };
  }
}
