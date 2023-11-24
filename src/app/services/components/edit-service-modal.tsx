import { X } from "@phosphor-icons/react";
import ServiceTags from "./service-tags";
import ServiceInfos from "./service-infos";
import ServiceSchedule from "./service-schedule";

interface ModalAcceptProps {
    closeModal: () => void;
}

const EditServiceModal = ({closeModal}: ModalAcceptProps) => {
  return ( 
    <div className="fixed w-screen h-screen left-0 top-0 flex justify-center items-center bg-white bg-opacity-10">
            <div className="w-full md:w-[70%] lg:w-[70%] p-4 rounded-md bg-white font-ASSISTANT shadow-md">
                <div className="flex justify-start mb-2">
                    <X size={24} onClick={closeModal} className="cursor-pointer"/>
                </div>
                <div className="border border-red-500 w-full">
                  <h1 className="text-[#2E2E2E] text-xl font-bold mb-2 text-center">
                    Editar serviço
                  </h1>
                </div>
                <main className="flex justify-between border border-blue-500 gap-20">
                  <div className="w-1/2">
                    <div className="flex w-full gap-3 justify-center">
                      <ServiceTags />
                      <ServiceTags />
                      <ServiceTags />
                      <ServiceTags />
                    </div>
                    <div className="">
                      <ServiceInfos />
                    </div>
                  </div>
                  <div className="w-1/2 border border-yellow-500">
                    <ServiceSchedule />
                  </div>
                </main>
            </div>
        </div>
   );
}
 
export default EditServiceModal;