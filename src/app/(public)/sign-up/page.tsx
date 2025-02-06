"use client";

import { useState } from "react";
import SignUpForm from "@/components/molecules/SingUpFormsComponents/singUp";
import EmailConfirmation from "@/components/molecules/SingUpFormsComponents/emailConfirmation";
import CreatePasswordForm from "@/components/molecules/SingUpFormsComponents/creatPassoword";

export default function SignUpPage() {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");

  const handleSignUpSuccess = (email: string) => {
    setEmail(email);
    setStep(2);
  };

  const handleEmailConfirmationSuccess = () => {
    setStep(3);
  };

  const handleCreatePasswordSuccess = () => {
    console.log("Password created successfully");
  };

  return (
    <main className="flex flex-col items-center justify-center gap-5 bg-[#FFF5EA]">
      {step === 1 && <SignUpForm onSuccess={handleSignUpSuccess} />}
      {step === 2 && <EmailConfirmation email={email} onSuccess={handleEmailConfirmationSuccess} />}
      {step === 3 && <CreatePasswordForm onSuccess={handleCreatePasswordSuccess} />}
    </main>
  );
}