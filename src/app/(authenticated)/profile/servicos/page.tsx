"use client";

import { useState } from "react";

import { ServicesEntity } from "@/common/entities/services";
import { ModalServices } from "@/components/molecules/ModalServices/modalServices";
import useAllServices from "@/hooks/queries/useAllServices";
import Button from "@atoms/Button/button";
import ProfileBG from "@molecules/ProfileBG/profileBG";
import Servicos from "@molecules/Servicos/servicos";

interface Categoria {
  id: number;
  title: string;
  servicos: ServicesEntity[];
}

export default function ServicosPage() {
  const { data: services } = useAllServices();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<ServicesEntity | null>(
    null
  );

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

  const handleEditService = (service: ServicesEntity) => {
    setSelectedService(service);
    setIsOpen(true);
  };

  return (
    <main className="w-full px-4 md:px-6 lg:px-8">
      <ProfileBG isEditable={false} />
      <div className="mt-8 md:mt-12 lg:mt-16">
        <div className="mx-auto max-w-6xl">
          <div className="mb-6 flex justify-end">
            <Button
              className="flex h-[45px] items-center truncate rounded-full px-[33px] font-light"
              onClick={() => setIsOpen(true)}
            >
              Adicionar serviço &gt;
            </Button>
          </div>
          <div className="flex flex-col gap-5">
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
        </div>
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
    </main>
  );
}
