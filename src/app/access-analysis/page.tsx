import Image from "next/image";
import analysis from "../../../public/analysis.svg"
import Link from "next/link";

const AnalysisRegistration = () => {
  return ( 
    <div className="w-full h-screen bg-[#A21A1A] flex justify-center items-center">
      <div className="flex flex-col w-1/6">
        <div className="w-full">
          <p className="text-[#FFD6AD] text-lg text-center">
            O cadastro de <b>Dellas & Delles Cabeleireiros</b> está
          </p>
          <Image alt="Registro em análise" src={analysis} />
        </div>
        <div className="w-full flex flex-col gap-2 justify-center items-center">
          <p className="text-[#FFD6AD] text-xs w-1/2 text-center">
            Fique de olho em seu e-mail. Daremos um retorno em breve.
          </p>
          <Link href={"../../access-validation"}>
            <button className="w-[100%] py-1 px-10 rounded-lg border border-[#FFD6AD] bg-transparent text-[#FFD6AD]"> 
              Continuar
            </button>
          </Link>
        </div>
      </div>
    </div>
   );
}
 
export default AnalysisRegistration;