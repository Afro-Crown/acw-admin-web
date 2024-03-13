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

  function RedirectPage(page: "CODE" | "PASSWORD"){
    setStage(page)
  }
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
        {stage == "CODE" && <ValidationCode RedirectPage={RedirectPage} />}
        {stage == "PASSWORD" && <PasswordCreation RedirectPage={RedirectPage} />}
      </div>
        </div>
        <div className="w-[80%]">
        </div>
      </div>
    </main>
  );
};

export default AccessValidation;
