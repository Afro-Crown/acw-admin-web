import ServicoForm from "../serviçosForm/servicosForm";
import { ServicesEntity } from "@/common/entities/services";



interface ServicosProps {
  categoriaId: number;
  text: string;
  initialServicos: ServicesEntity[];
}

export default function Servicos({ text, initialServicos }: ServicosProps) {


  if (initialServicos.length === 0) return null;

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-2">
        <p className="text-4xl border-b-2 border-black w-fit py-2">{text}</p>
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
          />
        ))}
      </div>
    </div>
  );
}
