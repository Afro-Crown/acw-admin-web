"use client";

import { useState } from "react";
import Button from "../../atoms/Button/button";
import { Plus } from "lucide-react";
import Image from "next/image";
import Professional from "../Professionals/professionals";
import Divider from "../../../../public/divider.svg";

export default function ProfessionalList() {
  const [professionals, setProfessionals] = useState<string[]>(["User 1", "User 2", "User 3"]);

  const handleDelete = (indexToRemove: number) => {
    setProfessionals(professionals.filter((_, index) => index !== indexToRemove));
  };

  return (
    <div className="flex flex-col gap-4 ml-10 p-2">
      <div className="flex items-end gap-2">
        <h1 className="text-3xl">Cabeleleiras(os)</h1>
        <Button
          size="md"
          variant="success"
          className="w-10 h-10 rounded-full p-0 flex items-center justify-center border-none"
        >
          <Plus />
        </Button>
      </div>
      <div>
        <Image src={Divider} alt="Divider" className="bg-gray-300" />
      </div>
      <div className="grid grid-cols-2 gap-5 mt-5">
        {professionals.map((professional, index) => (
          <Professional key={index} text={professional} onDelete={() => handleDelete(index)} />
        ))}
      </div>
    </div>
  );
}