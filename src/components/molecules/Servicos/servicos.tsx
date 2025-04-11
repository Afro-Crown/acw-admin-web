import React, { useState } from "react";

import { ServicesEntity } from "@/common/entities/services";
import { errorToast, successToast } from "@/hooks/useAppToast";
import useAuth from "@/hooks/useAuth";
import { queryClient } from "@/store/providers/queryClient";
import { deleteServiceDoc } from "@/store/services/services";
import Confirmation from "@/components/atoms/Confirmation/confirmation";

import ServicoForm from "../serviçosForm/servicosForm";

interface ServicosProps {
  categoriaId: number;
  text: string;
  initialServicos: ServicesEntity[];
  onEditService: (service: ServicesEntity) => void;
}

export default function Servicos({
  text,
  initialServicos,
  onEditService
}: ServicosProps) {
  const { userUid } = useAuth();
  const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);
  const [serviceToDelete, setServiceToDelete] = useState<string | null>(null);

  const handleDeleteService = async (serviceId: string) => {
    setServiceToDelete(serviceId);
    setIsConfirmationOpen(true);
  };

  const confirmDelete = async () => {
    if (!serviceToDelete) return;

    const { error } = await deleteServiceDoc(userUid, serviceToDelete);
    if (error) {
      errorToast("Erro ao excluir serviço");
    } else {
      successToast("Serviço excluído com sucesso");
      queryClient.invalidateQueries(["services"]);
    }
    setIsConfirmationOpen(false);
    setServiceToDelete(null);
  };

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
            text={servico.descricao || "Sem descrição."}
            hora={servico.horas + "h" + servico.minutos + " min"}
            preco={servico.preco}
            onDelete={() => handleDeleteService(servico.id!)}
            onEdit={() => onEditService(servico)}
          />
        ))}
      </div>

      <Confirmation
        isOpen={isConfirmationOpen}
        onClose={() => {
          setIsConfirmationOpen(false);
          setServiceToDelete(null);
        }}
        onConfirm={confirmDelete}
        title="Tem certeza que deseja excluir este serviço?"
        description=""
      />
    </div>
  );
}
