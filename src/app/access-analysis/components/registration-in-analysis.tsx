import Image from "next/image";
import analysis from "../../../../public/registration-in-analysis.svg"

const RegistrationInAnalysis = () => {
  return ( 
    <div className="w-full">
      <Image alt="Cadastro em análise" src={analysis} />
    </div>
   );
}
 
export default RegistrationInAnalysis;