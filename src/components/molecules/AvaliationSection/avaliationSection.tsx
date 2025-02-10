import Divider from "../../../../public/divider.svg";
import Image from "next/image";
import { Star } from "lucide-react";
import Avaliation from "../Avaliations/avaliation";

export default function AvaliationSection() {
  const avaliations = [
    { nome: "User 1", comentario: ["Ótimo serviço!", "Muito atenciosa.", "Perfeito!"], date: "2023/10/01", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur." },
    { nome: "User 2", comentario: ["Serviço razoável.", "Poderia ser melhor."], date: "2023/09/15", text: "" },
    { nome: "User 3", comentario: ["Excelente!",], date: "2023/08/20", text: "" },
  ];

  return (
    <div className="flex flex-col start gap-4 mr-10 p-2">
      <div className="flex justify-between gap-2">
        <div className="flex items-center gap-2">
          <Star className="w-10 h-10 stroke-[#FF8A54] fill-[#FF8A54]" />
          <p className="text-3xl">3,3</p>
        </div>
        <h1 className="flex items-center text-[#2E2E2E] opacity-80 font-bold">{avaliations.length} avaliações</h1>
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
              <div className="w-full h-px bg-gray-300 mt-2">
                <Image src={Divider} alt="Divider" className="w-full" />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}