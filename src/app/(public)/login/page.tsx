"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { z } from "zod";

import InputField from "@/components/molecules/InputField/inputField";
import SignInFormSchema from "@/validations/signIn";
import Button from "@atoms/Button/button";
import useAuth from "@hooks/useAuth";

import IconAfroCrown from "../../../../public/logo-login.svg";

type SignInForm = z.infer<typeof SignInFormSchema>;

export default function LoginPage() {
  const { loginWithInternalService, loading } = useAuth();

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
    <main className="flex h-screen w-full flex-col items-center justify-center gap-5 bg-[#FFF5EA]">
      <div className="flex h-[50rem] flex-col gap-5 bg-[#FFFFFF] p-14 shadow-2xl">
        <div className=" flex flex-col items-center gap-10">
          <Image src={IconAfroCrown} alt="Icone Afro Crown" />
          <h1 className="text-2xl font-medium italic">Entrar</h1>
        </div>
        <form
          className="flex h-full w-full max-w-sm flex-col justify-between gap-2"
          onSubmit={handleSubmit(handleSubmitForm)}
        >
          <div className="flex flex-col gap-10">
            <InputField
              register={register}
              name="email"
              label="E-mail"
              placeholder="afrocrown@ltda.com"
              type="email"
              formErrors={errors}
            />
            <div className="flex flex-col gap-3">
              <InputField
                register={register}
                name="password"
                label="Senha"
                placeholder="********"
                type="password"
                formErrors={errors}
              />
              <Link
                href="/forgot-password"
                className="flex justify-center text-sm font-medium text-[#FF6734]"
              >
                Esqueci minha senha
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <Button
              className="mt-4 text-lg font-normal"
              loading={loading.loginWithInternalService}
            >
              Entrar
            </Button>
            <div className="flex justify-center gap-1 text-sm">
              <p>Ainda não tem uma conta?</p>
              <Link href="/sign-up" className="font-medium text-[#FF6734]">
                Criar conta
              </Link>
            </div>
          </div>
        </form>
      </div>
    </main>
  );
}
