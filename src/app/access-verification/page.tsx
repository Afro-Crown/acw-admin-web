import Link from "next/link";
import { Trirong } from "next/font/google";
import Image from "next/image";
import acLogo from "../../../public/logo-login.svg";
import React from "react";

const trirong = Trirong({
  subsets: ["latin"],
  weight: "400",
  style: "italic",
});

const AccessVerification = () => {
  return (
    <main className="flex min-h-screen w-full items-center justify-center bg-[#FFEAD4]">
      <div className="flex flex-col h-[70%] w-[80%] md:w-2/4 lg:min-w-[25%] lg:w-1/4 bg-white items-center">
        <div className="flex flex-col gap-2 p-8 text-black text-center text-2xl">
          <Image alt="AfroCrow logo" src={acLogo} />
          <h4 className={trirong.className}>Criar conta</h4>
        </div>
        <div className="w-full flex justify-center">
          <p>
            Informe o email cadastrado para enviarmos o{" "}
            <b>código de verificação</b>
          </p>
          <span className="text-xs">Email</span>
          <input
            type="text"
            placeholder=""
            className="w-full appearance-none dark:focus:border-orange-500 focus:outline-none focus:ring-0 focus:text-black focus:border-orange-500 border-0 border-b-2 h-10 bg-transparent"
          />
        </div>
        <div className="w-[80%]">
          <div className="flex flex-col items-center justify-center">
            <Link href={"../access-verification/components/registration-analysis.tsx"}>
              <button className="w-2/3 text-white p-4 bg-[#F67F57AA] hover:bg-[#F67F57] font-semibold text-lg rounded-lg mb-8">
                Enviar cadastro
              </button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AccessVerification;
