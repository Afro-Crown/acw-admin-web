"use client";
import { Buttons } from "@/components/buttons/button";
import { Input } from "@/components/inputs/input";
import Image from "next/image";
import Link from "next/link";
import acLogo from "../../../../public/logo-login.svg";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { CountResendCodeEmail } from "@/components/countResendCodeEmail/countResendCodeEmail";
import { useAtom } from "jotai";
import { StoreAtom } from "@/atoms/storeAtom";
import { api } from "@/services/api";
import { UserAtom } from "@/atoms/userAtom";

interface ValidateCodeEmailProps {
  onNext: () => void;
}

export const ValidateCodeEmail = ({onNext}: ValidateCodeEmailProps) => {
  const [code, setCode] = useState(Array(6).fill(""));
  const [isFilled, setIsFilled] = useState(false);
  const [store] = useAtom(StoreAtom);
  const [user] = useAtom(UserAtom);

  const {
    register,
    handleSubmit,
  } = useForm({
    mode: "onChange",
  });

  const submit = async (data: any) => {
    const user = localStorage.getItem("IUSERID");
    const body = {
      code: data.code.join(""),
      userId: user,
    }
    try {
      await api.post("/user/check-email/create", body)
      onNext();
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e: { target: { value: any } }, index: any) => {
    const input = e.target.value;
  
    const numericInput = input.replace(/\D/g, "");
    const singleDigit = numericInput.slice(0, 1);
  
    const newCode = [...code];
    newCode[index] = singleDigit;
    setCode(newCode);
  
    const allFilled = newCode.every((value) => value !== '');
    setIsFilled(allFilled);
  
    if (singleDigit.length === 1 && index < newCode.length - 1) {
      const nextInput = document.getElementById(`code[${index + 1}]`);
      if (nextInput) {
        nextInput.focus();
      }
    }
  };

  return (
    <div className="flex flex-col h-[70%] w-[80%] md:w-2/4 lg:min-w-[25%] lg:w-1/4 bg-white items-center shadow-2xl font-Assistant">
      <div className="flex flex-col gap-2 p-8 text-black text-center text-2xl">
        <Link href={"/"}>
          <Image alt="AfroCrow logo" src={acLogo} />
        </Link>
        <h4 className="font-Trirong">Validação</h4>
      </div>
      <form className="w-[80%]" onSubmit={handleSubmit(submit)}>
        <div className="text-black flex justify-center items-center w-full">
          <p className="text-sm text-center my-6">
            Informe o código de validação que enviamos para{" "}
            <span className="font-bold">{store.email}</span>.
          </p>
        </div>
        <p className="text-black text-lg font-bold mb-6">Código de validação:</p>
        <div className="flex gap-3">
          {[...Array(6)].map((_, index) => (
            <div
              key={index}
              className="flex justify-center items-center border border-back"
            >
              <Input
                type="text"
                min={0}
                max={9}
                inputMode="numeric"
                pattern="[0-9]*"
                required
                {...register(`code[${index}]`)}
                onChange={(e) => handleChange(e, index)}
                value={code[index] || ""}
                className="
                  w-10 h-10 
                  bg-gradient-to-b 
                from-gradient-input-code1 
                to-gradient-input-code2 
                  border-none
                  text-center
                  text-3xl
                "
              />
            </div>
          ))}
        </div>
        <CountResendCodeEmail />
        <div>
          <Buttons disabled={!isFilled}>Validar código</Buttons>
        </div>
      </form>
    </div>
  );
};
