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
    <div className="px-10 gap-7 shadow-lg flex items-center w-[39rem] h-[13rem]">
      <div className="flex-1">
        <h2 className="font-semibold text-xl">{name}&gt;</h2>
        <p className="text-gray-500 text-sm">{hora}</p>
        <p className="text-gray-600 text-sm break-words">{text}</p>
        <div className="flex justify-between items-end space-y-5">
          <p className="text-black font-bold">{preco}</p>
          <div className="flex gap-2 ">
            <Button
              size="sm"
              variant="success"
              className="flex rounded-sm border-none bg-[#C7C7C7] bg-opacity-20 p-2 text-[#616161]"
            >
              <Pencil size={16} /> Editar
            </Button>
            <Button
              onClick={onDelete}
              size="sm"
              variant="success"
              className="flex rounded-sm border-none bg-[#A21A1A1A] bg-opacity-10 p-2 text-[#A21A1A]"
            >
              <Trash2 size={16} /> Excluir
            </Button>
          </div>
        </div>
      </div>
      <Image src={ProfileImg} alt="ProfileImg" className="w-44 h-36 object-cover object-center" />
    </div>
  );
}
