"use client";

import { useState } from "react";
import UserIcon from "../../../../public/user-icon.svg";
import ChangeUser from "../../../../public/change-user.svg";
import Image from "next/image";
import Button from "@/components/atoms/Button/button";

interface DateAndTimeProps {
  onSuccess: (selectedDays: string[], selectedTimes: string[]) => void;
  onBack: () => void;
  name: string;
}

const daysOfWeek = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];
const timesOfDay = ["7:00", "8:00", "9:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00"];

export default function DateAndTime({ onSuccess, onBack, name }: DateAndTimeProps) {
  const [selectedDays, setSelectedDays] = useState<boolean[]>(Array(7).fill(false));

  const handleDayClick = (index: number) => {
    const newSelectedDays = [...selectedDays];
    newSelectedDays[index] = !newSelectedDays[index];
    setSelectedDays(newSelectedDays);
  };

  const [selectedTimes, setSelectedTimes] = useState<boolean[]>(Array(15).fill(false));

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
    console.log(selectedDaysArray,selectedTimesArray)
    onSuccess(selectedDaysArray, selectedTimesArray);
  };

  return (
    <div className="flex flex-col w-[50rem] gap-7">
      <div>
        <h1 className="text-3xl font-medium">Adicione os(as) cabeleireiros(as)</h1>
      </div>
      <div className="flex content-center items-center">
        <Image src={UserIcon} alt="UserIcon" />
        <Image src={ChangeUser} alt="ChangeUser" className="relative bottom-5 right-4 h-6 w-6 cursor-pointer" />
        <p className="text-3xl font-bold">{name}</p>
      </div>
      <div className="flex flex-col gap-4">
        <p>Selecione os dias da semana em que <span className="font-bold">{name}</span> trabalha no salão</p>
        <div className="flex space-x-2">
          {daysOfWeek.map((day, index) => (
            <button
              key={index}
              onClick={() => handleDayClick(index)}
              className={`w-[3rem] h-[2rem] rounded-lg bg-inpu ${selectedDays[index] ? "bg-[#FFD6AD] text-[#FF6734]" : "bg-input text-[#616161]"}`}
            >
              {day}
            </button>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <p>Selecione os horários que <span className="font-bold">{name}</span> atende no salão</p>
        <div className="flex space-x-2 flex-wrap">
          {timesOfDay.slice(0, 8).map((time, index) => (
            <button
              key={index}
              onClick={() => handleTimeClick(index)}
              className={`w-[4rem] h-[2rem] rounded-lg bg-inpu ${selectedTimes[index] ? "bg-[#FFD6AD] text-[#FF6734]" : "bg-input text-[#616161]"}`}
            >
              {time}
            </button>
          ))}
        </div>
        <div className="flex space-x-2 flex-wrap mt-2">
          {timesOfDay.slice(8).map((time, index) => (
            <button
              key={index + 8}
              onClick={() => handleTimeClick(index + 8)}
              className={`w-[4rem] h-[2rem] rounded-lg bg-inpu ${selectedTimes[index + 8] ? "bg-[#FFD6AD] text-[#FF6734]" : "bg-input text-[#616161]"}`}
            >
              {time}
            </button>
          ))}
        </div>
      </div>
      <div className="flex justify-between mt-3">
        <button className="text-[#FF6734] font-medium" onClick={onBack}>{"< Voltar"}</button>
        <Button className="w-[10rem] h-[3rem] text-xl font-normal" onClick={handleSubmit}>Próximo</Button>
      </div>
    </div>
  );
}