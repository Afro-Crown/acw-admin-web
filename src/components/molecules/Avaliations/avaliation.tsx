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
    <div className="flex max-w-5xl flex-col gap-4 border-none p-4">
      <div className="flex justify-between">
        <div className="flex items-center gap-2">
          <Image src={UserIcon} alt="UserIcon" className="" />
          <h1 className="text-lg ">{nome}</h1>
        </div>
        <div className="flex flex-col items-end">
          <span className="text-sm text-gray-500">{date}</span>
          <div className="flex gap-1">
            <Star className="h-4 w-4 fill-[#FF8A54] stroke-[#FF8A54]" />
            <Star className="h-4 w-4 fill-[#FF8A54] stroke-[#FF8A54]" />
            <Star className="h-4 w-4 fill-[#FF8A54] stroke-[#FF8A54]" />
            <Star className="h-4 w-4 fill-[#FF8A54] stroke-[#FF8A54]" />
            <Star className="h-4 w-4 fill-[#FF8A54] stroke-[#FF8A54]" />
          </div>
        </div>
      </div>
      {text.length > 0 && (
        <div className="mt-4 flex flex-col gap-2">
          <p className="text-sm">{text}</p>
        </div>
      )}
      <div className="flex flex-wrap gap-2">
        {comentario.map((coment, index) => (
          <p
            key={index}
            className="rounded-sm bg-[#FFC8AF] bg-opacity-20 px-2 text-[#FF6734]"
          >
            {coment}
          </p>
        ))}
      </div>
    </div>
  );
}
