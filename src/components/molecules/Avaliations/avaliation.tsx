import { Star } from "lucide-react";
import Image from "next/image";

import UserIcon from "../../../../public/user-icon.svg";

interface AvaliationProps {
  nome: string;
  comentario: string[];
  date: string;
  text: string;
}

export default function Avaliation({
  nome,
  comentario,
  date,
  text
}: AvaliationProps) {
  return (
    <div className="flex w-full flex-col gap-3 md:gap-4 border-none p-3 md:p-4">
      <div className="flex flex-col sm:flex-row sm:justify-between gap-2 sm:gap-0">
        <div className="flex items-center gap-2">
          <Image src={UserIcon} alt="UserIcon" className="w-8 h-8 md:w-10 md:h-10" />
          <h1 className="text-base md:text-lg">{nome}</h1>
        </div>
        <div className="flex flex-col items-start sm:items-end">
          <span className="text-xs md:text-sm text-gray-500">{date}</span>
          <div className="flex gap-1">
            <Star className="h-3 w-3 md:h-4 md:w-4 fill-[#FF8A54] stroke-[#FF8A54]" />
            <Star className="h-3 w-3 md:h-4 md:w-4 fill-[#FF8A54] stroke-[#FF8A54]" />
            <Star className="h-3 w-3 md:h-4 md:w-4 fill-[#FF8A54] stroke-[#FF8A54]" />
            <Star className="h-3 w-3 md:h-4 md:w-4 fill-[#FF8A54] stroke-[#FF8A54]" />
            <Star className="h-3 w-3 md:h-4 md:w-4 fill-[#FF8A54] stroke-[#FF8A54]" />
          </div>
        </div>
      </div>
      {text.length > 0 && (
        <div className="mt-2 md:mt-4 flex flex-col gap-2">
          <p className="text-xs md:text-sm">{text}</p>
        </div>
      )}
      <div className="flex flex-wrap gap-1 md:gap-2">
        {comentario.map((coment, index) => (
          <p
            key={index}
            className="rounded-sm bg-[#FFC8AF] bg-opacity-20 px-2 py-1 text-xs md:text-sm text-[#FF6734]"
          >
            {coment}
          </p>
        ))}
      </div>
    </div>
  );
}
