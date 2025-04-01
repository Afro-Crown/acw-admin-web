import React, { useState } from "react";

import { Pencil, Trash2 } from "lucide-react";
import Image from "next/image";

import { Dialog, DialogContent } from "@/components/ui/dialog";

import { ModalConfigProps } from "./types";

import ButtonOff from "../../../../public/button-off.svg";

export function ModalConfig({ isOpen, setIsOpen }: ModalConfigProps) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [isValid, setIsValid] = useState(false);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="left-auto right-[-20rem] top-[35rem] min-h-[114%] sm:max-h-[40rem] sm:max-w-[39rem] sm:rounded-none">
        {/* <DialogHeader>
                    <DialogTitle></DialogTitle> 
                </DialogHeader> */}
        <form className="mt-4 flex flex-col gap-4">
          <div>
            <div className="flex gap-2">
              <label
                htmlFor="email"
                className="block text-sm font-bold text-gray-700"
              >
                E-mail do salão
              </label>
              <Pencil
                size={16}
                className="cursor-pointer fill-black stroke-white stroke-1"
              ></Pencil>
            </div>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full focus:outline-none"
              placeholder="raboniribeiro@afrocrown.com.br"
            />
          </div>
          <div className="mt-4">
            <div className="flex gap-2">
              <label
                htmlFor="senha"
                className="block text-sm font-bold text-gray-700"
              >
                Senha
              </label>
              <Pencil
                size={16}
                className="cursor-pointer fill-black stroke-white stroke-1"
              ></Pencil>
            </div>
            <input
              type="password"
              id="senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              className="mt-1 block w-full focus:outline-none"
              placeholder="********"
            />
          </div>
          <div className="mt-4 grid gap-4">
            <p className="text-sm font-light text-[#949494]">Notificações</p>
            <div className="flex justify-between gap-2">
              <div className="flex flex-col gap-2">
                <p className="text-sm font-medium">
                  Confirmar os agendamentos manualmente
                </p>
                <p className="text-xs font-light">
                  Se esta opção estiver inativa os agendamentos são confirmados
                  automaticamente
                </p>
              </div>
              <button type="button" onClick={() => setIsValid(!isValid)}>
                <Image
                  src={ButtonOff}
                  alt="ButtonOff"
                  className="cursor-pointer"
                />
              </button>
            </div>
          </div>
          <button
            type="button"
            className="mt-20 flex h-[2rem] w-[9rem] items-center justify-center gap-2 rounded-sm bg-[#A21A1A1A] text-[#A21A1A]"
            onClick={() => {
              // Lógica para exclusão de conta
            }}
          >
            <Trash2 size={20} strokeWidth={1.25} className="text-[#A21A1A]" />
            Excluir conta
          </button>
        </form>
        {/* <DialogFooter>
                </DialogFooter> */}
      </DialogContent>
    </Dialog>
  );
}
