import { X } from "@phosphor-icons/react";

interface ModalAcceptProps {
    closeModal: () => void;
}

export function ModalAccept({closeModal}: ModalAcceptProps) {
    return (
        <div className="fixed w-screen h-screen left-0 top-0 flex justify-center items-center bg-white bg-opacity-10">
            <div className="w-[90%] md:w-[345px] p-4 rounded-md bg-white font-ASSISTANT shadow-md">
                <div className="flex justify-end mb-2">
                    <X size={24} onClick={closeModal} className="cursor-pointer"/>
                </div>
                <p className="text-[#2E2E2E] text-base font-normal mb-2 text-center">
                    Deseja confirmar o agendamento do dia <b>22 de abril</b> às <b>16:00</b>?
                </p>
                <p className="text-[#2E2E2E] text-xs font-normal mb-2 text-center">
                    Avisaremos [Nome do usuário] e você não poderá mais cancelar.
                </p>
                <button className="bg-[#6CAC86] bg-opacity-20 rounded-lg text-[#6CAC86] w-full p-3">
                    Confirmar agendamento
                </button>
            </div>
        </div>
    )
}