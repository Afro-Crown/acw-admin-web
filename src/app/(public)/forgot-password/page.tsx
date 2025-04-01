"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { z } from "zod";

import SignUpFormSchema from "@/validations/signUp";
import Button from "@atoms/Button/button";
import FormErrorLabel from "@atoms/FormError/formError";
import useAuth from "@hooks/useAuth";

type SignUpForm = z.infer<typeof SignUpFormSchema>;

export default function ForgotPassword() {
  const { forgotPassword, loading } = useAuth();

  const {
    handleSubmit,
    register,
    formState: { errors }
  } = useForm<SignUpForm>({
    mode: "all",
    criteriaMode: "all",
    resolver: zodResolver(SignUpFormSchema)
  });

  const handleSubmitForm = (data: SignUpForm) => {
    forgotPassword(data.email);
  };

  return (
    <main className="flex h-screen w-full flex-col items-center justify-center gap-5">
      <h1 className="text-2xl font-bold">FORGOT PASSWORD PAGE</h1>
      <form
        className="flex flex-col gap-2"
        onSubmit={handleSubmit(handleSubmitForm)}
      >
        <input {...register("email")} type="text" placeholder="email" />
        <FormErrorLabel>{String(errors.email?.message)}</FormErrorLabel>
        <Button loading={loading.forgotPassword}>SUBMIT</Button>
      </form>
      <Link href="/login">Login</Link>
    </main>
  );
}
