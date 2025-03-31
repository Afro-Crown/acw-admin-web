import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle
} from "@/components/ui/dialog";

import { ModalProps } from "./types";
import Image from "next/image";
import { useState } from "react";
import imagemDownlaod from "../../../../public/garfo.svg";
import { Check } from "lucide-react";

export function ModalHelp({ isOpen, setIsOpen }: ModalProps) {
  const [isSecondModalOpen, setIsSecondModalOpen] = useState(false);
  const [isThirdModalOpen, setIsThirdModalOpen] = useState(false);
  const [typeModal, setTypeModal] = useState<"help" | "problem">("help");

  return (
    <>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent buttonLeft className="sm:rounded-none left-auto right-[-18rem] top-[35rem] sm:max-w-[35rem] sm:max-h-[40rem] min-h-[104%]">
          <DialogHeader className="flex flex-col max-h-[1px] gap-4 mt-6">
            <p className="text-sm font-light opacity-60">Dúvidas frequentes</p>
            <DialogTitle className="text-2xl">Como cadastrar um salão?</DialogTitle>
          </DialogHeader>
          <div className="grid">
            <p className="text-sm font-light ">Para isso é só baixar a versão abaixo e cadastrar o seu salão. Entraremos em contato para garantir que está tudo certo e em poucos dias seu salão aparecerá para clientes próximos.</p>
            <p className="text-sm font-light ">A partir do <b>aplicativo para salões Afro Crown</b>, você receberá e-mails de quando um cliente <b>agendar um horário.</b></p>
            <div className="flex gap-6">
              <div className="flex items-center justify-center w-[58px] h-[56px] bg-[#A21A1A] rounded-2xl">
                <Image src={imagemDownlaod} alt="Imagem de exemplo" />
              </div>
              <div>
                <p className="text-sm text-[#616161]">Afro Crown ADM</p>
                <p className="text-xs font-light text-[#616161]">versão 1.0</p>
                <p className="text-sm text-[#FF6734]">Baixar app</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-light">Não encontrou sua dúvida?</h2>
            <div className="flex gap-5 mb-[20rem]">
              <button
                className="w-[9rem] h-[3rem] border border-[#FF6734] rounded-3xl text-[#FF6734]"
                onClick={() => {
                  setIsSecondModalOpen(true);
                  setTypeModal("help");
                }}
              >
                Enviar dúvida {">"}
              </button>
              <button
                className="w-[11rem] h-[3rem] border border-[#FF6734] rounded-3xl text-[#FF6734]"
                onClick={() => {
                  setIsSecondModalOpen(true);
                  setTypeModal("problem");
                }}
              >
                Relatar problema {">"}
              </button>
            </div>
          </div>
          <DialogFooter></DialogFooter>
        </DialogContent>
      </Dialog>

      <Dialog open={isSecondModalOpen} onOpenChange={setIsSecondModalOpen}>
        <DialogContent className="sm:max-w-[23rem]">
          <DialogHeader>
            {typeModal === "help" ? (
              <DialogTitle className="text-2xl">Enviar dúvida</DialogTitle>
            ) : (
              <DialogTitle className="text-2xl">Relatar problema</DialogTitle>
            )}
          </DialogHeader>
          {typeModal === "help" ? (
            <div className="flex flex-col gap-4">
              <p className="text-sm text-[#2E2E2E]">Digite qual ação gostaria de realizar.</p>
              <textarea rows={8} className="w-full outline-none border border-[#838282] rounded-md resize-none p-2"></textarea>
            </div>
          ) : (
            <div className="flex flex-col gap-4">
              <p className="text-sm text-[#2E2E2E]">Nos conte o que está acontecendo.</p>
              <textarea rows={8} className="w-full outline-none border border-[#838282] rounded-md resize-none p-2"></textarea>
            </div>
          )}
          <DialogFooter>
            <div className="w-full flex justify-end gap-4">
              <button
                className="w-[9rem] h-[3rem] rounded-3xl text-[white] bg-[#FF6734] justify-end"
                onClick={() => {
                  setIsSecondModalOpen(false);
                  setIsThirdModalOpen(true);
                }}
              >
                Enviar
              </button>
            </div>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Dialog open={isThirdModalOpen} onOpenChange={setIsThirdModalOpen}>
        <DialogContent className="sm:max-w-[23rem]">
          <DialogHeader>
            <DialogTitle className="flex justify-center"><span className="flex justify-center items-center w-[40px] h-[40px] shadow-lg shadow-[#6DB88BA6] rounded-md"><Check strokeWidth={1}></Check></span></DialogTitle>
          </DialogHeader>
          <div className="flex flex-col gap-4 p-2">
            <p className="text-sm text-[#2E2E2E] text-center">Respondemos dentro de 15 dias. Você será avisado pelo <b>e-mail</b> cadastrado quando <b>publicarmos uma resposta</b>.</p>
          </div>
          <DialogFooter>
            <div className="w-full flex justify-end gap-4">
              <button
                className="w-[9rem] h-[3rem] rounded-3xl text-[white] bg-[#6DB88B] justify-end"
                onClick={() => setIsThirdModalOpen(false)}
              >
                Enviado!
              </button>
            </div>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}