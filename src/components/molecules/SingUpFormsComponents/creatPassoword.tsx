"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";

import InputField from "@/components/molecules/InputField/inputField";
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

  const router = useRouter();

  const handleSubmitForm = (data: CreatePasswordForm) => {
    console.log(data);
    onSuccess();
    router.push("/in-analising");
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
