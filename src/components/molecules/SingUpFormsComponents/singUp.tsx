"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import SignUpFormSchema from "@/validations/signUp";
import Button from "@atoms/Button/button";
import InputField from "@/components/molecules/InputField/inputField";
import Image from "next/image";
import IconAfroCrown from "../../../../public/logo-login.svg";

type SignUpForm = z.infer<typeof SignUpFormSchema>;

interface SignUpFormProps {
  onSuccess: (email: string) => void;
}

export default function SignUpForm({ onSuccess }: SignUpFormProps) {
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
  onSuccess(data.email);
  console.log(data);
};

  return (
      <div className="flex flex-col bg-[#FFFFFF] shadow-2xl m-16">
        <div className="flex flex-col items-center gap-2 m-7">
          <Image src={IconAfroCrown} alt="Icone Afro Crown" />
          <h1 className="text-2xl font-medium italic">Cria conta</h1>
        </div>
        <form
          className="flex flex-col gap-2 w-[400px]"
          onSubmit={handleSubmit(handleSubmitForm)}
        >
          <div className="mx-8 my-16 flex flex-col gap-6">
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
          <div className="flex justify-center mb-12">
            <Button type="submit">Enviar Cadastro</Button>
          </div>
        </form>
      </div>
  );
}