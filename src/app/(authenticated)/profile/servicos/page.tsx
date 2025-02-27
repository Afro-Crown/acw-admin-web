"use client";

import { useState } from "react";
import Navigation from "@molecules/Navigation/navigation";
import Servicos from "@molecules/Servicos/servicos";
import Button from "@atoms/Button/button"

interface Servico {
  id: number;
  name: string;
  text: string;
  hora: string;
  preco: string;
}

interface Categoria {
  id: number;
  title: string;
  servicos: Servico[];
}

export default function Service() {
  const [categorias, setCategorias] = useState<Categoria[]>([
    {
      id: 1,
      title: "Cortes",
      servicos: [
        {
          id: 1,
          name: "Corte completo",
          text: "Degradê simples com produtos de qualidade, tenha cachos definidos e hidratados.",
          hora: "1h30 min",
          preco: "R$ 120,00",
        },
        {
          id: 2,
          name: "Corte simples",
          text: "Apenas o corte básico.",
          hora: "50 min",
          preco: "R$ 80,00",
        },
      ],
    },
    {
      id: 2,
      title: "Tinturas",
      servicos: [
        {
          id: 1,
          name: "Platinado",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          hora: "2h55 min",
          preco: "R$ 225,00",
        },
      ],
    },
  ]);

  const handleDeleteServico = (categoriaId: number, servicoId: number) => {
    setCategorias((prevCategorias) =>
      prevCategorias
        .map((categoria) =>
          categoria.id === categoriaId
            ? {
              ...categoria,
              servicos: categoria.servicos.filter((servico) => servico.id !== servicoId),
            }
            : categoria
        )
        .filter((categoria) => categoria.servicos.length > 0 || categoria.title.trim() !== "")
    );
  };

  return (
    <div>
      <div className="flex justify-self-center font-light text-sm w-[61rem]">
        <Navigation />
        <Button className="flex self-center h-[45px] px-[33px] rounded-full font-light truncate">Adicionar serviço&gt;</Button>
      </div>
      <div className="flex flex-col justify-self-center justify-start gap-5 mx-20">
        {categorias.map((categoria) => (
          <Servicos
            key={categoria.id}
            categoriaId={categoria.id}
            text={categoria.title}
            initialServicos={categoria.servicos}
            onDeleteServico={(servicoId) => handleDeleteServico(categoria.id, servicoId)}
          />
        ))}
      </div>
    </div>
  );
}
