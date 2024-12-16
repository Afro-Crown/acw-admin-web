'use client'
import Image from "next/image";
import Link from "next/link";
import acLogo from "../../../../public/logo-login.svg";
import { Input } from "@/components/inputs/input";
import { Buttons } from "@/components/buttons/button";
import { loginFormSchema, TLoginForm } from "./loginFormSchema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { api } from "@/services/api";
import { useRouter } from "next/navigation";

export const LoginForm = () => {
  const router = useRouter()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TLoginForm>({
    resolver: zodResolver(loginFormSchema),
    mode: "onChange",
  });

  const submit = async (dataForm: TLoginForm) => {
    try {
      const { data } = await api.post("/auth/signin", dataForm);
      localStorage.setItem("ITOKEN", data.access_token);
      router.push("/home");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col h-[70%] w-[80%] md:w-2/4 lg:min-w-[25%] lg:w-1/4 bg-white items-center font-Assistant shadow-2xl">
      <div className="flex flex-col gap-2 pt-8 p-4 text-black text-center text-2xl">
        <Link href={"/"}>
          <Image alt="AfroCrow logo" src={acLogo} />
        </Link>
        <h4 className="font-Trirong">Entrar</h4>
      </div>
      <form onSubmit={handleSubmit(submit)} className="w-[80%]">
        <div className="flex flex-col gap-6 text-black">
          <Input 
            label="E-mail" 
            error={errors.email} 
            {...register("email")} 
          />
          <Input
            label="Senha"
            error={errors.password}
            {...register("password")}
            password={true}
          />
          <div className="flex justify-center">
            <Link href={"/forgot-password"}>
              <span className="text-gradient-secondary text-sm font-semibold">
                Esqueci minha senha
              </span>
            </Link>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center pt-20">
          <Buttons>Entrar</Buttons>
          <span className="text-black text-sm pb-8">
            Ainda não tem uma conta?{" "}
            <Link href={"/register"}>
              <span className="text-gradient-secondary font-semibold">
                Criar conta
              </span>
            </Link>
          </span>
        </div>
      </form>
    </div>
  );
};
