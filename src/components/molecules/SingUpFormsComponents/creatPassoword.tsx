"use client";

import Link from "next/link";
import { useForm } from "react-hook-form";
import InputField from "@/components/molecules/InputField/inputField";
import Button from "@atoms/Button/button";
import Image from "next/image";
import IconAfroCrown from "../../../../public/logo-login.svg";

interface CreatePasswordFormProps {
  onSuccess: () => void;
}

export default function CreatePasswordForm({ onSuccess }: CreatePasswordFormProps) {
const {
  handleSubmit,
  register,
  formState: { errors }
} = useForm({
  mode: "all",
  criteriaMode: "all"
});

const handleSubmitForm = (data: any) => {
  console.log(data);
  onSuccess();
};

  return (
    <main className="flex h-screen w-full flex-col items-center justify-center gap-5 bg-[#FFF5EA]">
      <div className="flex h-screen w-1/4 flex-col bg-[#FFFFFF] justify-between shadow-2xl m-16 px-16 py-3">
        <div className="flex flex-col items-center gap-10 m-7">
          <Image src={IconAfroCrown} alt="Icone Afro Crown" />
        </div>
        <form
          className="flex w-full max-w-sm flex-col gap-2"
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
          </div>
            <p>Ao criar uma conta você concorda com os nossos <Link href="/terms" className="font-semibold">Termos de serviço</Link></p>
        </form>
          <div className="flex flex-col my-10 gap-4">
            <Button type="submit" className="mt-4 text-lg font-light">
              Criar conta
            </Button>
          </div>
      </div>
    </main>
  );
}