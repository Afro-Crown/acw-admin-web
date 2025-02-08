import { Star } from "lucide-react";
import UserIcon from "../../../../public/user-icon.svg";
import Image from "next/image";

interface AvaliationProps {
  nome: string;
  comentario: string[];
  date: string;
  text: string;
}

export default function Avaliation({ nome, comentario, date, text }: AvaliationProps) {
  return (
    <div className="flex flex-col gap-4 p-4 border-none max-w-5xl">
      <div className="flex justify-between">
        <div className="flex items-center gap-2">
          <Image src={UserIcon} alt="UserIcon" className="" />
          <h1 className="text-lg ">{nome}</h1>
        </div>
        <div className="flex flex-col items-end">
          <span className="text-gray-500 text-sm">{date}</span>
          <div className="flex gap-1">
            <Star className="stroke-[#FF8A54] fill-[#FF8A54] w-4 h-4" />
            <Star className="stroke-[#FF8A54] fill-[#FF8A54] w-4 h-4" />
            <Star className="stroke-[#FF8A54] fill-[#FF8A54] w-4 h-4" />
            <Star className="stroke-[#FF8A54] fill-[#FF8A54] w-4 h-4" />
            <Star className="stroke-[#FF8A54] fill-[#FF8A54] w-4 h-4" />
          </div>
        </div>
      </div>
      {text.length > 0 && (
        <div className="flex flex-col gap-2 mt-4">
          <p className="text-sm">{text}</p>
        </div>
      )}
      <div className="flex gap-2 flex-wrap">
        {comentario.map((coment, index) => (
          <p key={index} className="text-[#FF6734] bg-[#FFC8AF] bg-opacity-20 rounded-sm px-2">{coment}</p>
        ))}
      </div>
    </div>
  );
}