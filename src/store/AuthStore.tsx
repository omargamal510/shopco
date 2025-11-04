import { AuthTokenStore } from "@/types/auth-types";
import { create } from "zustand";
import Cookies from "js-cookie";

const tokenCookie = Cookies.get("authToken") || "";

const useAuthToken = create<AuthTokenStore>((set) => ({
  token: tokenCookie,
  setToken: (newToken) => set({ token: newToken }),
}));

export default useAuthToken;
