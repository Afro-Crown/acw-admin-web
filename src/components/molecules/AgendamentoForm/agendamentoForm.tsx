import React from "react";

import Image from "next/image";

import ScheduleCancel from "../../../../public/canceled-schedule-icon.svg";
import ScheduleConfirm from "../../../../public/confirmed-schedule-icon.svg";
import Button from "../../../components/atoms/Button/button";

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
    <div className="flex w-[63rem] justify-between py-2">
      <div className="flex gap-5">
        <div
          className={`flex h-32 w-16 flex-col items-center gap-3 rounded-sm p-2 shadow-xl ${textClass}`}
        >
          <div>
            <p className="flex justify-center text-4xl font-semibold">{dia}</p>
            <p className="flex w-12 justify-center border-b-2 text-lg font-semibold">
              {mês}
            </p>
          </div>
          <p>{horario}</p>
        </div>
        <div className={`flex flex-col gap-2 p-2 ${textClass}`}>
          <p className="text-xs opacity-50">{servico}</p>
          <p className="font-semibold underline">{nome}</p>
          <div className="flex items-center gap-1">
            <p>{tipoDoCorte}</p>
            <span className="text-xs">•</span>
            <p>{tempoDoCorte}</p>
          </div>
          <p className={priceClass}>{preco}</p>
        </div>
      </div>
      <div className="flex origin-right items-end">
        {status === "proximos" ? (
          <div className="flex gap-2">
            <Button
              className="rounded border-none bg-[#6DB88B33] p-2"
              size="sm"
              onClick={onConfirm}
            >
              <Image src={ScheduleConfirm} alt="ScheduleConfirm" />
              <p className="text-[#489868]">Confirmar</p>
            </Button>
            <Button
              className="rounded border-none bg-[#A21A1A1A] p-2"
              size="sm"
              onClick={onCancel}
            >
              <Image src={ScheduleCancel} alt="ScheduleCancel" />
              <p className="text-[#A21A1A]">Cancelar</p>
            </Button>
          </div>
        ) : status === "historico" ? null : (
          <p
            className={`text-${status === "confirmed" ? "[#489868]" : "[#A21A1A]"}`}
          >
            {status === "confirmed" ? "Confirmado" : "Cancelado"}
          </p>
        )}
      </div>
    </div>
  );
}
