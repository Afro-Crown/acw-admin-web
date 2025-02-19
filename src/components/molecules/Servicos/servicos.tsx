import React, { useState, useEffect } from "react";
import ServicoForm from "../serviçosForm/servicosForm";

interface Servico {
  id: number;
  name: string;
  text: string;
  hora: string;
  preco: string;
}

interface ServicosProps {
  categoriaId: number;
  text: string;
  initialServicos: Servico[];
  onDeleteServico: (id: number) => void;
}

export default function Servicos({ text, initialServicos, onDeleteServico }: ServicosProps) {
  const [servicos, setServicos] = useState<Servico[]>(initialServicos);

  useEffect(() => {
    setServicos(initialServicos);
  }, [initialServicos]);

  const handleDelete = (id: number) => {
    setServicos((prevServicos) => prevServicos.filter((servico) => servico.id !== id));
    onDeleteServico(id);
  };

  if (servicos.length === 0) return null;

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-2">
        <p className="text-4xl border-b-2 border-black w-fit py-2">{text}</p>
      </div>

      <div className="grid grid-cols-2 gap-7">
        {servicos.map((servico) => (
          <ServicoForm
            key={servico.id}
            name={servico.name}
            text={servico.text}
            hora={servico.hora}
            preco={servico.preco}
            onDelete={() => handleDelete(servico.id)}
          />
        ))}
      </div>
    </div>
  );
}
