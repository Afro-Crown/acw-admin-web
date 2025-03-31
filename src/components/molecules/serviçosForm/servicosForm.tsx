import React from "react";

import { Trash2, Pencil } from "lucide-react";
import Image from "next/image";

import ProfileImg from "../../../../public/service-default.jpeg";
import Button from "../../atoms/Button/button";

interface ServicoFormProps {
  name: string;
  text: string;
  hora: string;
  preco: string;
  onDelete: () => void;
  onEdit?: () => void;
}

export default function ServicoForm({
  name,
  text,
  hora,
  preco,
  onDelete,
  onEdit
}: ServicoFormProps) {
  return (
    <div className="flex max-h-[13rem] max-w-[39rem] shadow-lg sm:gap-3 sm:p-4 xl:gap-7 xl:p-8">
      <div className="flex h-full flex-1 flex-col">
        <div>
          <div className="flex sm:gap-1 xl:gap-2">
            <h2 className="font-semibold text-[#2E2E2E] sm:text-lg xl:text-xl">
              {name}{" "}
            </h2>
            <p className="font-light sm:text-lg xl:text-xl">&gt;</p>
          </div>
          <p className="sm:text-xs xl:text-sm">{hora}</p>
          <p className="break-words sm:text-xs xl:text-sm">{text}</p>
        </div>
        <div className="mt-auto grid grid-cols-2 items-end">
          <p className="items-center font-bold text-black sm:text-xs xl:text-sm">
            {preco}
          </p>
          <div className="flex justify-end gap-2">
            <Button
              onClick={onEdit}
              size="sm"
              variant="success"
              className="flex w-auto rounded-sm border-none bg-[#C7C7C7] bg-opacity-20 p-2 font-medium text-[#616161]"
            >
              <Pencil size={16} className="sm:hidden xl:block" /> Editar
            </Button>
            <Button
              onClick={onDelete}
              size="sm"
              variant="success"
              className="flex w-auto rounded-sm border-none bg-[#A21A1A1A] bg-opacity-10 p-2 font-medium text-[#A21A1A]"
            >
              <Trash2 size={16} className="sm:hidden xl:block" /> Excluir
            </Button>
          </div>
        </div>
      </div>
      <Image
        src={ProfileImg}
        alt="ProfileImg"
        className="rounded-md object-cover sm:h-[8rem] sm:w-[8rem]  xl:h-[9rem] xl:w-[11rem]"
      />
    </div>
  );
}
