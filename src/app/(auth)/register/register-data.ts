import { registerInputDataTypes } from "@/types/auth-types";

export const registerInputData: registerInputDataTypes[] = [
  {
    type: "name",
    name: "name",
    placeholder: "John Doe",
    label: "Name",
  },

  {
    type: "email",
    name: "email",
    placeholder: "example@gmail.com",
    label: "Email",
  },

  {
    type: "password",
    name: "password",
    placeholder: "Enter your password",
    label: "Password",
  },

  {
    type: "password",
    name: "rePassword",
    placeholder: "Confirm your password",
    label: "Confirm Password",
  },

  {
    type: "tel",
    name: "phone",
    placeholder: "Enter your phone number",
    label: "Phone number",
  },
];
