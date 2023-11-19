import { Dot } from "@phosphor-icons/react";
import canceledIcon from "../../../../public/canceled-schedule-icon.svg"
import Image from "next/image";

const ServiceCard = () => {
  return ( 
    <section className="flex flex-row justify-between px-1 md:p-2 lg:p-2 w-screen md:w-[700px] lg:w-[985px] max-w-[984px]">
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
      <div className="pt-20">
        <button className="py-2 px-3 bg-[#A21A1A] bg-opacity-10 text-[#A21A1A] rounded-md flex items-center gap-2">
          <Image alt="canceled schedule icon" src={canceledIcon} />
          Cancelar
        </button>
      </div>
    </section>
   );
}
 
export default ServiceCard;