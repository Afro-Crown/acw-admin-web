import { Star } from "lucide-react";
import Image from "next/image";

import Divider from "../../../../public/divider.svg";
import Avaliation from "../Avaliations/avaliation";

export default function AvaliationSection() {
  const avaliations = [
    {
      nome: "User 1",
      comentario: ["Ótimo serviço!", "Muito atenciosa.", "Perfeito!"],
      date: "2023/10/01",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    },
    {
      nome: "User 2",
      comentario: ["Serviço razoável.", "Poderia ser melhor."],
      date: "2023/09/15",
      text: ""
    },
    { nome: "User 3", comentario: ["Excelente!"], date: "2023/08/20", text: "" }
  ];

  return (
    <div className="start mr-10 flex flex-col gap-4 p-2">
      <div className="flex justify-between gap-2">
        <div className="flex items-center gap-2">
          <Star className="h-10 w-10 fill-[#FF8A54] stroke-[#FF8A54]" />
          <p className="text-3xl">3,3</p>
        </div>
        <h1 className="flex items-center font-bold text-[#2E2E2E] opacity-80">
          {avaliations.length} avaliações
        </h1>
      </div>
      <div>
        <Image src={Divider} alt="Divider" className="bg-gray-300" />
      </div>
      <div className="flex flex-col">
        {avaliations.map((avaliation, index) => (
          <div key={index}>
            <Avaliation
              nome={avaliation.nome}
              comentario={avaliation.comentario}
              date={avaliation.date}
              text={avaliation.text}
            />
            {index < avaliations.length - 1 && (
              <div className="mt-2 h-px w-full bg-gray-300">
                <Image src={Divider} alt="Divider" className="w-full" />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
