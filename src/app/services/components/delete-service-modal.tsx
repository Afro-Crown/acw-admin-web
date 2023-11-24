import { X } from "@phosphor-icons/react";

interface ModalAcceptProps {
    closeModal: () => void;
}

const DeleteServiceModal = ({closeModal}: ModalAcceptProps) => {
  return ( 
    <div className="fixed w-screen h-screen left-0 top-0 flex justify-center items-center bg-white bg-opacity-10">
            <div className="w-[90%] md:w-[345px] p-4 rounded-md bg-white font-ASSISTANT shadow-md flex flex-col items-center">
                <div className="flex justify-start mb-2 w-full">
                    <X size={24} onClick={closeModal} className="cursor-pointer"/>
                </div>
                <p className="text-[#2E2E2E] text-base font-normal mb-2 text-center">
                Tem certeza que deseja excluir este serviço?
                </p>
                <button className="bg-[#810000] bg-opacity-10 rounded-3xl text-sm text-[#810000] w-[40%] p-3">
                    Excluir serviço
                </button>
            </div>
        </div>
   );
}
 
export default DeleteServiceModal;