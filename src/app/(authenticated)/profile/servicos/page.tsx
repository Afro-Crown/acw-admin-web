"use client";

import { useState } from "react";

import { ServicesEntity } from "@/common/entities/services";
import { ModalServices } from "@/components/molecules/ModalServices/modalServices";
import useAllServices from "@/hooks/queries/useAllServices";
import Button from "@atoms/Button/button";
import Navigation from "@molecules/Navigation/navigation";
import Servicos from "@molecules/Servicos/servicos";

interface Categoria {
  id: number;
  title: string;
  servicos: ServicesEntity[];
}

export default function Service() {
  const { data: services } = useAllServices();

  const categorias: Categoria[] = services
    ? Object.keys(
        services.reduce(
          (acc, service) => {
            const categoria = service.services || "Outros";
            if (!acc[categoria]) {
              acc[categoria] = [];
            }
            acc[categoria].push(service);
            return acc;
          },
          {} as Record<string, typeof services>
        )
      ).map((key, index) => ({
        id: index,
        title: key,
        servicos: services.reduce((acc, service) => {
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
        }, [] as ServicesEntity[])
      }))
    : [];

  const [isOpen, setIsOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<ServicesEntity | null>(
    null
  );

  const handleEditService = (service: ServicesEntity) => {
    console.log("teste");
    setSelectedService(service);
    setIsOpen(true);
  };

  return (
    <div>
      <div className="flex w-[61rem] justify-self-center text-sm font-light">
        <Navigation />
        <Button
          className="flex h-[45px] self-center truncate rounded-full px-[33px] font-light"
          onClick={() => setIsOpen(true)}
        >
          Adicionar serviço &gt;
        </Button>
      </div>
      <div className="mx-20 flex flex-col justify-start gap-5 justify-self-center">
        {categorias.map((categoria) => (
          <Servicos
            key={categoria.id}
            categoriaId={categoria.id}
            text={categoria.title}
            initialServicos={categoria.servicos}
            onEditService={handleEditService}
          />
        ))}
      </div>
      <ModalServices
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        initialServiceData={
          selectedService && selectedService.id
            ? { ...selectedService, id: selectedService.id }
            : undefined
        }
      />
    </div>
  );
}
