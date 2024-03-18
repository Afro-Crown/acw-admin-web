import Image from "next/image";
import analysis from "../../../public/registration-in-analysis.svg"
import Link from "next/link";
import RegistrationInAnalysis from "./components/registration-in-analysis";

const AnalysisRegistration = () => {
  return ( 
    <div className="w-full h-screen bg-[#A21A1A] flex justify-center items-center">
      <div className="flex flex-col xs:w-full lg:w-1/6 xl:w-1/6 md:w-1/3 sm:w-1/2">
        <div className="w-full flex flex-col items-center">
          <p className="text-[#FFD6AD] text-lg text-center w-1/2">
            O cadastro de <b className="font-bold">Dellas & Delles Cabeleireiros</b> está
          </p>
          <RegistrationInAnalysis />
        </div>
        <div className="w-full flex flex-col gap-2 justify-center items-center">
          <p className="text-[#FFD6AD] text-xs w-1/2 text-center">
            Fique de olho em seu e-mail. Daremos um retorno em breve.
          </p>
          <Link href={"../../access-validation"}>
            <button className="w-[100%] mt-5 py-1 px-10 rounded-lg border border-[#FFD6AD] bg-transparent text-[#FFD6AD]"> 
              Continuar
            </button>
          </Link>
        </div>
      </div>
    </div>
   );
}
 
export default AnalysisRegistration;