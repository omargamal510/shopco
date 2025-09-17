"use client";

import { registerInputData } from "@/app/(auth)/register/register-data";
import registerAction from "@/app/actions/auth/register-action";
import Spinner from "@/ui/Spinner";
import { BadgeX } from "lucide-react";
import { useActionState, useState } from "react";

const Register = () => {
  const [data, formAction, isPending] = useActionState(registerAction, {
    error: undefined,
    success: undefined,
  });

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-2xl font-bold mb-6">Register</h2>

      <form action={formAction} className="flex flex-col gap-5 w-80">
        {registerInputData.map(({ type, name, placeholder, label }, index) => (
          <div className="flex flex-col gap-1" key={index}>
            <label>{label}</label>
            <input
              type={type}
              name={name}
              placeholder={placeholder}
              className="border rounded p-2"
              required
            />
          </div>
        ))}

        <button
          type="submit"
          disabled={isPending}
          className="bg-black flex items-center justify-center text-white py-2 rounded hover:bg-gray-800 disabled:opacity-50"
        >
          {isPending ? <Spinner /> : "Register"}
        </button>
      </form>

      {/* Errors */}

      {data.error && (
        <p className="text-red-500 mt-4 flex gap-1 items-center justify-center">
          <BadgeX /> {data.error}
        </p>
      )}
    </div>
  );
};

export default Register;
