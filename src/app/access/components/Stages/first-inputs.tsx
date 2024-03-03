import Image from "next/image";
import progressBar1 from "../../../../../public/access-progress-bar-1.svg";
import { useState } from "react";
import SecondInputs from "./second-inputs";

const FirstInputs = () => {
  const [steps, setSteps] = useState<"FIRST" | "SECOND" | "THIRD" | "FOURTH">(
    "FIRST"
  );

  return (
    <div className="w-[100%] flex flex-col items-center justify-center">
      <div className="w-[80%]">
        <div className=" text-black">
          {steps == "SECOND" && <SecondInputs />}
        </div>
        <Image alt="Progress bar" src={progressBar1} />
        <div className="py-8 text-black">
          <span className="text-xs">Nome do salão</span>
          <input
            type="text"
            placeholder=""
            className="w-full appearance-none dark:focus:border-orange-500 focus:outline-none focus:ring-0 focus:text-black focus:border-orange-500 border-0 border-b-2 h-10 bg-transparent"
          />
        </div>
        <div className="py-8 text-black">
          <span className="text-xs">CNPJ</span>
          <input
            type="text"
            placeholder="__.___.___/____-__"
            className="w-full appearance-none dark:focus:border-orange-500 focus:outline-none focus:ring-0 focus:text-gray-500 focus:border-orange-500 border-0 border-b-2 h-10 bg-transparent"
          />
          <div className="py-8 text-black">
            <span className="text-xs">Nome do proprietário</span>
            <input
              type="text"
              placeholder=""
              className="w-full appearance-none dark:focus:border-orange-500 focus:outline-none focus:ring-0 focus:text-black focus:border-orange-500 border-0 border-b-2 h-10 bg-transparent"
            />
          </div>
        </div>
      </div>
      <button
        onClick={() => setSteps("SECOND")}
        className="w-1/2 text-white p-4 bg-[#F67F57AA] hover:bg-[#F67F57] font-semibold text-lg rounded-lg mb-8"
      >
        Teste
      </button>
    </div>
  );
};

export default FirstInputs;
