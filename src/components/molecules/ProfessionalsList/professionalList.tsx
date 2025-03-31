"use client";

import { useState } from "react";

import { Plus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import Button from "@/components/atoms/Button/button";

import Divider from "../../../../public/divider.svg";
import Professional from "../Professionals/professionals";
import useAuth from "@/hooks/useAuth";
import useProfile from "@/hooks/queries/useProfile";
import useAllStaff from "@/hooks/queries/useAllStaff";
import { StaffEntity } from "@/common/entities/staff";
import { deleteStaffDoc } from "@/store/services/staff";

export default function ProfessionalList() {
  const { userUid } = useAuth();
  const { data: staffsFromUser, isLoading: staffLoading } = useAllStaff<StaffEntity[]>();

  
  const handleDelete = (staffUid: string) => {
    deleteStaffDoc(userUid, staffUid)
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
          {staffsFromUser && staffsFromUser.length > 0 ? (
            staffsFromUser.map((staff, index) => (
             <Professional
               key={index}
               text={staff.name}
               onDelete={() => handleDelete(staff.id)}
              />
            ))
          ) : (
            <div className="flex w-[30rem] h-[28rem] items-center justify-center">
              <h1 className="text-lg text-[#949494]">NENHUM COLABORADOR ENCONTRADO</h1>
            </div>
          )}
        </div>
    </div>
  );
}
