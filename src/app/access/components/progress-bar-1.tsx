import Image from "next/image";
import progressBar1 from "../../../../public/access-progress-bar-1.svg";

type ProgressBarProps = {
  RedirectProgress: (prog: "30" | "70" | "100") => void;
};
const ProgressBar1: React.FC<ProgressBarProps> = ({ RedirectProgress }) => {
  return ( 
    <div className="">
      <Image alt="" src={progressBar1}/>
    </div>
   );
}
 
export default ProgressBar1;