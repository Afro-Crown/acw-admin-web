/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useState } from "react";

import { v4 as uuidv4 } from "uuid";

import { ScheduleEntity } from "@/common/entities/schedules";
import DateAndTime from "@/components/molecules/StaffRegisterComponents/dateAndTime";
import NameAndEmail from "@/components/molecules/StaffRegisterComponents/nameAndEmail";
import useAuth from "@/hooks/useAuth";
import { createMultipleStaffDocs } from "@/store/services/staff";

export default function StaffRegisterPage() {
  const { userUid } = useAuth();
  const [step, setStep] = useState(1);
  const [staffData, setStaffData] = useState([{ name: "", email: "" }]);
  const [scheduleData, setScheduleData] = useState<ScheduleEntity[]>([]);
  const [currentStaffIndex, setCurrentStaffIndex] = useState(0);

  const handleNameAndEmailSuccess = (
    data: { name: string; email: string }[]
  ) => {
    const staffs = data.map((staff) => ({
      id: "",
      name: staff.name,
      email: staff.email,
      image: "",
      hours: "",
      days: "",
      created_at: new Date(),
      updated_at: new Date()
    }));
    setStaffData(data);
    setScheduleData(
      data.map((staff) => ({
        id: "",
        staff_name: staff.name,
        email: staff.email,
        date: new Date(),
        service_name: "",
        days: [],
        times: [],
        price: "0",
        duration: "",
        isConfirmed: false
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
        const consolidatedData = staffData.map((staff, index) => ({
          ...staff,
          id: uuidv4(),
          days: newData[index].days.join(", "),
          hours: newData[index].times.join(", "),
          created_at: new Date()
        }));
        console.log("Dados consolidados:", consolidatedData);
        createMultipleStaffDocs(userUid, consolidatedData);
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
