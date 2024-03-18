"use client";
import { useState } from "react";
import FirstInputs from "./Stages/first-inputs";
import SecondInputs from "./Stages/second-inputs";
import ThirdInputs from "./Stages/third-inputs";
import FourthInputs from "./Stages/fourth-inputs";

const MultistepForm = () => {
  const [steps, setSteps] = useState<"FIRST" | "SECOND" | "THIRD" | "FOURTH">("FIRST");

  function RedirectPage(page: "FIRST" | "SECOND" | "THIRD" | "FOURTH"){
    setSteps(page)
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <div className=" text-black w-full">
        {steps === "FIRST" && <FirstInputs RedirectPage={RedirectPage}/> }
        {steps === "SECOND" && <SecondInputs RedirectPage={RedirectPage} />}
        {steps === "THIRD" && <ThirdInputs RedirectPage={RedirectPage} />}
        {steps === "FOURTH" && <FourthInputs />}
      </div>
    </div>
  );
};

export default MultistepForm;
