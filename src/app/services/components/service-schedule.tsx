import serviceImgAdd from "../../../../public/service-schedule-add-img.svg"
import Image from "next/image";

const ServiceSchedule = () => {
  return ( 
    <div>
      <div className="">
        <h4 className="text-md font-semibold mb-3">Adicione fotos</h4>
        <div className="gap-2 flex">
          <Image src={serviceImgAdd} alt=""/>
          <Image src={serviceImgAdd} alt=""/>
          <Image src={serviceImgAdd} alt=""/>
        </div>
        <div className="mt-4">
          <h4 className="text-md font-semibold mb-3 w-[60%]">Selecione os dias da semana em que esse serviço estará disponível</h4>
        </div>
      </div>
    </div>
   );
}
 
export default ServiceSchedule;