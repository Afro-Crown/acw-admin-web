import { Trirong } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import acLogo from "../../../public/logo-login.svg";
import React from "react";
import FirstInputs from "./components/Stages/first-inputs";

const trirong = Trirong({
  subsets: ["latin"],
  weight: "400",
  style: "italic",
});

const Access = () => {
  return (
    <main className="flex min-h-screen w-full items-center justify-center bg-[#FFEAD4]">
      <div className="flex flex-col h-[70%] w-[80%] md:w-2/4 lg:min-w-[25%] lg:w-1/4 bg-white items-center">
        <div className="flex flex-col gap-2 p-8 text-black text-center text-2xl">
          <Image alt="AfroCrow logo" src={acLogo} />
          <h4 className={trirong.className}>Criar conta</h4>
        </div>
        <div className="w-full flex justify-center">
          <FirstInputs />
        </div>
        <div className="w-[80%]">
          <div className="flex flex-col items-center justify-center">
        
            <span className="text-black text-sm text-center pb-8">
              Ao criar uma conta você concorda com nossos{" "}
              <Link href={"google.com"}>
                <span className="text-orange-500 font-semibold">
                  Termos de serviço
                </span>
              </Link>
            </span>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Access;
