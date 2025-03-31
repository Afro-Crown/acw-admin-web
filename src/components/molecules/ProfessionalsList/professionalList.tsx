"use client";

import { useState } from "react";

import { Plus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { StaffEntity } from "@/common/entities/staff";
import Button from "@/components/atoms/Button/button";
import useAllStaff from "@/hooks/queries/useAllStaff";
import useAuth from "@/hooks/useAuth";
import { deleteStaffDoc } from "@/store/services/staff";

import Divider from "../../../../public/divider.svg";
import { ModalEditStaff } from "../ModalEditStaff/modalEditStaff";
import Professional from "../Professionals/professionals";

export default function ProfessionalList() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedStaff, setSelectedStaff] = useState<StaffEntity | null>(null);

  const { userUid } = useAuth();
  const { data: staffsFromUser, isLoading } = useAllStaff<StaffEntity[]>();

  const handleDelete = (staffUid: string) => {
    deleteStaffDoc(userUid, staffUid);
  };

  const handleEdit = (staff: StaffEntity) => {
    setSelectedStaff(staff);
    setIsModalOpen(true);
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
          staffsFromUser.map((staff) => (
            <Professional
              key={staff.id}
              text={staff.name}
              onDelete={() => handleDelete(staff.id)}
              onEdit={() => handleEdit(staff)}
            />
          ))
        ) : (
          <div className="flex h-[28rem] w-[30rem] items-center justify-center">
            {isLoading ? (
              <p className="text-lg font-light">Carregando...</p>
            ) : (
              <h1 className="text-lg text-[#949494]">
                Nenhum colaborador encontrado!
              </h1>
            )}
          </div>
        )}
      </div>
      {selectedStaff && (
        <ModalEditStaff
          isOpen={isModalOpen}
          setIsOpen={setIsModalOpen}
          userId={userUid}
          editStaff={selectedStaff}
        />
      )}
    </div>
  );
}
