"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { z } from "zod";

import InputField from "@/components/molecules/InputField/inputField";
import SignInFormSchema from "@/validations/signIn";
import Button from "@atoms/Button/button";
import useAuth from "@hooks/useAuth";

type SignInForm = z.infer<typeof SignInFormSchema>;

export default function LoginPage() {
  const { loginWithGoogleUser, loginWithInternalService, loading } = useAuth();

  const {
    handleSubmit,
    register,
    formState: { errors }
  } = useForm<SignInForm>({
    mode: "all",
    criteriaMode: "all",
    resolver: zodResolver(SignInFormSchema)
  });

  const handleSubmitForm = (data: SignInForm) => {
    loginWithInternalService(data.email, data.password);
  };

  return (
    <main className="flex h-screen w-full flex-col items-center justify-center gap-5">
      <h1 className="text-2xl font-bold">LOGIN PAGE</h1>
      <form
        className="flex w-full max-w-sm flex-col gap-2"
        onSubmit={handleSubmit(handleSubmitForm)}
      >
        <InputField
          register={register}
          name="email"
          placeholder="email@email.com"
          label="E-mail"
          type="email"
          formErrors={errors}
        />
        <InputField
          register={register}
          name="password"
          placeholder="********"
          label="Senha"
          formErrors={errors}
        />
        <Button className="mt-4" loading={loading.loginWithInternalService}>
          ENTRAR
        </Button>
      </form>
      <div className="flex gap-5">
        <Link href="/forgot-password">Esqueci a senha</Link>
        <Link href="/sign-up">Cadastre-se</Link>
      </div>
      <Button onClick={loginWithGoogleUser} loading={loading.loginWithGoogle}>
        ENTRAR COM GOOGLE
      </Button>
    </main>
  );
}
