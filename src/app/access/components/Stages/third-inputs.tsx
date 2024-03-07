import Image from "next/image";
import progressBar3 from "../../../../../public/access-progress-bar-3.svg";
import Link from "next/link";
import { useState } from "react";
import FourthInputs from "./fourth-inputs";

const ThirdInputs = () => {
  const [steps, setSteps] = useState<"FIRST" | "SECOND" | "THIRD" | "FOURTH">(
    "FIRST"
  );
  return (
    <div className="w-[100%] flex flex-col items-center justify-center">
      <div className="w-[80%]">
        <div className=" text-black">
          {steps === "FOURTH" && <FourthInputs />}
        </div>
        <Image alt="Progress bar" src={progressBar3} />
        <div className="py-8 text-black">
          <span className="text-xs">E-mail comercial</span>
          <input
            type="text"
            placeholder=""
            className="w-full appearance-none dark:focus:border-orange-500 focus:outline-none focus:ring-0 focus:text-black focus:border-orange-500 border-0 border-b-2 h-10 bg-transparent"
          />
          <span className="text-slate-500 text-[10px]">
            Mandaremos todos as notificações para esse e-mail.
          </span>
        </div>

        <div className="py-8 text-black">
          <span className="text-xs">Telefone</span>
          <input
            type="text"
            placeholder="(__) _ ____-____"
            className="w-full appearance-none dark:focus:border-orange-500 focus:outline-none focus:ring-0 focus:text-black focus:border-orange-500 border-0 border-b-2 h-10 bg-transparent"
          />
          <span className="text-slate-500 text-[10px]">
            Não divulgaremos esse número em seu perfil.
          </span>
        </div>
      </div>
      <button  onClick={() => setSteps("FOURTH")} className="w-1/2 text-white p-4 bg-[#F67F57AA] hover:bg-[#F67F57] font-semibold text-lg rounded-lg mb-8">
          Teste 3
        </button>
    </div>
  );
};

export default ThirdInputs;
