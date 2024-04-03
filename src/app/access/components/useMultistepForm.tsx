"use client";
import { useState } from "react";
import FirstInputs from "./Stages/first-inputs";
import SecondInputs from "./Stages/second-inputs";
import ThirdInputs from "./Stages/third-inputs";
import FourthInputs from "./Stages/fourth-inputs";
import { Steps } from "@/app/enums/multistep-form.enum";



const MultistepForm = () => {
  const [steps, setSteps] = useState<Steps>(Steps.FIRST);

  function RedirectPage(page: Steps) {
    setSteps(page);
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <div className=" text-black w-full">
        {steps === Steps.FIRST && <FirstInputs RedirectPage={RedirectPage} />}
        {steps === Steps.SECOND && <SecondInputs RedirectPage={RedirectPage} />}
        {steps === Steps.THIRD && <ThirdInputs RedirectPage={RedirectPage} />}
        {steps === Steps.FOURTH && <FourthInputs />}
      </div>
    </div>
  );
};

export default MultistepForm;
