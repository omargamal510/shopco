"use client";

import { loginAction } from "@/app/actions/login-action";
import { useActionState } from "react";

export default function LoginPage() {
  // initial state

  const [state, formAction, isPending] = useActionState<any, FormData>(
    loginAction as any,
    { error: null, success: false, user: undefined, type: undefined }
  );
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-2xl font-bold mb-6">Login</h2>

      <form action={formAction} className="flex flex-col gap-4 w-80">
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="border rounded p-2"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="border rounded p-2"
          required
        />

        <button
          type="submit"
          disabled={isPending}
          className="bg-black text-white py-2 rounded hover:bg-gray-800 disabled:opacity-50"
        >
          {isPending ? "Logging in..." : "Login"}
        </button>
      </form>

      {/* Errors */}
      {state.error && <p className="text-red-500 mt-4">{state.error}</p>}
    </div>
  );
}
