import React from "react";
import ServicoForm from "../serviçosForm/servicosForm";
import { ServicesEntity } from "@/common/entities/services";
import useAuth from "@/hooks/useAuth";
import { deleteServiceDoc } from "@/store/services/services";
import { errorToast, successToast } from "@/hooks/useAppToast";
import { queryClient } from "@/store/providers/queryClient";
import { ServicesEntity } from "@/common/entities/services";

import ServicoForm from "../serviçosForm/servicosForm";

interface ServicosProps {
  categoriaId: number;
  text: string;
  initialServicos: ServicesEntity[];
  onEditService: (service: ServicesEntity) => void;
}

export default function Servicos({ text, initialServicos, onEditService }: ServicosProps) {
  const { userUid } = useAuth();

  const handleDeleteService = async (serviceId: string) => {
    const { error } = await deleteServiceDoc(userUid, serviceId);
    if (error) {
      errorToast("Erro ao excluir serviço");
    } else {
      successToast("Serviço excluído com sucesso");
      // Invalidando a query "services" para forçar a atualização dos dados
      queryClient.invalidateQueries(["services"]);
    }
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
    </div>
  );
}