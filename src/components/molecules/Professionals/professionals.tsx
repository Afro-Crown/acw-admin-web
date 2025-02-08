import UserIcon from "../../../../public/user-icon.svg";
import ChangeUser from "../../../../public/change-user.svg";
import Image from "next/image";
import Button from "../../atoms/Button/button";
import { Trash2, Pencil } from "lucide-react";

interface ProfessionalProps {
  text: string;
  onDelete: () => void;
}

export default function Professional({ text, onDelete }: ProfessionalProps) {
  return (
    <div className="flex flex-col items-center shadow-md p-5 overflow-hidden w-60">
      <div className="relative flex flex-col items-center content-center w-20 h-20">
        <Image src={UserIcon} alt="UserIcon" />
        <p>{text}</p>
        <Image
          src={ChangeUser}
          alt="ChangeUser"
          className="cursor-pointer relative left-7 bottom-20 w-6 h-6"
        />
      </div>
      <div className="flex gap-2">
        <Button
          size="sm"
          variant="success"
          className="flex bg-[#C7C7C7] bg-opacity-20 text-[#616161] p-2 border-none rounded-sm"
        >
          <Pencil size={16} /> Editar
        </Button>
        <Button
          onClick={onDelete}
          size="sm"
          variant="success"
          className="flex bg-[#A21A1A1A] bg-opacity-10 text-[#A21A1A] p-2 border-none rounded-sm"
        >
          <Trash2 size={16} /> Excluir
        </Button>
      </div>
    </div>
  );
}