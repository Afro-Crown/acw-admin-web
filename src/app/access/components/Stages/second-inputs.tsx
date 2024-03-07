import Link from "next/link";
import Image from "next/image";
import progressBar2 from "../../../../../public/access-progress-bar-2.svg";
import { useState } from "react";
import ThirdInputs from "./third-inputs";

const SecondInputs = () => {
  const [steps, setSteps] = useState<"FIRST" | "SECOND" | "THIRD" | "FOURTH">("FIRST");
  return (
    <div className="w-[100%] flex flex-col items-center justify-center">
      <div className="w-[80%]">
      <div className=" text-black">
        {steps === "THIRD" && <ThirdInputs />}
      </div>
        <Image alt="Progress bar" src={progressBar2} />
        <div className="py-8 text-black">
          <div className="flex">
            <span className="text-xs">CEP</span>
            <input
              type="text"
              placeholder="_____-___"
              className="w-full appearance-none dark:focus:border-orange-500 focus:outline-none focus:ring-0 focus:text-black focus:border-orange-500 border-0 border-b-2 h-10 bg-transparent"
            />
            <span className="text-xs">Cidade</span>
            <input
              type="text"
              placeholder=""
              className="w-full appearance-none dark:focus:border-orange-500 focus:outline-none focus:ring-0 focus:text-black focus:border-orange-500 border-0 border-b-2 h-10 bg-transparent"
            />
          </div>
        </div>
        <div className="py-8 text-black">
          <span className="text-xs">Rua</span>
          <input
            type="text"
            placeholder=""
            className="w-full appearance-none dark:focus:border-orange-500 focus:outline-none focus:ring-0 focus:text-gray-500 focus:border-orange-500 border-0 border-b-2 h-10 bg-transparent"
          />
          <div className="py-8 text-black">
            <span className="text-xs">Bairro</span>
            <input
              type="text"
              placeholder=""
              className="w-full appearance-none dark:focus:border-orange-500 focus:outline-none focus:ring-0 focus:text-black focus:border-orange-500 border-0 border-b-2 h-10 bg-transparent"
            />
          </div>
          <div className="flex">
            <span className="text-xs">Número</span>
            <input
              type="text"
              placeholder=""
              className="w-full appearance-none dark:focus:border-orange-500 focus:outline-none focus:ring-0 focus:text-black focus:border-orange-500 border-0 border-b-2 h-10 bg-transparent"
            />
            <span className="text-xs">Complemento</span>
            <input
              type="text"
              placeholder="(Opcional)"
              className="w-full appearance-none dark:focus:border-orange-500 focus:outline-none focus:ring-0 focus:text-black focus:border-orange-500 border-0 border-b-2 h-10 bg-transparent"
            />
          </div>
        </div>
      </div>
        <button  onClick={() => setSteps("THIRD")} className="w-1/2 text-white p-4 bg-[#F67F57AA] hover:bg-[#F67F57] font-semibold text-lg rounded-lg mb-8">
          Teste 2
        </button>
    </div>
  );
};

export default SecondInputs;
