"use client";

import { useState } from "react";
import Image from "next/image";
import Schedule from "../../../../../public/schedule-icon.svg";
import ProfileBG from "@molecules/ProfileBG/profileBG";
import { Scissors } from "lucide-react";
import AgendamentoForm from "@molecules/AgendamentoForm/agendamentoForm";
import Button from "@atoms/Button/button";
import Navigation from "@molecules/Navigation/navigation"

interface Agendamento {
  id: number;
  servico: string;
  dia: number;
  mês: string;
  horario: string;
  tipoDoCorte: string;
  tempoDoCorte: string;
  nome: string;
  preco: string;
  status: string;
}

export default function Agendamento() {
  const [activeSection, setActiveSection] = useState("proximos");
  const [activeButton, setActiveButton] = useState("todos");
  const [agendamentos, setAgendamentos] = useState<Agendamento[]>([
    {
      id: 1,
      servico: "Serviço N°123123",
      dia: 16,
      mês: "Ago",
      horario: "11:00",
      tipoDoCorte: "Degradê Simples",
      tempoDoCorte: "3h",
      nome: "Barbearia",
      preco: "R$ 123,00",
      status: "proximos",
    },
    {
      id: 2,
      servico: "Serviço N°123124",
      dia: 21,
      mês: "mai",
      horario: "11:30",
      tipoDoCorte: "Degradê",
      tempoDoCorte: "2h40 min",
      nome: "Barbearia",
      preco: "R$ 123,00",
      status: "proximos",
    },
  ]);

  const handleConfirm = (id: number) => {
    setAgendamentos((prev) => [
      ...prev.map((agendamento) =>
        agendamento.id === id ? { ...agendamento, status: "confirmed" } : agendamento
      ),
      ...prev.filter((agendamento) => agendamento.id === id).map((agendamento) => ({
        ...agendamento,
        status: "historico",
      })),
    ]);
  };

  const handleCancel = (id: number) => {
    setAgendamentos((prev) => [
      ...prev.map((agendamento) =>
        agendamento.id === id ? { ...agendamento, status: "cancelados" } : agendamento
      ),
      ...prev.filter((agendamento) => agendamento.id === id).map((agendamento) => ({
        ...agendamento,
        status: "historico",
      })),
    ]);
  };

  const renderContent = () => {
    const filteredAgendamentos = agendamentos.filter(
      (agendamento) => agendamento.status === activeSection || (activeSection === "proximos" && agendamento.status === "confirmed")
    );

    switch (activeSection) {
      case "proximos":
      case "historico":
      case "cancelados":
        if (filteredAgendamentos.length === 0) {
          return (
            <div className="flex flex-col items-center mt-10 text-[#949494]">
              <Scissors width={50} height={50} className="opacity-70" />
              <p className="flex max-w-[18rem] justify-center text-2xl text-center font-light">
                Você ainda não tem nenhum agendamento marcado
              </p>
            </div>
          );
        }

        return (
          <div className="flex flex-col mt-2 w-[63rem] justify-self-center">
            {filteredAgendamentos.map((agendamento, index) => (
              <div key={agendamento.id}>
                <AgendamentoForm
                  {...agendamento}
                  onConfirm={() => handleConfirm(agendamento.id)}
                  onCancel={() => handleCancel(agendamento.id)}
                />
                {index < filteredAgendamentos.length - 1 && <hr className="my-4 border-gray-300" />}
              </div>
            ))}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <main>
      <div className="flex flex-start justify-self-center gap-2 font-light text-sm w-[61rem]">
        <Navigation />
      </div>
      <ProfileBG isEditable={false} />
      <div className="flex justify-center gap-80 text-2xl font-light mt-5">
        <div
          className={`flex gap-2 cursor-pointer ${activeSection === "proximos" ? "border-b-2 border-black" : ""
            }`}
          onClick={() => setActiveSection("proximos")}
        >
          <Image src={Schedule} alt="agenda" width={24} height={24} className={`${activeSection === "historico" || activeSection === "cancelados" ? "filter grayscale opacity-30" : ""}`} />
          <p>Próximos</p>
        </div>
        <div
          className={`flex cursor-pointer ${activeSection === "historico" ? "border-b-2 border-black" : ""
            }`}
          onClick={() => setActiveSection("historico")}
        >
          <p>Histórico</p>
        </div>
        <div
          className={`cursor-pointer ${activeSection === "cancelados" ? "border-b-2 border-black" : ""
            }`}
          onClick={() => setActiveSection("cancelados")}
        >
          <p>Cancelados</p>
        </div>
      </div>
      {activeSection === "historico" && (
        <div className="flex justify-center items-center gap-2 mt-2">
          <Button
            size="sm"
            className={`rounded-full border-[#2E2E2E] ${activeButton === "todos" ? "bg-[#2E2E2E]  text-white" : "bg-white text-[#2E2E2E] "}`}
            onClick={() => setActiveButton("todos")}
          >
            todos
          </Button>
          <span className="text-xl">•</span>
          <Button
            size="sm"
            className={`rounded-full border-[#2E2E2E] ${activeButton === "esse mês" ? "bg-[#2E2E2E]  text-white" : "bg-white text-[#2E2E2E] "}`}
            onClick={() => setActiveButton("esse mês")}
          >
            esse mês
          </Button>
          <span className="text-xl">•</span>
          <Button
            size="sm"
            className={`rounded-full border-[#2E2E2E] ${activeButton === "mês passado" ? "bg-[#2E2E2E]  text-white" : "bg-white text-[#2E2E2E] "}`}
            onClick={() => setActiveButton("mês passado")}
          >
            mês passado
          </Button>
          <span className="text-xl">•</span>
          <Button
            size="sm"
            className={`rounded-full border-[#2E2E2E] ${activeButton === "esse ano" ? "bg-[#2E2E2E]  text-white" : "bg-white text-[#2E2E2E] "}`}
            onClick={() => setActiveButton("esse ano")}
          >
            esse ano
          </Button>
        </div>
      )}
      {renderContent()}
    </main>
  );
}