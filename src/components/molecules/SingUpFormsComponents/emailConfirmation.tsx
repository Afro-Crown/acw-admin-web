"use client";

import { useState, useEffect } from "react";

import Image from "next/image";

import Button from "@atoms/Button/button";

import IconAfroCrown from "../../../../public/logo-login.svg";

interface EmailConfirmationProps {
  email: string;
  onSuccess: () => void;
}

export default function EmailConfirmation({
  email,
  onSuccess
}: EmailConfirmationProps) {
  const [code, setCode] = useState(Array(6).fill(""));
  const [timer, setTimer] = useState(300);
  const [isClickable, setIsClickable] = useState(false);

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
      return () => clearInterval(interval);
    } else {
      setIsClickable(true);
    }
  }, [timer]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const value = e.target.value.toUpperCase();
    if (/^[A-Z0-9]$/.test(value) || value === "") {
      if (index > 0 && code[index - 1] === "") {
        return;
      }

      const newCode = [...code];
      newCode[index] = value;
      setCode(newCode);

      if (value !== "" && index < 5) {
        const nextInput = document.getElementById(`code-input-${index + 1}`);
        if (nextInput) {
          nextInput.focus();
        }
      }
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.key === "Backspace" && index > 0 && code[index] === "") {
      const prevInput = document.getElementById(`code-input-${index - 1}`);
      if (prevInput) {
        prevInput.focus();
      }
    }
  };

  const handleSubmit = () => {
    const verificationCode = code.join("");
    console.log("Verification Code:", verificationCode);
    onSuccess();
  };

  const handleResendCode = () => {
    console.log("Resend code clicked");
    setTimer(300);
    setIsClickable(false);
  };

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  };

  return (
    <div className="flex h-[50rem] flex-col items-center justify-between bg-white px-8 shadow-2xl">
      <div className="flex w-full flex-col items-center gap-10">
        <div className="m-7 flex flex-col items-center gap-10">
          <Image src={IconAfroCrown} alt="Icone Afro Crown" />
        </div>
        <div className="mt-10 flex flex-col items-center pl-8">
          <p className="text-sm">
            Informe o código de validação que enviamos para {email}.
          </p>
        </div>
        <div className="flex flex-col items-start gap-4">
          <p className="text-sm font-semibold">Código de validação</p>
          <div className="flex gap-2">
            {code.map((digit, index) => (
              <input
                key={index}
                id={`code-input-${index}`}
                type="text"
                maxLength={1}
                value={digit}
                onChange={(e) => handleChange(e, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                className="h-10 w-10 rounded bg-input text-center"
              />
            ))}
          </div>
          <p className="mt-3 text-xs">
            Aguarde {formatTime(timer)} minutos. Não recebeu o e-mail?{" "}
            <p
              onClick={isClickable ? handleResendCode : undefined}
              className={`cursor-pointer ${isClickable ? "text-[#FF6734]" : "cursor-not-allowed text-[#FF6734] opacity-60"}`}
            >
              Reenviar código
            </p>
          </p>
        </div>
      </div>
      <div>
        <Button
          type="button"
          onClick={handleSubmit}
          className={`mb-12 ${code.includes("") ? "cursor-not-allowed opacity-60" : ""}`}
          disabled={code.includes("")}
        >
          Validar Código
        </Button>
      </div>
    </div>
  );
}
