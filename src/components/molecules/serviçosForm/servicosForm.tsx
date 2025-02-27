import React from "react";
import Image from "next/image";
import ProfileImg from "../../../../public/service-default.jpeg";
import Button from "../../atoms/Button/button";
import { Trash2, Pencil } from "lucide-react";

interface ServicoFormProps {
  name: string;
  text: string;
  hora: string;
  preco: string;
  onDelete: () => void;
}

export default function ServicoForm({ name, text, hora, preco, onDelete }: ServicoFormProps) {
  return (
    <div className="xl:p-8 xl:gap-7 sm:p-4 sm:gap-3 shadow-lg flex max-w-[39rem] max-h-[13rem]">
      <div className="flex-1 flex flex-col h-full">
        <div>
          <div className="flex xl:gap-2 sm:gap-1">
            <h2 className="text-[#2E2E2E] font-semibold xl:text-xl sm:text-lg">{name} </h2>
            <p className="xl:text-xl sm:text-lg font-light">&gt;</p>
          </div>
          <p className="xl:text-sm sm:text-xs">{hora}</p>
          <p className="xl:text-sm sm:text-xs break-words">{text}</p>
        </div>
        <div className="grid grid-cols-2 items-end mt-auto">
          <p className="items-center text-black font-bold xl:text-sm sm:text-xs">{preco}</p>
          <div className="flex gap-2 justify-end">
            <Button
              size="sm"
              variant="success"
              className="flex rounded-sm border-none bg-[#C7C7C7] bg-opacity-20 p-2 text-[#616161] w-auto font-medium"
            >
              <Pencil size={16} className="sm:hidden xl:block" /> Editar
            </Button>
            <Button
              onClick={onDelete}
              size="sm"
              variant="success"
              className="flex rounded-sm border-none bg-[#A21A1A1A] bg-opacity-10 p-2 text-[#A21A1A] w-auto font-medium"
            >
              <Trash2 size={16} className="sm:hidden xl:block" /> Excluir
            </Button>
          </div>
        </div>
      </div>
      <Image src={ProfileImg} alt="ProfileImg" className="xl:w-[11rem] sm:w-[8rem] xl:h-[9rem] sm:h-[8rem]  object-cover rounded-md" />
    </div>
   
  );
}
