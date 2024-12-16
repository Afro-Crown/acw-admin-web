'use client'
import { RegisterPasswordStore } from "@/components/forms/RegisterPasswordStore/registerPasswordStore";
import { RegisterFormStore } from "@/components/forms/RegisterStore/registerFormStore";
import { ValidateCodeEmail } from "@/components/forms/ValidateCodeEmail/validateCodeEmail";
import { useState } from "react";


export default function RegisterScreen() {
  const [phase, setPhase] = useState(1);

  const nextPhase = () => {
    setPhase((prev) => prev + 1);
  };

  let Component;
  switch (phase) {
    case 1:
      Component = RegisterFormStore;
      break;
    case 2:
      Component = ValidateCodeEmail;
      break;
    case 3:
      Component = RegisterPasswordStore;
      break;
    default:
      Component = RegisterFormStore;
  }

  return (
    <main className="flex py-8 md:py-20 min-h-screen w-full items-center justify-center bg-[#FFEAD4]">
      <Component onNext={nextPhase} />
    </main>
  );
}
