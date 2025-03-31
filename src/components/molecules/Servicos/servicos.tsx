import { ServicesEntity } from "@/common/entities/services";

import ServicoForm from "../serviçosForm/servicosForm";

interface ServicosProps {
  categoriaId: number;
  text: string;
  initialServicos: ServicesEntity[];
  onEditService: (service: ServicesEntity) => void;
}

export default function Servicos({ text, initialServicos, onEditService }: ServicosProps) {
  if (initialServicos.length === 0) return null;

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-2">
        <p className="w-fit border-b-2 border-black py-2 text-4xl">{text}</p>
      </div>

      <div className="grid grid-cols-2 gap-7">
        {initialServicos.map((servico: ServicesEntity) => (
          <ServicoForm
            key={servico.id}
            name={servico.name}
            text={servico?.descricao || ""}
            hora={servico.horas + ":" + servico.minutos}
            preco={servico.preco}
            onDelete={() => console.log("deletar")}
            onEdit={() => onEditService(servico)}
          />
        ))}
      </div>
    </div>
  );
}
