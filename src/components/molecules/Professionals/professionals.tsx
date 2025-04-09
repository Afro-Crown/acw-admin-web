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
    <div className="flex flex-col items-center overflow-hidden p-5 shadow-md">
      <div className="relative flex h-20 flex-col content-center items-center">
        <Image src={UserIcon} alt="UserIcon" />
        <p>{text}</p>
        <Image
          src={ChangeUser}
          alt="ChangeUser"
          className="relative bottom-20 left-7 h-6 w-6 cursor-pointer"
        />
      </div>
      <div className="flex gap-2">
        <Button
          onClick={onEdit}
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
  );
}
