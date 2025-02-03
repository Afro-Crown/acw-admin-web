"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import InputField from "@/components/molecules/InputField/inputField";
import SignUpFormSchema from "@/validations/signUp";
import Button from "@atoms/Button/button";
import useAuth from "@hooks/useAuth";

type SignUpForm = z.infer<typeof SignUpFormSchema>;

export default function SignUpPage() {
  const { createUserWithInternalService, loading } = useAuth();
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
    createUserWithInternalService(data);
  };

  return (
    <main className="flex h-screen w-full flex-col items-center justify-center gap-5">
      <h1 className="text-2xl font-bold">SIGN UP PAGE</h1>
      <div>
        <form
          className="flex flex-col gap-2"
          onSubmit={handleSubmit(handleSubmitForm)}
        >
          <InputField
            name="name"
            register={register}
            formErrors={errors}
            label="Nome"
          />

          <InputField
            name="email"
            register={register}
            formErrors={errors}
            label="E-mail"
          />

          <InputField
            mask="(99) 99999-9999"
            name="phone"
            register={register}
            formErrors={errors}
            label="Telefone"
          />

          <InputField
            mask="99/99/9999"
            name="dob"
            register={register}
            formErrors={errors}
            label="Data de Nascimento"
          />

          <InputField
            name="password"
            register={register}
            formErrors={errors}
            label="Senha"
            type="password"
            placeholder="******"
          />

          <InputField
            name="confirmPassword"
            register={register}
            formErrors={errors}
            label="Confirmação de Senha"
            type="password"
            placeholder="******"
          />

          <Button
            loading={loading.createUserWithInternalService}
            className="rounded-full bg-orange-500 text-white"
          >
            CADASTRE-SE
          </Button>
        </form>
      </div>
    </main>
  );
}
