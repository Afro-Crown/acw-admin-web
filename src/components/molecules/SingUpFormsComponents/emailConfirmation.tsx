"use client";

import { useState, useEffect } from "react";
import Button from "@atoms/Button/button";
import Image from "next/image";
import IconAfroCrown from "../../../../public/logo-login.svg";

interface EmailConfirmationProps {
  email: string;
  onSuccess: () => void;
}

export default function EmailConfirmation({ email, onSuccess }: EmailConfirmationProps) {
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

const handleChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
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

const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
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
  return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
};

  return (
      <div className="flex h-screen w-1/4 flex-col justify-between bg-[#FFFFFF] shadow-2xl my-16 px-16 py-3">
        <div className="flex flex-col items-center gap-10 m-7">
          <Image src={IconAfroCrown} alt="Icone Afro Crown" />
        </div>
        <div className="flex flex-col items-center gap-10">
          <div className="flex flex-col items-center pl-8">
            <p className="text-sm">Informe o código de validação que enviamos para {email}.</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <p className="text-sm font-semibold self-start pl-8">Código de validação</p>
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
                  className="w-10 h-10 text-center rounded bg-input"
                />
              ))}
            </div>
            <p className="text-xs mt-6 -mb-1 pl-8">
              Aguarde {formatTime(timer)} minutos. Não recebeu o e-mail?{" "}
              <span
                onClick={isClickable ? handleResendCode : undefined}
                className={`cursor-pointer ${isClickable ? 'text-[#FF6734]' : 'text-[#FF6734] opacity-60 cursor-not-allowed'}`}
              >
                Reenviar código
              </span>
            </p>
          </div>
        </div>
        <div>
          <Button
          type="button"
          onClick={handleSubmit}
          className={`mb-12 ${code.includes("") ? "opacity-60 cursor-not-allowed" : ""}`}
          disabled={code.includes("")}
          >
          Validar Código
          </Button>
        </div>
      </div>
  );
}