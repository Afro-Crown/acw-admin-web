import Image from "next/image";
import progressBar2 from "../../../../public/access-progress-bar-2.svg";

type ProgressBarProps = {
  RedirectProgress: (prog: "30" | "70" | "100") => void;
};
const ProgressBar2: React.FC<ProgressBarProps> = ({ RedirectProgress }) => {
  return ( 
    <div className="">
      <Image alt="" src={progressBar2}/>
    </div>
   );
}
 
export default ProgressBar2;