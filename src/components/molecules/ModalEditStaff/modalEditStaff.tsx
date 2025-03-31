import { useEffect, useState } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle
} from "@/components/ui/dialog";
import { updateStaffDoc } from "@/store/services/staff";
import Button from "@atoms/Button/button";
import InputField from "@molecules/InputField/inputField";

import { ModalEditStaffProps } from "./types";

// Schema para os campos editáveis de staff
const EditStaffSchema = z.object({
  name: z.string().min(1, "Nome é obrigatório"),
  email: z.string().email("E-mail inválido")
});

type EditStaffData = z.infer<typeof EditStaffSchema>;

const daysOfWeek = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];
const hoursOfDay = [
  "7:00",
  "8:00",
  "9:00",
  "10:00",
  "11:00",
  "12:00",
  "13:00",
  "14:00",
  "15:00",
  "16:00",
  "17:00",
  "18:00",
  "19:00",
  "20:00",
  "21:00"
];

export function ModalEditStaff({
  isOpen,
  setIsOpen,
  editStaff,
  userId
}: ModalEditStaffProps) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<EditStaffData>({
    resolver: zodResolver(EditStaffSchema),
    defaultValues: {
      name: editStaff.name,
      email: editStaff.email
    }
  });
  // Estados para selecionar os dias e horários
  const [selectedDays, setSelectedDays] = useState<boolean[]>(
    Array(7).fill(false)
  );
  const [selectedTimes, setSelectedTimes] = useState<boolean[]>(
    Array(15).fill(false)
  );

  // Inicializa as seleções com base nos valores já gravados (assumindo que editStaff.days e editStaff.hours são strings separados por vírgula)
  useEffect(() => {
    if (editStaff.days) {
      const daysArr = editStaff.days.split(",").map((d) => d.trim());
      const daysInitialized = daysOfWeek.map((day) => daysArr.includes(day));
      setSelectedDays(daysInitialized);
    }
    if (editStaff.hours) {
      const timesArr = editStaff.hours.split(",").map((t) => t.trim());
      const timesInitialized = hoursOfDay.map((hour) =>
        timesArr.includes(hour)
      );
      setSelectedTimes(timesInitialized);
    }
    reset({
      name: editStaff.name,
      email: editStaff.email
    });
  }, [editStaff, reset]);

  const handleDayClick = (index: number) => {
    const updated = [...selectedDays];
    updated[index] = !updated[index];
    setSelectedDays(updated);
  };

  const handleTimeClick = (index: number) => {
    const updated = [...selectedTimes];
    updated[index] = !updated[index];
    setSelectedTimes(updated);
  };

  const onSubmit = async (data: EditStaffData) => {
    // Consolida as seleções em strings separadas por vírgula
    const selectedDaysNames = selectedDays
      .map((sel, index) => (sel ? daysOfWeek[index] : null))
      .filter(Boolean) as string[];
    const selectedTimesNames = selectedTimes
      .map((sel, index) => (sel ? hoursOfDay[index] : null))
      .filter(Boolean) as string[];

    const updatedData = {
      name: data.name,
      email: data.email,
      days: selectedDaysNames.join(", "),
      hours: selectedTimesNames.join(", ")
    };

    const res = await updateStaffDoc(userId, editStaff.id, updatedData);
    if (res.error) {
      alert(`Erro ao atualizar: ${res.error}`);
    } else {
      setIsOpen(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-[40rem]">
        <DialogHeader>
          <DialogTitle className="flex justify-center text-2xl font-bold">
            {`Editar ${editStaff.name}`}
          </DialogTitle>
        </DialogHeader>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col items-center justify-between gap-10"
        >
          <div className="flex w-[25rem] flex-col gap-6">
            <div className="flex flex-col gap-5 pl-8">
              <InputField
                register={register}
                name="name"
                label="Nome"
                placeholder="Digite o nome"
                formErrors={errors}
              />
              <InputField
                register={register}
                name="email"
                label="E-mail"
                placeholder="Digite o e-mail"
                formErrors={errors}
              />
            </div>
          </div>
          {/* Coluna da direita: Seleção de dias e horários */}
          <div className="ml-20 flex w-[25rem] flex-col justify-between">
            <div className="flex flex-col gap-4">
              <p className="font-semibold">Selecione os dias de trabalho</p>
              <div className="flex space-x-2">
                {daysOfWeek.map((day, index) => (
                  <button
                    key={day}
                    type="button"
                    onClick={() => handleDayClick(index)}
                    className={`h-[2rem] w-[3rem] rounded-lg ${
                      selectedDays[index]
                        ? "bg-[#FFD6AD] text-[#FF6734]"
                        : "bg-input text-[#616161]"
                    }`}
                  >
                    {day}
                  </button>
                ))}
              </div>
              <p className="mt-4 font-semibold">
                Selecione os horários de atendimento
              </p>
              <div className="flex flex-wrap gap-2">
                {hoursOfDay.map((hour, index) => (
                  <button
                    key={hour}
                    type="button"
                    onClick={() => handleTimeClick(index)}
                    className={`h-[2rem] w-[4rem] rounded-lg ${
                      selectedTimes[index]
                        ? "bg-[#FFD6AD] text-[#FF6734]"
                        : "bg-input text-[#616161]"
                    }`}
                  >
                    {hour}
                  </button>
                ))}
              </div>
            </div>
            <div className="-mb-10 mt-14 flex justify-end">
              <Button
                type="submit"
                className="flex h-[45px] self-center truncate rounded-full px-[33px] font-light"
              >
                Salvar
              </Button>
            </div>
          </div>
          <DialogFooter />
        </form>
      </DialogContent>
    </Dialog>
  );
}
