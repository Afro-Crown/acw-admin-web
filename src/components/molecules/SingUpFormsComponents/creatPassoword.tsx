"use client";

import { useContext } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { z } from "zod";

import InputField from "@/components/molecules/InputField/inputField";
import useAuth from "@/hooks/useAuth";
import UserContext from "@/store/providers/User/context";
import { CreatePasswordSchema } from "@/validations/createPassword";
import Button from "@atoms/Button/button";

import IconAfroCrown from "../../../../public/logo-login.svg";

interface CreatePasswordFormProps {
  onSuccess: () => void;
}

type CreatePasswordForm = z.infer<typeof CreatePasswordSchema>;

export default function CreatePasswordForm({
  onSuccess
}: CreatePasswordFormProps) {
  const {
    handleSubmit,
    register,
    formState: { errors }
  } = useForm<CreatePasswordForm>({
    mode: "all",
    criteriaMode: "all",
    resolver: zodResolver(CreatePasswordSchema)
  });

  const { signUpDraft } = useContext(UserContext);
  const { createUserWithInternalService } = useAuth();

  const handleSubmitForm = async (data: CreatePasswordForm) => {
    const {
      email = signUpDraft?.email,
      salonName = signUpDraft?.salonName,
      cnpj = signUpDraft?.cnpj,
      name = signUpDraft?.ownerName,
      cep = signUpDraft?.zipCode,
      cidade = signUpDraft?.city,
      rua = signUpDraft?.address,
      bairro = signUpDraft?.neighboard,
      numero = signUpDraft?.number,
      complemento = signUpDraft?.complement,
      phone = signUpDraft?.phone
    } = signUpDraft as {
      email: string;
      salonName: string;
      cnpj: string;
      name: string;
      cep: string;
      cidade: string;
      rua: string;
      bairro: string;
      numero: string;
      complemento: string;
      phone: string;
    };
    await createUserWithInternalService({
      email: email ?? "",
      password: data.password,
      salonName: salonName ?? "",
      address: rua ?? "",
      neighboard: bairro ?? "",
      complement: complemento ?? "",
      number: numero ?? "",
      city: cidade ?? "",
      zipCode: cep ?? "",
      cnpj: cnpj ?? "",
      phone: phone ?? "",
      ownerName: name ?? ""
    });
    console.log(signUpDraft);
    console.log(data);
    onSuccess();
  };

  return (
    <div className="m-16 flex h-[50rem] flex-col justify-between bg-[#FFFFFF] px-16 py-3 shadow-2xl">
      <div className="m-7 flex flex-col items-center gap-10">
        <Image src={IconAfroCrown} alt="Icone Afro Crown" />
      </div>
      <form
        className="mt-20 flex h-full w-full max-w-sm flex-col justify-between gap-2"
        onSubmit={handleSubmit(handleSubmitForm)}
      >
        <div className="flex flex-col gap-6">
          <InputField
            register={register}
            name="password"
            label="Crie uma senha"
            placeholder="afcr2025"
            type="password"
            formErrors={errors}
          />
          <InputField
            register={register}
            name="confirmPassword"
            label="Confirmar senha"
            placeholder="********"
            type="password"
            formErrors={errors}
          />
          <p className="text-[#2E2E2E] ">
            Ao criar uma conta você concorda com os nossos{" "}
            <Link href="/terms" className="font-semibold">
              Termos de serviço
            </Link>
          </p>
        </div>
        <Button type="submit" className="mb-9 mt-4 text-lg font-light">
          Criar conta
        </Button>
      </form>
    </div>
  );
}
