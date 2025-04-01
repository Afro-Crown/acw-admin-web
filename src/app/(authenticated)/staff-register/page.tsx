/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useState, useEffect } from "react";

import { v4 as uuidv4 } from "uuid";

import DateAndTime from "@/components/molecules/StaffRegisterComponents/dateAndTime";
import NameAndEmail from "@/components/molecules/StaffRegisterComponents/nameAndEmail";
import useAuth from "@/hooks/useAuth";
import { createMultipleStaffDocs } from "@/store/services/staff";

export default function StaffRegisterPage() {
  const { userUid } = useAuth();

  const [staffData, setStaffData] = useState<
    {
      name: string;
      email: string;
      id?: string;
      image?: string;
      hours: string;
      days: string;
      created_at: Date;
      updated_at?: Date;
    }[]
  >([]);
  const [scheduleData, setScheduleData] = useState<
    {
      id?: string;
      staff_name: string;
      email: string;
      date: Date;
      service_name: string;
      days: string[];
      times: string[];
      price: string;
      duration: string;
      isConfirmed: boolean;
    }[]
  >([]);

  const [step, setStep] = useState(1);
  const [currentStaffIndex, setCurrentStaffIndex] = useState(0);

  const [submitted, setSubmitted] = useState(false);
  const [finalData, setFinalData] = useState<
    {
      name: string;
      email: string;
      id: string;
      image: string;
      hours: string;
      days: string;
      created_at: Date;
      updated_at: Date;
    }[]
  >([]);

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
    setStaffData(staffs);

    const initSchedules = data.map((staff) => ({
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
    }));
    setScheduleData(initSchedules);

    setStep(2);
    setCurrentStaffIndex(0);
    setSubmitted(false);
    setFinalData([]);
  };

  const handleDateAndTimeSuccess = (
    selectedDays: string[],
    selectedTimes: string[]
  ) => {
    setScheduleData((prev) => {
      const updated = [...prev];
      updated[currentStaffIndex] = {
        ...updated[currentStaffIndex],
        days: selectedDays,
        times: selectedTimes
      };
      return updated;
    });
    if (currentStaffIndex < staffData.length - 1) {
      setCurrentStaffIndex((prev) => prev + 1);
    }
  };

  useEffect(() => {
    if (
      step === 2 &&
      currentStaffIndex === staffData.length - 1 &&
      scheduleData[currentStaffIndex]?.days.length > 0 &&
      !submitted
    ) {
      const consolidated = staffData.map((staff, index) => ({
        ...staff,
        id: uuidv4(),
        days: scheduleData[index].days.join(", "),
        hours: scheduleData[index].times.join(", "),
        image: staff.image || "",
        created_at: new Date(),
        updated_at: new Date()
      }));
      setFinalData(consolidated);
      createMultipleStaffDocs(userUid, consolidated)
        .then(() => {
          console.log("Dados enviados com sucesso:", consolidated);
        })
        .catch((err) => {
          console.error("Erro ao enviar os dados:", err);
        });
      setSubmitted(true);
    }
  }, [currentStaffIndex, staffData, scheduleData, step, submitted, userUid]);

  const handleBack = () => {
    if (step === 2 && currentStaffIndex > 0) {
      setCurrentStaffIndex((prev) => prev - 1);
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
