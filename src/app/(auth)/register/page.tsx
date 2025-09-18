"use client";

import { registerInputData } from "@/app/(auth)/register/register-data";
import registerAction from "@/app/actions/auth/register-action";
import Spinner from "@/ui/Spinner";
import { BadgeX } from "lucide-react";
import { useActionState, useRef, useState } from "react";

const Register = () => {
  const [data, formAction, isPending] = useActionState(registerAction, {
    error: undefined,
    success: undefined,
  });

  interface ErrorsInterface {
    name: string | null;
    email: string | null;
    password: string | null;
    rePassword: string | null;
    phone: string | null;
  }

  const [errors, setErrors] = useState<ErrorsInterface>({
    name: null,
    email: null,
    password: null,
    rePassword: null,
    phone: null,
  });

  const inputsRef = useRef<(HTMLInputElement | null)[]>([]);

  const handleErrorChange = () => {
    const newErrors: ErrorsInterface = {
      name:
        (inputsRef.current[0]?.value ?? "").length < 3
          ? "Name must be more than 2 characters"
          : null,
      email:
        (inputsRef.current[1]?.value ?? "").length < 3
          ? "Email must be more than 2 characters"
          : null,
      password: errors.password, // keep existing
      rePassword: errors.rePassword, // keep existing
      phone: errors.phone, // keep existing
    };

    setErrors(newErrors);
  };

  const isButtonDisabled: boolean =
    isPending || Object.values(errors).some((error) => error !== null);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-2xl font-bold mb-6">Register</h2>

      <form action={formAction} className="flex flex-col gap-5 w-80">
        {registerInputData.map(({ type, name, placeholder, label }, index) => (
          <div className="flex flex-col gap-1" key={index}>
            <label>{label}</label>
            <input
              ref={(el) => {
                if (el) inputsRef.current[index] = el;
              }}
              type={type}
              name={name}
              placeholder={placeholder}
              onChange={() => handleErrorChange()}
              className="border rounded p-2"
              required
            />

            <p>{errors && errors[name as keyof ErrorsInterface]} </p>
          </div>
        ))}

        <button
          type="submit"
          disabled={isButtonDisabled}
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
