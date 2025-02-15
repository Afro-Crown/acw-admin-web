"use client";

import { useState } from "react";
import NameAndEmail from "@/components/molecules/StaffRegisterComponents/nameAndEmail";
import DateAndTime from "@/components/molecules/StaffRegisterComponents/dateAndTime";

export default function StaffRegisterPage() {
  const [step, setStep] = useState(1);
  const [staffData, setStaffData] = useState({ name: "", email: "" });

  const handleNameAndEmailSuccess = (data: { name: string; email: string }) => {
    setStaffData(data);
    setStep(2);
  };

  const handleDateAndTimeSuccess = () => {
    console.log("Date and time selected successfully");
  };

  const handleBack = () => {
    setStep(1);
  };

  return (
    <main className="flex min-h-[38rem] flex-col pt-20 items-center">
      {step === 1 && <NameAndEmail onSuccess={handleNameAndEmailSuccess} setName={(name) => setStaffData({ ...staffData, name })} />}
      {step === 2 && <DateAndTime onSuccess={handleDateAndTimeSuccess} onBack={handleBack} name={staffData.name} />}
    </main>
  );
}