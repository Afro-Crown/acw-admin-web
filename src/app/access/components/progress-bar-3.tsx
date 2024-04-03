import Image from "next/image";
import progressBar3 from "../../../../public/access-progress-bar-3.svg";

type ProgressBarProps = {
  RedirectProgress: (prog: "30" | "70" | "100") => void;
};
const ProgressBar3: React.FC<ProgressBarProps> = ({ RedirectProgress }) => {
  return ( 
    <div className="">
      <Image alt="" src={progressBar3}/>
    </div>
   );
}
 
export default ProgressBar3;