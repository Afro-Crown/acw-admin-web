import { Trash2, Pencil } from "lucide-react";
import Image from "next/image";

import ChangeUser from "../../../../public/change-user.svg";
import UserIcon from "../../../../public/user-icon.svg";
import Button from "../../atoms/Button/button";

interface ProfessionalProps {
  text: string;
  onDelete: () => void;
  onEdit?: () => void;
}

export default function Professional({
  text,
  onDelete,
  onEdit
}: ProfessionalProps) {
  return (
    <div className="flex flex-col items-center overflow-hidden p-3 md:p-5 shadow-md rounded-md">
      <div className="relative flex h-16 w-16 md:h-20 md:w-20 flex-col content-center items-center">
        <Image src={UserIcon} alt="UserIcon" className="w-full h-full" />
        <p className="text-sm md:text-base mt-1 text-center">{text}</p>
        <Image
          src={ChangeUser}
          alt="ChangeUser"
          className="absolute bottom-16 md:bottom-20 left-5 md:left-7 h-5 w-5 md:h-6 md:w-6 cursor-pointer"
        />
      </div>
      <div className="flex gap-1 md:gap-2 mt-2">
        <Button
          onClick={onEdit}
          size="sm"
          variant="success"
          className="flex rounded-sm border-none bg-[#C7C7C7] bg-opacity-20 p-1 md:p-2 text-[#616161] text-xs md:text-sm"
        >
          <Pencil size={14} className="md:w-4 md:h-4" /> Editar
        </Button>
        <Button
          onClick={onDelete}
          size="sm"
          variant="success"
          className="flex rounded-sm border-none bg-[#A21A1A1A] bg-opacity-10 p-1 md:p-2 text-[#A21A1A] text-xs md:text-sm"
        >
          <Trash2 size={14} className="md:w-4 md:h-4" /> Excluir
        </Button>
      </div>
    </div>
  );
}
