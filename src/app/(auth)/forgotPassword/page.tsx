"use client";

import { ForgotPasswordForm, LoginForm } from "@/types/auth-types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

import { forgotPasswordSchema } from "@/app/(auth)/forgotPassword/fogotPassword-schema";
import { useRouter } from "next/navigation";

// 🧩 1. Define Zod schema

// 🧠 Infer the TypeScript type from Zod

const ForgotPassword = () => {
  const [generalError, setGeneralError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  // 🧩 2. Connect Zod schema with React Hook Form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgotPasswordForm>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: "",
    },
  });

  // 🧩 3. Handle form submit
  const onSubmit: SubmitHandler<ForgotPasswordForm> = async (data) => {
    setGeneralError("");
    setSuccessMessage("");
    setLoading(true);

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}api/v1/auth/forgotPasswords`,
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      const userData = await response.json();

      if (!response.ok) {
        throw new Error(userData.message || "Signup failed");
      }

      setSuccessMessage("Code sent check your email! 🎉");
      router.push("/verifyResetCode");
    } catch (err: any) {
      setGeneralError(err.message || "Something went wrong, please try again.");
    } finally {
      setLoading(false);
    }
  };

  // 🧩 4. UI
  return (
    <div className="flex flex-col items-center justify-center h-screen px-4">
      <h2 className="text-2xl font-bold mb-6">Forgot Password</h2>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-5 w-full max-w-sm"
      >
        {/* Name */}
        {/* Email */}
        <div className="flex flex-col">
          <label htmlFor="email" className="mb-1 font-medium text-gray-700">
            Email
          </label>
          <input
            {...register("email")}
            id="email"
            type="email"
            placeholder="example@gmail.com"
            className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        {/* <Link className="underline text-sm" href={"/register"}>
          Create new account
        </Link> */}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className="bg-black flex items-center justify-center text-white py-2 rounded hover:bg-gray-800 disabled:opacity-50"
        >
          {loading ? (
            <span className="flex items-center gap-2">
              <svg
                className="animate-spin h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 100 16v-4l-3 3 3 3v-4a8 8 0 01-8-8z"
                ></path>
              </svg>
              Loading...
            </span>
          ) : (
            "Send Code"
          )}
        </button>
      </form>

      {generalError && (
        <p className="text-red-500 text-center mt-4">{generalError}</p>
      )}

      {successMessage && (
        <p className="text-green-600 text-center mt-4">{successMessage}</p>
      )}
    </div>
  );
};

export default ForgotPassword;
