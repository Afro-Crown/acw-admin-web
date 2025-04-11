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
    <div className="flex flex-col items-center overflow-hidden rounded-md p-3 shadow-md md:p-5">
      <div className="relative flex h-16 w-16 flex-col content-center items-center md:h-20 md:w-20">
        <Image src={UserIcon} alt="UserIcon" className="h-full w-full" />
        <p className="mt-1 text-center text-sm md:text-base">{text}</p>
        <Image
          src={ChangeUser}
          alt="ChangeUser"
          className="absolute bottom-16 left-5 h-5 w-5 cursor-pointer md:bottom-20 md:left-7 md:h-6 md:w-6"
        />
      </div>
      <div className="mt-2 flex gap-1 md:gap-2">
        <Button
          onClick={onEdit}
          size="sm"
          variant="success"
          className="flex rounded-sm border-none bg-[#C7C7C7] bg-opacity-20 p-1 text-xs text-[#616161] md:p-2 md:text-sm"
        >
          <Pencil size={14} className="md:h-4 md:w-4" /> Editar
        </Button>
        <Button
          onClick={onDelete}
          size="sm"
          variant="success"
          className="flex rounded-sm border-none bg-[#A21A1A1A] bg-opacity-10 p-1 text-xs text-[#A21A1A] md:p-2 md:text-sm"
        >
          <Trash2 size={14} className="md:h-4 md:w-4" /> Excluir
        </Button>
      </div>
    </div>
  );
}
