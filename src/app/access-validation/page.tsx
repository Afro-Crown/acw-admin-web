"use client";

import { Trirong } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import cadastroEmAnalise from "../../../public/cadastroemanalise-tag.svg"
import acLogo from "../../../public/logo-login.svg";
import React, { useState } from "react";
import ValidationCode from "./components/validation-code";
import PasswordCreation from "./components/password-creation";

const trirong = Trirong({
  subsets: ["latin"],
  weight: "400",
  style: "italic",
});

const AccessValidation = () => {
  const [stage, setStage] = useState<"CODE" | "PASSWORD">("CODE");


  return (
    <main className="flex min-h-screen w-full items-center justify-center bg-[#FFEAD4]">
      <div className="flex flex-col h-[70%] w-[80%] md:w-2/4 lg:min-w-[25%] lg:w-1/4 bg-white items-center">
        <div className="flex flex-col justify-center items-center w-full gap-2 p-8 text-black text-center text-2xl">
          <Image alt="AfroCrow logo" src={acLogo} />
          <h4 className={trirong.className}>Criar conta</h4>
          <Image alt="Cadastro em análise" src={cadastroEmAnalise} />
        </div>
        <div className="w-full flex justify-center">
        <div className=" text-black">
        {stage == "CODE" && <ValidationCode />}
        {stage == "PASSWORD" && <PasswordCreation />}
      </div>
        </div>
        <div className="w-[80%]">
          <div className="flex flex-col items-center justify-center">
            <button onClick={() => setStage("PASSWORD")} className="w-2/3 text-white p-4 bg-[#F67F57AA] hover:bg-[#F67F57] font-semibold text-lg rounded-lg mb-8">
              Validar código
            </button>
            <button className="w-2/3 text-white p-4 bg-[#F67F57AA] hover:bg-[#F67F57] font-semibold text-lg rounded-lg mb-8">
              Criar conta
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AccessValidation;
