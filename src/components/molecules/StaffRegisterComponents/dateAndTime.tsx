"use client";

import { useState } from "react";

import { ArrowLeftIcon } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

import Button from "@/components/atoms/Button/button";

import ChangeUser from "../../../../public/change-user.svg";
import UserIcon from "../../../../public/user-icon.svg";

interface DateAndTimeProps {
  onSuccess: (selectedDays: string[], selectedTimes: string[]) => void;
  onBack: () => void;
  name: string;
  isLastStaff?: boolean;
}

const daysOfWeek = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];
const timesOfDay = [
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

export default function DateAndTime({
  onSuccess,
  onBack,
  name,
  isLastStaff = false
}: DateAndTimeProps) {
  const router = useRouter();
  const [selectedDays, setSelectedDays] = useState<boolean[]>(
    Array(7).fill(false)
  );

  const handleDayClick = (index: number) => {
    const newSelectedDays = [...selectedDays];
    newSelectedDays[index] = !newSelectedDays[index];
    setSelectedDays(newSelectedDays);
  };

  const [selectedTimes, setSelectedTimes] = useState<boolean[]>(
    Array(15).fill(false)
  );

  const handleTimeClick = (index: number) => {
    const newSelectedTimes = [...selectedTimes];
    newSelectedTimes[index] = !newSelectedTimes[index];
    setSelectedTimes(newSelectedTimes);
  };

  const handleSubmit = () => {
    const selectedDaysArray: string[] = [];
    const selectedTimesArray: string[] = [];

    selectedDays.forEach((isSelected, index) => {
      if (isSelected) {
        selectedDaysArray.push(daysOfWeek[index]);
      }
    });

    selectedTimes.forEach((isSelected, index) => {
      if (isSelected) {
        selectedTimesArray.push(timesOfDay[index]);
      }
    });
    console.log(selectedDaysArray, selectedTimesArray);
    onSuccess(selectedDaysArray, selectedTimesArray);
    if (isLastStaff) {
      router.push("/profile");
    }
  };

  return (
    <div className="flex w-[50rem] flex-col gap-7">
      <div>
        <h1 className="text-3xl font-medium">
          Adicione os(as) cabeleireiros(as)
        </h1>
      </div>
      <div className="flex content-center items-center">
        <Image src={UserIcon} alt="UserIcon" />
        <Image
          src={ChangeUser}
          alt="ChangeUser"
          className="relative bottom-5 right-4 h-6 w-6 cursor-pointer"
        />
        <p className="text-3xl font-bold">{name}</p>
      </div>
      <div className="flex flex-col gap-4">
        <p>
          Selecione os dias da semana em que{" "}
          <span className="font-bold">{name}</span> trabalha no salão
        </p>
        <div className="flex space-x-2">
          {daysOfWeek.map((day, index) => (
            <button
              key={index}
              onClick={() => handleDayClick(index)}
              className={`bg-inpu h-[2rem] w-[3rem] rounded-lg ${selectedDays[index] ? "bg-[#FFD6AD] text-[#FF6734]" : "bg-input text-[#616161]"}`}
            >
              {day}
            </button>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <p>
          Selecione os horários que <span className="font-bold">{name}</span>{" "}
          atende no salão
        </p>
        <div className="flex flex-wrap space-x-2">
          {timesOfDay.slice(0, 8).map((time, index) => (
            <button
              key={index}
              onClick={() => handleTimeClick(index)}
              className={`bg-inpu h-[2rem] w-[4rem] rounded-lg ${selectedTimes[index] ? "bg-[#FFD6AD] text-[#FF6734]" : "bg-input text-[#616161]"}`}
            >
              {time}
            </button>
          ))}
        </div>
        <div className="mt-2 flex flex-wrap space-x-2">
          {timesOfDay.slice(8).map((time, index) => (
            <button
              key={index + 8}
              onClick={() => handleTimeClick(index + 8)}
              className={`bg-inpu h-[2rem] w-[4rem] rounded-lg ${selectedTimes[index + 8] ? "bg-[#FFD6AD] text-[#FF6734]" : "bg-input text-[#616161]"}`}
            >
              {time}
            </button>
          ))}
        </div>
      </div>
      <div className="mt-3 flex justify-between">
        <button
          className="flex items-center font-medium text-[#FF6734]"
          onClick={onBack}
        >
          <ArrowLeftIcon size={24} />
          Voltar
        </button>
        <Button
          className="h-[3rem] w-[10rem] text-xl font-normal"
          onClick={handleSubmit}
        >
          {isLastStaff ? "Cadastrar" : "Próximo"}
        </Button>
      </div>
    </div>
  );
}
