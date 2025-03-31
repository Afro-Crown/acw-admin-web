"use client";

import { useState } from "react";
import Navigation from "@molecules/Navigation/navigation";
import Servicos from "@molecules/Servicos/servicos";
import Button from "@atoms/Button/button";
import { ModalServices } from "@/components/molecules/ModalServices/modalServices";
import useAllServices from "@/hooks/queries/useAllServices";
import { ServicesEntity } from "@/common/entities/services";

interface Categoria {
  id: number;
  title: string;
  servicos: ServicesEntity[];
}

export default function Service() {
  const { data: services } = useAllServices();

  // Agrupando os serviços por categoria usando a propriedade "services"
  const categorias: Categoria[] = services
    ? Object.keys(
        services.reduce((acc, service) => {
          // Considera que service.services é a categoria; se não houver, utiliza "Outros"
          const categoria = service.services || "Outros";
          if (!acc[categoria]) {
            acc[categoria] = [];
          }
          acc[categoria].push(service);
          return acc;
        }, {} as Record<string, typeof services>)
      ).map((key, index) => ({
          id: index,
          title: key,
          servicos: (services.reduce((acc, service) => {
            const categoria = service.services || "Outros";
            if (categoria === key) {
              acc.push({
                id: service.id || "",
                name: service.name,
                descricao: service.descricao || "",
                horas: service.horas,
                preco: service.preco,
                minutos: service.minutos,
                staffs: []
              });
            }
            return acc;
          }, [] as ServicesEntity[]))
      }))
    : [];

  const [isOpen, setIsOpen] = useState(false);
  const user = {
    name: "John Doe"
  };


  return (
    <div>
      <div className="flex justify-self-center font-light text-sm w-[61rem]">
        <Navigation />
        <Button
          className="flex self-center h-[45px] px-[33px] rounded-full font-light truncate"
          onClick={() => setIsOpen(true)}
        >
          Adicionar serviço &gt;
        </Button>
      </div>
      <div className="flex flex-col justify-self-center justify-start gap-5 mx-20">
        {categorias.map((categoria) => (
          <Servicos
            key={categoria.id}
            categoriaId={categoria.id}
            text={categoria.title}
            initialServicos={categoria.servicos}
          />
        ))}
      </div>
      <ModalServices isOpen={isOpen} setIsOpen={setIsOpen} name={user.name} />
    </div>
  );
}