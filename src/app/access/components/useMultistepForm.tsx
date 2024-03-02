"use client";
import { useState } from "react";
import FirstInputs from "./Stages/first-inputs";
import SecondInputs from "./Stages/second-inputs";
import ThirdInputs from "./Stages/third-inputs";
import FourthInputs from "./Stages/fourth-inputs";
import Link from "next/link";

const MultistepForm = () => {
  const [steps, setSteps] = useState<"FIRST" | "SECOND" | "THIRD" | "FOURTH">("FIRST");

  return (
    <div className="flex flex-col items-center justify-center">
      <div className=" text-black">
        {steps == "FIRST" && <FirstInputs />}
        {steps == "SECOND" && <SecondInputs />}
        {steps == "THIRD" && <ThirdInputs />}
        {steps == "FOURTH" && <FourthInputs />}
      </div>
      <nav className="w-full font-semibold flex justify-center mt-8">
        <button  onClick={() => setSteps("SECOND")} className="w-2/3 text-white p-4 bg-[#F67F57AA] hover:bg-[#F67F57] font-semibold text-lg rounded-lg mb-8">
          Criar conta
        </button>
        <button  onClick={() => setSteps("THIRD")} className="w-2/3 text-white p-4 bg-[#F67F57AA] hover:bg-[#F67F57] font-semibold text-lg rounded-lg mb-8">
          Avançar
        </button>
        <button  onClick={() => setSteps("FOURTH")} className="w-2/3 text-white p-4 bg-[#F67F57AA] hover:bg-[#F67F57] font-semibold text-lg rounded-lg mb-8">
          Enviar cadastro
        </button>
        <Link href="../../access-verification">
          <button className="w-2/3 text-white p-4 bg-[#F67F57AA] hover:bg-[#F67F57] font-semibold text-lg rounded-lg mb-8">
            Enviar cadastro
          </button>
        </Link>
      </nav>
    </div>
  );
};

export default MultistepForm;
