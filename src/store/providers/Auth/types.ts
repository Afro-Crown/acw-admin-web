"use client";

import { Dispatch, SetStateAction } from "react";

import { z } from "zod";

import SignUpForm from "@/validations/signUp";

export type SignUpFormData = z.infer<typeof SignUpForm>;

export interface AuthContextType {
  loginWithGoogleUser: () => void;
  logoutUser: () => void;
  setUserUid: Dispatch<SetStateAction<string>>;
  userUid: string;
  createUserWithInternalService: (
    data: SignUpFormData & { password: string }
  ) => Promise<void>;
  loading: Record<string, boolean>;
  loginWithInternalService: (email: string, password: string) => void;
  forgotPassword: (email: string) => void;
  updatePassword: (password: string) => void;
  deleteUser: () => void;
  waitForUserSync: () => Promise<void>;
}
