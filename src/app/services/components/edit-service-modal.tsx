import { CaretRight, X } from "@phosphor-icons/react";
import ServiceTags from "./service-tags";
import ServiceInfos from "./service-infos";
import ServiceSchedule from "./service-schedule";
import WeekDayCards from "./week-days-cards";
import HourCards from "./hours-cards";

interface ModalAcceptProps {
  closeModal: () => void;
}

const EditServiceModal = ({ closeModal }: ModalAcceptProps) => {
  return (
    <div className="fixed w-screen h-screen left-0 top-0 flex justify-center items-center bg-white bg-opacity-10">
      <div className="w-full md:w-[70%] lg:w-[70%] p-4 rounded-md bg-white font-ASSISTANT shadow-md">
        <div className="flex justify-start mb-2">
          <X size={24} onClick={closeModal} className="cursor-pointer" />
        </div>
        <div className=" w-full">
          <h1 className="text-[#2E2E2E] text-xl font-bold mb-2 text-center">
            Editar serviço
          </h1>
        </div>
        <main className="flex justify-between gap-20">
          <div className="w-1/2">
            <div className="flex flex-wrap w-[65%] h-1/7">
              <ServiceTags />
            </div>
            <div className="">
              <ServiceInfos />
            </div>
          </div>
          <div className="w-1/2">
            <ServiceSchedule />
          <div className="mt-2">
            <WeekDayCards />
          </div>
          <div className="mt-8">
            <HourCards />
          </div>
          <div className="flex justify-end mt-24">
            <button className="rounded-3xl bg-[#F67F57] text-sm text-white font-semibold flex items-center justify-center gap-2 p-4">Adicionar serviço<CaretRight size={14} color="#FFFF" weight="bold" /></button>
          </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default EditServiceModal;
