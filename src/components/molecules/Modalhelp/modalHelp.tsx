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
import imagemDownlaod from "../../../../public/download-app-btn.svg";
import { Check } from "lucide-react";

export function ModalHelp({ isOpen, setIsOpen }: ModalProps) {
  const [isSecondModalOpen, setIsSecondModalOpen] = useState(false);
  const [isThirdModalOpen, setIsThirdModalOpen] = useState(false);
  const [typeModal, setTypeModal] = useState<"help" | "problem">("help");

  return (
    <>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="left-auto right-[-18rem] top-[42rem] sm:max-w-[35rem] sm:max-h-[40rem] min-h-[100%]">
          <DialogHeader className="gap-4">
            <p className="text-sm font-light opacity-60">Dúvidas frequentes</p>
            <DialogTitle className="text-2xl">Como cadastrar um salão?</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4">
            <p className="text-sm font-light">Para isso é só baixar a versão abaixo e cadastrar o seu salão. Entraremos em contato para garantir que está tudo certo e em poucos dias seu salão aparecerá para clientes próximos.</p>
            <p className="text-sm font-light">A partir do <b>aplicativo para salões Afro Crown</b>, você receberá e-mails de quando um cliente <b>agendar um horário.</b></p>
            <Image src={imagemDownlaod} alt="Imagem de exemplo" />
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-light">Não encontrou sua dúvida?</h2>
            <div className="flex gap-5">
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