import ProgressBar1 from "../components/progress-bar-1";
import ProgressBar2 from "../components/progress-bar-2";
import ProgressBar3 from "../components/progress-bar-3";
import { useState } from "react";


const ProgressBar = () => {
  const [progress, setProgress] = useState<"30" | "70" | "100">("30");

  function RedirectProgress(prog: "30" | "70" | "100") {
    setProgress(prog);
  }

  return (
    <div className="">
      {progress === "30" && <ProgressBar1 RedirectProgress={RedirectProgress} />}
      {progress === "70" && <ProgressBar2 RedirectProgress={RedirectProgress} />}
      {progress === "100" && <ProgressBar3 RedirectProgress={RedirectProgress} />}
    </div>
  );
};

export default ProgressBar;
