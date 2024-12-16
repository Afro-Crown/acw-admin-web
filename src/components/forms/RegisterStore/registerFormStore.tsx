'use client'
import Link from "next/link";
import Image from "next/image";
import { Input } from "../../inputs/input";
import acLogo from "../../../../public/logo-login.svg";
import { Buttons } from "../../buttons/button";
import { useForm } from "react-hook-form";
import { TRegisterFormStore, registerFormSchema } from "./registerFormsSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAtom } from "jotai";
import { StoreAtom } from "@/atoms/storeAtom";
import { api } from "@/services/api";
import { UserAtom } from "@/atoms/userAtom";

interface RegisterFormStoreProps {
  onNext: () => void;
}

export const RegisterFormStore = ({onNext}: RegisterFormStoreProps) => {
  const [, setStore] = useAtom(StoreAtom);
  const [, setUser] = useAtom(UserAtom);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<TRegisterFormStore>({
    resolver: zodResolver(registerFormSchema),
    mode: "onChange",
  });

  const submit = async (formData: TRegisterFormStore) => {
    try {
      const { data } = await api.post("/store/create", formData);
      setUser(data.data.owner)
      setStore(formData);
      localStorage.setItem("IUSERID", data.data.ownerId);
      onNext();
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
        <h4 className="font-Trirong">Criar conta</h4>
      </div>
      <form className="w-[80%]" onSubmit={handleSubmit(submit)}>
        <Input
          label="Nome do salão"
          type="text"
          error={errors.salon_name}
          {...register("salon_name")}
        />
        <div className="w-[50%]">
          <Input
            label="CNPJ"
            type="text"
            error={errors.cnpj}
            {...register("cnpj")}
          />
        </div>
        <Input
          label="Nome do(a) proprietário(a)"
          type="text"
          error={errors.owner_name}
          {...register("owner_name")}
        />
        <div className="flex gap-5">
          <Input
            label="CEP"
            placeholder="_____-___"
            type="text"
            error={errors.zip_code}
            {...register("zip_code")}
          />
          <Input
            label="Cidade"
            type="text"
            error={errors.city}
            {...register("city")}
          />
        </div>
        <Input
          label="Rua"
          type="text"
          error={errors.address}
          {...register("address")}
        />
        <Input
          label="Bairro"
          type="text"
          error={errors.neighborhood}
          {...register("neighborhood")}
        />
        <div className="flex gap-5">
          <Input
            label="Número"
            type="text"
            error={errors.address_number}
            {...register("address_number")}
          />
          <Input
            label="Complemento"
            placeholder="Opicional"
            type="text"
            error={errors.complement}
            {...register("complement")}
          />
        </div>
        <Input
          label="E-mail comercial"
          type="email"
          error={errors.email}
          {...register("email")}
        />
        <p className="text-black opacity-75 pb-5">
          Mandaremos todos as notificações para esse e-mail.
        </p>
        <Input
          label="Telefone"
          type="text"
          error={errors.phone}
          {...register("phone")}
        />
        <p className="text-black opacity-75 pb-5">
          Não divulgaremos esse número em seu perfil.
        </p>
        <div>
          <Buttons disabled={!isValid}>Enviar cadastro</Buttons>
        </div>
      </form>
    </div>
  );
};
