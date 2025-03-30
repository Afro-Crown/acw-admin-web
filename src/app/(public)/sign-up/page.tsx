"use client";

import { useState } from "react";

import CreatePasswordForm from "@/components/molecules/SingUpFormsComponents/creatPassoword";
import EmailConfirmation from "@/components/molecules/SingUpFormsComponents/emailConfirmation";
import SignUpForm from "@/components/molecules/SingUpFormsComponents/singUp";

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
    <main
      className={`flex flex-col ${step === 1 ? null : "h-screen"} items-center justify-center gap-5 bg-[#FFF5EA]`}
    >
      {step === 1 && <SignUpForm onSuccess={handleSignUpSuccess} />}
      {step === 2 && (
        <CreatePasswordForm onSuccess={handleCreatePasswordSuccess} />
      )}
      {step === 3 && (
        <EmailConfirmation
          email={email}
          onSuccess={handleEmailConfirmationSuccess}
        />
      )}
    </main>
  );
}
