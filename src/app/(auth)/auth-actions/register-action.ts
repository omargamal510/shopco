"use server";

import { InputsInterface, RegisterState } from "@/types/auth-types";
import { API_BASE_URL } from "@/utils/api";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

async function registerRequest(bodyData: InputsInterface): Promise<Response> {
  return fetch(`${API_BASE_URL}api/v1/auth/signup`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(bodyData),
  });
}

async function parseRegisterError(res: Response) {
  const fallbackMessage = "Something went wrong , try again later";
  const text = await res.json();
  try {
    const data = JSON.parse(text);
    return data.message || fallbackMessage;
  } catch {
    return fallbackMessage;
  }
}

const saveToken = async (tokenValue: string) => {
  const cookieStore = await cookies();
  cookieStore.set({
    name: "token",
    value: tokenValue,
    httpOnly: true,
    secure: true,
    sameSite: "strict",
    path: "/",
  });
};

const goHome = () => redirect("/");

export default async function registerAction(
  prevState: RegisterState,
  formData: FormData
): Promise<RegisterState | void | string> {
  const bodyData: InputsInterface = {
    name: formData.get("name") as string,
    email: formData.get("email") as string,
    password: formData.get("password") as string,
    rePassword: formData.get("rePassword") as string,
    phone: formData.get("phone") as string,
  };

  try {
    const res = await registerRequest(bodyData);
    if (!res.ok) {
      const errorMessage = await parseRegisterError(res);
      return { error: errorMessage, success: false };
    }

    const data = await res.json();
    saveToken(data.token);
    goHome();
  } catch {
    return { error: "Network error, please try again.", success: false };
  }
}

// SRP first of all
