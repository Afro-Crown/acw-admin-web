import { X } from "@phosphor-icons/react";

interface ModalCancelProps {
    closeModal: () => void;
}

export function ModalCancel({closeModal}: ModalCancelProps) {
    return (
        <div className="fixed w-screen h-screen left-0 top-0 flex justify-center items-center bg-white bg-opacity-10">
            <div className="w-[90%] md:w-[345px] p-4 rounded-md bg-white font-ASSISTANT shadow-md">
            <div className="flex justify-end mb-2">
                <X size={24} onClick={closeModal} className="cursor-pointer"/>
            </div>
            <p className="text-[#2E2E2E] text-base font-normal mb-12 text-center">
                Tem certeza que deseja cancelar o agendamento do dia <b>22 de abril</b> às <b>16:00</b>?
            </p>
            <button className="bg-[#810000] rounded-lg text-white w-full p-3">
                Cancelar agendamento
            </button>
            </div>
        </div>
    )
}