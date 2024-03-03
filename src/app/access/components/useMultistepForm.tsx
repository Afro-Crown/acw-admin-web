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
    </div>
  );
};

export default MultistepForm;
