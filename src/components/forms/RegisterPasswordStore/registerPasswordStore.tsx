"use client";
import Image from "next/image";
import Link from "next/link";
import { Input } from "@/components/inputs/input";
import acLogo from "../../../../public/logo-login.svg";
import { Buttons } from "@/components/buttons/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { TRegisterPasswordStore, registerPasswordStoreSchema } from "./registerPasswordStoreSchema";
import { useRouter } from "next/navigation";
import { UserAtom } from "@/atoms/userAtom";
import { useAtom } from "jotai";
import { api } from "@/services/api";


export const RegisterPasswordStore = () => {
  const [user] = useAtom(UserAtom);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<TRegisterPasswordStore>({
    resolver: zodResolver(registerPasswordStoreSchema),
    mode: "onChange",
  });

  const router = useRouter();

  const submit = async (data: any) => {
    const body = {
      id_user: user.id,
      password: data.password,
    }
    try {
      await api.post("/user/save-password", body);
      router.push('/in-analyzing');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col h-[70%] w-[80%] md:w-2/4 lg:min-w-[25%] lg:w-1/4 bg-white items-center shadow-2xl font-Assistant">
      <div className="flex flex-col gap-2 p-8 text-black text-center text-2xl">
        <Link href={"/"}>
          <Image alt="AfroCrow logo" src={acLogo} />
        </Link>
        <h4 className="font-Trirong">Criação da senha</h4>
      </div>
      <form className="w-[80%]" onSubmit={handleSubmit(submit)}>
        <div className="mt-10">
          <Input
            label="Crie uma senha:"
            error={errors.password}
            {...register("password")}
            password={true}
          />
          <Input
            label="Confirme senha:"
            error={errors.confirm}
            {...register("confirm")}
            password={true}
          />
        </div>
        <p className="text-black text-sm mb-10">
          Ao criar uma conta você concorda com nossos{" "}
          <span className="font-bold cursor-pointer">Termos de serviço</span>
        </p>
        <div>
          <Buttons disabled={!isValid}>Criar conta</Buttons>
        </div>
      </form>
    </div>
  );
};
