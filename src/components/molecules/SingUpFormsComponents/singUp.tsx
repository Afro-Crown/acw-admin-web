"use client";

import { useEffect } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { z } from "zod";

import InputField from "@/components/molecules/InputField/inputField";
import SignUpFormSchema from "@/validations/signUp";
import Button from "@atoms/Button/button";

import IconAfroCrown from "../../../../public/logo-login.svg";

type SignUpForm = z.infer<typeof SignUpFormSchema>;

interface SignUpFormProps {
  onSuccess: (email: string) => void;
}

const fetchAddressByCep = async (cep: string) => {
  const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
  if (!response.ok) {
    throw new Error("Failed to fetch address");
  }
  return response.json();
};

const useCepAutoFill = (setValue: any, register: any) => {
  useEffect(() => {
    register("cep", {
      onChange: async (e: React.ChangeEvent<HTMLInputElement>) => {
        const cep = e.target.value.replace(/\D/g, "");
        if (cep.length === 8) {
          try {
            const address = await fetchAddressByCep(cep);
            setValue("rua", address.logradouro);
            setValue("bairro", address.bairro);
            setValue("cidade", address.localidade);
            setValue("estado", address.uf);
          } catch (error) {
            console.error("Error fetching address:", error);
          }
        }
      }
    });
  }, [register, setValue]);
};

export default function SignUpForm({ onSuccess }: SignUpFormProps) {
  const {
    handleSubmit,
    register,
    setValue,
    formState: { errors }
  } = useForm<SignUpForm>({
    mode: "all",
    criteriaMode: "all",
    resolver: zodResolver(SignUpFormSchema)
  });

  const handleSubmitForm = (data: SignUpForm) => {
    onSuccess(data.email);
    console.log(data);
  };
  useCepAutoFill(setValue, register);

  return (
    <div className="m-16 my-12 flex w-screen flex-col justify-center bg-[#FFFFFF] shadow-2xl sm:w-[450px]">
      <div className="m-7 flex flex-col items-center gap-2">
        <Image src={IconAfroCrown} alt="Icone Afro Crown" />
        <h1 className="text-2xl font-medium italic">Cria conta</h1>
      </div>
      <form
        className="flex w-screen flex-col gap-2 sm:w-[450px]"
        onSubmit={handleSubmit(handleSubmitForm)}
      >
        <div className="m-4 my-16 flex flex-col gap-6 sm:mx-16">
          <InputField
            name="salonName"
            register={register}
            formErrors={errors}
            label="Nome do salão"
          />
          <InputField
            mask="99.999.999/9999-99"
            name="cnpj"
            register={register}
            formErrors={errors}
            label="CNPJ"
          />
          <InputField
            name="name"
            register={register}
            formErrors={errors}
            label="Nome do(a) proprietário(a)"
          />
          <div className="flex justify-between">
            <InputField
              mask="99999-999"
              name="cep"
              register={register}
              formErrors={errors}
              label="CEP"
              className="w-[120px]"
            />
            <InputField
              name="cidade"
              register={register}
              formErrors={errors}
              label="Cidade"
              className="w-[180px]"
            />
          </div>
          <InputField
            name="rua"
            register={register}
            formErrors={errors}
            label="Rua"
          />
          <InputField
            name="bairro"
            register={register}
            formErrors={errors}
            label="Bairro"
          />
          <div className="flex justify-between">
            <InputField
              mask="99999"
              name="numero"
              register={register}
              formErrors={errors}
              label="Número"
              className="w-[120px]"
            />
            <InputField
              name="complemento"
              register={register}
              formErrors={errors}
              label="Complemento"
              className="w-[180px]"
            />
          </div>
          <div className="pb-">
            <InputField
              name="email"
              register={register}
              formErrors={errors}
              label="E-mail"
            />
            <span className="text-sm text-gray-400">
              Mandaremos todas as notificações para esse email.
            </span>
          </div>
          <div>
            <InputField
              mask="(99) 99999-9999"
              name="phone"
              register={register}
              formErrors={errors}
              label="Telefone"
            />
            <span className="text-sm text-gray-400">
              Não divulgaremos esse número em seu perfil.
            </span>
          </div>
        </div>
        <div className="mb-12 flex justify-center">
          <Button type="submit">Enviar Cadastro</Button>
        </div>
      </form>
    </div>
  );
}
