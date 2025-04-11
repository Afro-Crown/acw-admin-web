"use client";

import { useState } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { z } from "zod";

import InputField from "@/components/molecules/InputField/inputField";
import Button from "@atoms/Button/button";
import useAuth from "@hooks/useAuth";

import IconAfroCrown from "../../../../public/logo-login.svg";

const ForgotPasswordSchema = z.object({
  email: z
    .string()
    .min(1, "O e-mail é obrigatório")
    .email("Digite um e-mail válido")
});

type ForgotPasswordForm = z.infer<typeof ForgotPasswordSchema>;

export default function ForgotPasswordPage() {
  const { forgotPassword, loading } = useAuth();
  const [emailSent, setEmailSent] = useState(false);

  const {
    handleSubmit,
    register,
    formState: { errors }
  } = useForm<ForgotPasswordForm>({
    mode: "all",
    criteriaMode: "all",
    resolver: zodResolver(ForgotPasswordSchema)
  });

  const handleSubmitForm = async (data: ForgotPasswordForm) => {
    try {
      forgotPassword(data.email);
      setEmailSent(true);
    } catch (error) {
      console.error("Erro ao enviar e-mail de recuperação:", error);
    }
  };

  return (
    <main className="flex h-screen w-full flex-col items-center justify-center gap-5 bg-[#FFF5EA]">
      <div className="flex h-[50rem] flex-col gap-5 bg-[#FFFFFF] p-14 shadow-2xl">
        <div className="flex flex-col items-center gap-10">
          <Image src={IconAfroCrown} alt="Icone Afro Crown" />
          <h1 className="text-2xl font-medium italic">Recuperar Senha</h1>
        </div>

        {emailSent ? (
          <div className="flex h-full w-full max-w-sm flex-col items-center justify-center gap-6 text-center">
            <div className="rounded-full bg-green-100 p-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 text-green-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h2 className="text-xl font-medium text-gray-800">
              E-mail enviado com sucesso!
            </h2>
            <p className="text-gray-600">
              Enviamos um e-mail com instruções para redefinir sua senha.
              Verifique sua caixa de entrada e a caixa de spam.
            </p>
            <Link href="/login" className="mt-4">
              <Button className="px-[3rem] text-lg font-normal">
                Voltar para o login
              </Button>
            </Link>
          </div>
        ) : (
          <form
            className="flex h-full w-full max-w-sm flex-col justify-between gap-2"
            onSubmit={handleSubmit(handleSubmitForm)}
          >
            <div className="flex flex-col gap-10">
              <div className="text-center text-gray-600">
                <p>
                  Digite seu e-mail cadastrado e enviaremos instruções para
                  redefinir sua senha.
                </p>
              </div>
              <InputField
                register={register}
                name="email"
                label="E-mail"
                placeholder="afrocrown@ltda.com"
                type="email"
                formErrors={errors}
              />
            </div>
            <div className="flex flex-col gap-4">
              <Button
                className="mt-4 px-[3rem] text-lg font-normal"
                loading={loading.forgotPassword}
              >
                Enviar instruções
              </Button>
              <div className="flex justify-center gap-1 text-sm">
                <p>Lembrou sua senha?</p>
                <Link href="/login" className="font-medium text-[#FF6734]">
                  Voltar para o login
                </Link>
              </div>
            </div>
          </form>
        )}
      </div>
    </main>
  );
}
