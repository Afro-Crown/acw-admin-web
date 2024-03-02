import Image from "next/image";
import analysis from "../../../../public/registration-in-analysis.svg"
import Link from "next/link";

const AnalysisRegistration = () => {
  return ( 
    <div className="w-full h-screen bg-[#A21A1A] flex justify-center items-center">
      <div className="flex flex-col w-1/3">
        <div className="w-full">
          <p className="text-[#FFD6AD] text-lg">
            O cadastro de Dellas & Delles Cabeleireiros está
          </p>
          <Image alt="Registro em análise" src={analysis} />
        </div>
        <div className="w-full">
          <p className="text-[#FFD6AD] text-xs">
            Fique de olho em seu e-mail. Daremos um retorno em breve.
          </p>
          <Link href={"../../access-validation/page.tsx"}>
            <button className="w-full rounded-lg border border-[#FFD6AD] bg-transparent text-[#FFD6AD]"> 
              Continuar
            </button>
          </Link>
        </div>
      </div>
    </div>
   );
}
 
export default AnalysisRegistration;