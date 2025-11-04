"use client";

import { registerSchema } from "@/app/(auth)/register/register-schema";
import useAuthToken from "@/store/AuthStore";
import { RegisterForm } from "@/types/auth-types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Cookies from "js-cookie";
import { useForm, SubmitHandler } from "react-hook-form";
import Link from "next/link";

const Register = () => {
  const [generalError, setGeneralError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const setToken = useAuthToken((state) => state.setToken);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterForm>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      rePassword: "",
      phone: "",
    },
  });

  const onSubmit: SubmitHandler<RegisterForm> = async (data) => {
    setGeneralError("");
    setSuccessMessage("");
    setLoading(true);

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}api/v1/auth/signup`,
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

      setSuccessMessage("Registration successful! 🎉");
      console.log("User registered:", userData);

      Cookies.set("authToken", userData.token, { expires: 30 });
      setToken(userData.token);
      router.push("/");
    } catch (err: any) {
      setGeneralError(err.message || "Something went wrong, please try again.");
    } finally {
      setLoading(false);
    }
  };

  // 🧩 4. UI
  return (
    <div className="flex flex-col items-center justify-center h-screen px-4">
      <h2 className="text-2xl font-bold mb-6">Register</h2>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-5 w-full max-w-sm"
      >
        {/* Name */}
        <div className="flex flex-col">
          <label htmlFor="name" className="mb-1 font-medium text-gray-700">
            Name
          </label>
          <input
            {...register("name")}
            id="name"
            type="text"
            placeholder="John Doe"
            className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
          )}
        </div>

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

        {/* Password */}
        <div className="flex flex-col">
          <label htmlFor="password" className="mb-1 font-medium text-gray-700">
            Password
          </label>
          <input
            {...register("password")}
            id="password"
            type="password"
            placeholder="Enter your password"
            className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">
              {errors.password.message}
            </p>
          )}
        </div>

        {/* Confirm Password */}
        <div className="flex flex-col">
          <label
            htmlFor="rePassword"
            className="mb-1 font-medium text-gray-700"
          >
            Confirm Password
          </label>
          <input
            {...register("rePassword")}
            id="rePassword"
            type="password"
            placeholder="Confirm your password"
            className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.rePassword && (
            <p className="text-red-500 text-sm mt-1">
              {errors.rePassword.message}
            </p>
          )}
        </div>

        {/* Phone */}
        <div className="flex flex-col">
          <label htmlFor="phone" className="mb-1 font-medium text-gray-700">
            Phone number
          </label>
          <input
            {...register("phone")}
            id="phone"
            type="tel"
            placeholder="Enter your phone number"
            className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.phone && (
            <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
          )}
        </div>

        <Link className="underline text-sm" href={"/login"}>
          Already have account ?
        </Link>

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
            "Register"
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

export default Register;
