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
    <div className="flex w-full flex-col gap-4 p-2 lg:w-1/2">
      <div className="flex items-end gap-2">
        <h1 className="text-2xl md:text-3xl">Cabeleireiras(os)</h1>
        <Link href="/staff-register">
          <Button
            size="md"
            variant="success"
            className="flex h-8 w-8 items-center justify-center rounded-full border-none p-0 md:h-10 md:w-10"
          >
            <Plus />
          </Button>
        </Link>
      </div>
      <div>
        <Image src={Divider} alt="Divider" className="w-full bg-gray-300" />
      </div>
      <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2 md:gap-5">
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
          <div className="flex h-[20rem] w-full items-center justify-center md:h-[24rem] lg:h-[28rem]">
            {isLoading ? (
              <p className="text-base font-light md:text-lg">Carregando...</p>
            ) : (
              <h1 className="text-center text-base text-[#949494] md:text-lg">
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
