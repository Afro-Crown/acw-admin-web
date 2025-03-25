/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useState } from "react";

import { ScheduleEntity } from "@/common/entities/schedules";
import DateAndTime from "@/components/molecules/StaffRegisterComponents/dateAndTime";
import NameAndEmail from "@/components/molecules/StaffRegisterComponents/nameAndEmail";

export default function StaffRegisterPage() {
  const [step, setStep] = useState(1);
  const [staffData, setStaffData] = useState([{ name: "", email: "" }]);
  const [scheduleData, setScheduleData] = useState<ScheduleEntity[]>([]);
  const [currentStaffIndex, setCurrentStaffIndex] = useState(0);

  const handleNameAndEmailSuccess = (
    data: { name: string; email: string }[]
  ) => {
    setStaffData(data);
    setScheduleData(
      data.map((staff) => ({
        name: staff.name,
        email: staff.email,
        days: [],
        times: []
      }))
    );
    setStep(2);
    setCurrentStaffIndex(0);
  };

  const handleDateAndTimeSuccess = (
    selectedDays: string[],
    selectedTimes: string[]
  ) => {
    setScheduleData((prev) => {
      const newData = [...prev];
      newData[currentStaffIndex] = {
        ...newData[currentStaffIndex],
        days: selectedDays,
        times: selectedTimes
      };
      if (currentStaffIndex === staffData.length - 1) {
        console.log("Dados consolidados:", newData);
      }
      return newData;
    });

    if (currentStaffIndex < staffData.length - 1) {
      setCurrentStaffIndex(currentStaffIndex + 1);
    }
  };

  const handleBack = () => {
    if (step === 2 && currentStaffIndex > 0) {
      setCurrentStaffIndex(currentStaffIndex - 1);
    } else {
      setStep(1);
    }
  };

  return (
    <main className="flex min-h-[38rem] flex-col items-center pt-20">
      {step === 1 && (
        <NameAndEmail
          onSuccess={handleNameAndEmailSuccess}
          setName={(name) =>
            setStaffData((prev) =>
              prev.map((staff, index) =>
                index === 0 ? { ...staff, name } : staff
              )
            )
          }
          defaultStaffData={staffData}
        />
      )}
      {step === 2 && (
        <DateAndTime
          onSuccess={handleDateAndTimeSuccess}
          onBack={handleBack}
          name={staffData[currentStaffIndex]?.name || ""}
          isLastStaff={currentStaffIndex === staffData.length - 1}
        />
      )}
    </main>
  );
}
