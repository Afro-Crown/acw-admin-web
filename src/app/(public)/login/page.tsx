"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { z } from "zod";

import InputField from "@/components/molecules/InputField/inputField";
import SignInFormSchema from "@/validations/signIn";
import Button from "@atoms/Button/button";
import useAuth from "@hooks/useAuth";
import Image from "next/image";
import IconAfroCrown from "../../../../public/logo-login.svg";

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
    <main className="flex h-screen w-full flex-col items-center justify-center gap-5 bg-[#FFF5EA]">
      <div className="flex h-screen w-1/4 flex-col bg-[#FFFFFF] shadow-2xl m-16 px-16 py-3">
        <div className="flex flex-col items-center gap-10 m-7">
          <Image src={IconAfroCrown} alt="Icone Afro Crown" />
          <h1 className="text-2xl font-medium italic">Entrar</h1>
        </div>
        <form
          className="flex w-full max-w-sm flex-col gap-2"
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
            <InputField
              register={register}
              name="password"
              label="Senha"
              placeholder="********"
              type="password"
              formErrors={errors}
            />
            <Link href="/forgot-password" className="flex justify-center text-sm text-[#FF6734] font-medium">Esqueci minha senha</Link>
          </div>
        </form>
        <div className="flex flex-col mt-40 gap-4">
          <Button className="mt-4 font-normal" loading={loading.loginWithInternalService}>
            ENTRAR
          </Button>
          <div className="flex justify-center gap-1 text-sm">
            <p>Ainda não tem uma conta?</p>
            <Link href="/sign-up" className="text-[#FF6734] font-medium">Criar conta</Link>
          </div>
        </div>
      </div>
    </main>
  );
}