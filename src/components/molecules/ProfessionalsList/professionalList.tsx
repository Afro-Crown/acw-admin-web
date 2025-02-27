"use client";

import { useState } from "react";

import { Plus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import Button from "@/components/atoms/Button/button";

import Divider from "../../../../public/divider.svg";
import Professional from "../Professionals/professionals";

export default function ProfessionalList() {
  const [professionals, setProfessionals] = useState<string[]>([
    "User 1",
    "User 2",
    "User 3"
  ]);

  const handleDelete = (indexToRemove: number) => {
    setProfessionals(
      professionals.filter((_, index) => index !== indexToRemove)
    );
  };

  return (
    <div className="flex flex-col gap-4 p-2">
      <div className="flex items-end gap-2">
        <h1 className="text-3xl">Cabeleleiras(os)</h1>
        <Link href="/staff-register">
          <Button
            size="md"
            variant="success"
            className="flex h-10 w-10 items-center justify-center rounded-full border-none p-0"
          >
            <Plus />
          </Button>
        </Link>
      </div>
      <div>
        <Image src={Divider} alt="Divider" className="bg-gray-300" />
      </div>
      <div className="mt-5 grid grid-cols-2 gap-5">
        {professionals.map((professional, index) => (
          <Professional
            key={index}
            text={professional}
            onDelete={() => handleDelete(index)}
          />
        ))}
      </div>
    </div>
  );
}
