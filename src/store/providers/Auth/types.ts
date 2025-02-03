"use client";

import { Dispatch, SetStateAction } from "react";

import { z } from "zod";

import SignUpForm from "@/validations/signUp";

type SignUpFormValidationData = z.infer<typeof SignUpForm>;

export interface AuthContextType {
  loginWithGoogleUser: () => void;
  logoutUser: () => void;
  setUserUid: Dispatch<SetStateAction<string>>;
  userUid: string;
  createUserWithInternalService: ({
    email,
    password,
    name,
    dob,
    phone
  }: Omit<SignUpFormValidationData, "confirmPassword">) => Promise<void>;
  loading: Record<string, boolean>;
  loginWithInternalService: (email: string, password: string) => void;
  forgotPassword: (email: string) => void;
  updatePassword: (password: string) => void;
  deleteUser: () => void;
  waitForUserSync: () => Promise<void>;
}
