import React from "react";
import Image from "next/image";
import Button from "../../../components/atoms/Button/button";
import ScheduleConfirm from "../../../../public/confirmed-schedule-icon.svg";
import ScheduleCancel from "../../../../public/canceled-schedule-icon.svg";

interface AgendamentoProps {
  servico: string;
  dia: number;
  mês: string;
  horario: string;
  tipoDoCorte: string;
  tempoDoCorte: string;
  nome: string;
  preco: string;
  status: string;
  onConfirm: () => void;
  onCancel: () => void;
}

export default function Agendamento({
  servico,
  dia,
  mês,
  horario,
  tipoDoCorte,
  tempoDoCorte,
  nome,
  preco,
  status,
  onConfirm,
  onCancel
}: AgendamentoProps) {
  const textClass = status === "cancelados" ? "text-[#616161]" : "";
  const priceClass = status === "cancelados" ? "line-through" : "";

  return (
    <div className="flex py-2 w-[63rem] justify-between">
      <div className="flex gap-5">
        <div className={`flex flex-col items-center w-16 h-32 rounded-sm shadow-xl p-2 gap-3 ${textClass}`}>
          <div>
            <p className="flex justify-center text-4xl font-semibold">{dia}</p>
            <p className="flex text-lg font-semibold border-b-2 w-12 justify-center">{mês}</p>
          </div>
          <p>{horario}</p>
        </div>
        <div className={`flex flex-col gap-2 p-2 ${textClass}`}>
          <p className="text-xs opacity-50">{servico}</p>
          <p className="font-semibold underline">{nome}</p>
          <div className="flex gap-1 items-center">
            <p>{tipoDoCorte}</p>
            <span className="text-xs">•</span>
            <p>{tempoDoCorte}</p>
          </div>
          <p className={priceClass}>{preco}</p>
        </div>
      </div>
      <div className="flex items-end origin-right">
        {status === "proximos" ? (
          <div className="flex gap-2">
            <Button
              className="bg-[#6DB88B33] border-none p-2 rounded"
              size="sm"
              onClick={onConfirm}
            >
              <Image src={ScheduleConfirm} alt="ScheduleConfirm" />
              <p className="text-[#489868]">Confirmar</p>
            </Button>
            <Button
              className="bg-[#A21A1A1A] border-none p-2 rounded"
              size="sm"
              onClick={onCancel}
            >
              <Image src={ScheduleCancel} alt="ScheduleCancel" />
              <p className="text-[#A21A1A]">Cancelar</p>
            </Button>
          </div>
        ) : status === "historico" ? null : (
          <p className={`text-${status === "confirmed" ? "[#489868]" : "[#A21A1A]"}`}>
            {status === "confirmed" ? "Confirmado" : "Cancelado"}
          </p>
        )}
      </div>
    </div>
  );
}