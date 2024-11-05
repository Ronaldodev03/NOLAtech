import axios, { AxiosError } from "axios";
import toast from "react-hot-toast";
import { create } from "zustand";
import { UserType } from "../types/types";

type StoreType = {
  user: UserType | null;
  isSigningUp: boolean;
  isCheckingAuth: boolean;
  isLoggingOut: boolean;
  isLoggingIn: boolean;
  signup: (credentials: Omit<UserType, "_id">) => Promise<void>;
  login: (
    credentials: Omit<UserType, "_id" | "username" | "role">
  ) => Promise<void>;
  logout: () => Promise<void>;
  authCheck: () => Promise<void>;
};

type CustomError = AxiosError<{ message?: string }>;

export const useAuthStore = create<StoreType>((set) => ({
  user: null,
  isSigningUp: false,
  isCheckingAuth: true,
  isLoggingOut: false,
  isLoggingIn: false,
  signup: async (credentials) => {
    set({ isSigningUp: true });
    try {
      const response = await axios.post("/api/auth/register", credentials);
      set({ user: response.data.user, isSigningUp: false });
      toast.success("Account created successfully");
    } catch (error) {
      const err = error as CustomError;
      toast.error(err?.response?.data.message || "Signup failed");
      set({ isSigningUp: false, user: null });
    }
  },
  login: async (credentials) => {
    set({ isLoggingIn: true });
    try {
      const response = await axios.post("/api/auth/login", credentials);
      set({ user: response.data.user, isLoggingIn: false });
      toast.success("Logged in successfully");
    } catch (error) {
      const err = error as CustomError;
      set({ isLoggingIn: false, user: null });
      toast.error(err?.response?.data.message || "Login failed");
    }
  },
  logout: async () => {
    set({ isLoggingOut: true });
    try {
      await axios.post("/api/auth/logout");
      set({ user: null, isLoggingOut: false });
      toast.success("Logged out successfully");
    } catch (error) {
      const err = error as CustomError;
      set({ isLoggingOut: false });
      toast.error(err?.response?.data.message || "Logout failed");
    }
  },
  authCheck: async () => {
    set({ isCheckingAuth: true });
    try {
      const response = await axios.get("/api/auth/authCheck");
      set({ user: response.data.user, isCheckingAuth: false });
    } catch (error) {
      console.log(error);
      set({ isCheckingAuth: false, user: null });
      //toast.error(error.response.data.message || "An error occurred");
    }
  },
}));
