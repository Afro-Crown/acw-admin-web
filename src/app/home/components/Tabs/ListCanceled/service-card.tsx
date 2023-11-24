import { Dot } from "@phosphor-icons/react";

const ServiceCard = () => {
  return ( 
    <>
    <div className="w-full flex flex-col items-center px-1 mb-4 after:border-b after:border-[#C7C7C7] after:mt-5 after:w-[90%] font-ASSISTANT">
      <div className="flex flex-col justify-between w-full md:flex-row">
        <div className="flex flex-row h-[129px] gap-4">
          <div className="flex flex-col items-center justify-around w-10% shadow-md rounded px-4 py-2">
            <span className="text-3xl">19</span>
            <span className="text-lg">Ago</span>
            <div className="border border-gray-300 h-0 w-full"></div>
            <span className="font-light">13:00</span>
          </div>
          <div className="flex flex-col justify-center gap-2">
            <span className="text-xs text-gray-300">Serviço N° 82763</span>
            <span className="font-semibold underline text-sm md:text-base lg:text-base">Barber Republic</span>
            <span className="flex flex-row items-center font-normal text-sm md:text-base lg:text-base">Degradê simples <Dot/>2h45 min</span>
            <span>R$ 125,00</span>
          </div>
        </div>
      </div>
    </div>
    
    </>
   );
}
 
export default ServiceCard;