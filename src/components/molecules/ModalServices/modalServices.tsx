/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { Path, useForm } from "react-hook-form";
import { z } from "zod";

import type { StaffEntity } from "@/common/entities/staff";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle
} from "@/components/ui/dialog";
import useAllStaff from "@/hooks/queries/useAllStaff";
import { errorToast } from "@/hooks/useAppToast";
import useAuth from "@/hooks/useAuth";
import { queryClient } from "@/store/providers/queryClient";
import { createNewServiceDoc } from "@/store/services/services";
import { CreateServiceSchema } from "@/validations/createServices";
import Button from "@atoms/Button/button";
import ImputField from "@molecules/InputField/inputField";

import { ModalProps } from "./types";

import addImagem from "../../../../public/service-schedule-add-img.svg";
import CheckboxField from "../CheckboxField/checkboxField";

const services = ["Cortes", "Tinturas", "Tranças", "Pacotes", "Infantil"];

export type CreateServiceData = z.infer<typeof CreateServiceSchema>;

export function ModalServices({ isOpen, setIsOpen }: ModalProps) {
  const { userUid } = useAuth();
  // const { data: user } = useProfile(userUid);
  const [selectedServiceIndex, setSelectedServiceIndex] = useState<
    number | null
  >(null);

  const { data: staffsFromUser, isLoading: staffLoading } =
    useAllStaff<StaffEntity[]>();

  const [selectedStaffs, setSelectedStaffs] = useState<boolean[]>([]);
  useEffect(() => {
    if (staffsFromUser && staffsFromUser.length > 0) {
      setSelectedStaffs(Array(staffsFromUser.length).fill(false));
    }
  }, [staffsFromUser]);

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors }
  } = useForm<CreateServiceData>({
    resolver: zodResolver(CreateServiceSchema),
    defaultValues: {
      staffs: []
    }
  });

  const handleServiceClick = (index: number) => {
    setSelectedServiceIndex((prev) => (prev === index ? null : index));
  };

  const handleStaffClick = (index: number) => {
    const newSelected = [...selectedStaffs];
    newSelected[index] = !newSelected[index];
    setSelectedStaffs(newSelected);
  };

  const onSubmit = (data: CreateServiceData) => {
    if (selectedServiceIndex === null) {
      errorToast("Selecione ao menos um serviço.");
      return;
    }
    const serviceSelected = services[selectedServiceIndex];

    const staffsSelected: string[] = [];
    selectedStaffs.forEach((isSelected, index) => {
      if (isSelected) {
        staffsSelected.push(staffsFromUser![index].name);
      }
    });
    if (staffsSelected.length === 0) {
      errorToast("Selecione ao menos um Cabeleleiro.");
      return;
    }

    const finalData: CreateServiceData = {
      ...data,
      services: serviceSelected,
      staffs: staffsSelected.map((name) => ({ name }))
    };
    queryClient.invalidateQueries(["services"]);
    createNewServiceDoc(userUid, finalData);
    setIsOpen(false);
    handleReset();
  };

  const handleReset = () => {
    reset();
    setSelectedServiceIndex(null);
    if (staffsFromUser && staffsFromUser.length > 0) {
      setSelectedStaffs(Array(staffsFromUser.length).fill(false));
    }
  };

  if (staffLoading) {
    return <div>Carregando staffs...</div>;
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-[60rem]">
        <DialogHeader>
          <DialogTitle className="flex justify-center text-2xl font-bold">
            Cadastrar Serviços
          </DialogTitle>
        </DialogHeader>
        <form
          onSubmit={handleSubmit(onSubmit, (error) => {
            console.log(error);
          })}
          className="flex justify-between"
        >
          {/* Left side: seleção de serviço e inputs */}
          <div className="flex w-[25rem] flex-col gap-6">
            {/* Seleção única de serviço */}
            <div className="flex flex-col gap-2 pl-8">
              {services.map((service, index) => (
                <button
                  type="button"
                  key={service}
                  onClick={() => handleServiceClick(index)}
                  className={`rounded border px-4 py-2 ${
                    selectedServiceIndex === index
                      ? "bg-primary text-black"
                      : "bg-white text-gray-700"
                  }`}
                >
                  {service}
                </button>
              ))}
            </div>
            <div className="flex flex-col gap-5 pl-8">
              <ImputField
                register={register}
                name="name"
                label="Nome"
                placeholder="Ex: Hidratação + Pontas"
                formErrors={errors}
              />
              <ImputField
                register={register}
                name="preco"
                label="Preço"
                placeholder="R$"
                mask="R$ 999,99"
                formErrors={errors}
              />
              <div className="flex flex-col text-gray-700">
                <span className="text-sm font-semibold">Duração</span>
                <div className="mt-1 flex items-center gap-2 text-lg text-gray-400">
                  <div className="relative flex flex-col items-center">
                    <input
                      type="text"
                      placeholder="00"
                      className="w-6 border-b border-gray-400 bg-transparent text-center text-xs placeholder-gray-400 outline-none"
                      {...register("horas")}
                    />
                  </div>
                  <span className="text-sm">h</span>
                  <div className="relative flex flex-col items-center">
                    <input
                      type="text"
                      placeholder="00"
                      className="w-6 border-b border-gray-400 bg-transparent text-center text-xs placeholder-gray-400 outline-none"
                      {...register("minutos")}
                    />
                  </div>
                  <span className="text-sm">min</span>
                </div>
              </div>
              <div className="mt-4 flex flex-col gap-2 text-gray-700">
                <label className="text-sm font-semibold">Descrição</label>
                <textarea
                  {...register("descricao")}
                  placeholder="(Opcional)"
                  className="h-32 w-full resize-none rounded border p-2 text-gray-700 placeholder-gray-400 outline-none"
                />
              </div>
            </div>
          </div>
          <div className="ml-20 flex w-[25rem] flex-col justify-between">
            <div className="flex flex-col gap-4">
              <p className="font-semibold">Adicione fotos</p>
              <div className="flex gap-2">
                <Image src={addImagem} alt="Adicionar imagem" />
                <Image src={addImagem} alt="Adicionar imagem" />
                <Image src={addImagem} alt="Adicionar imagem" />
              </div>
              <p className="font-semibold">
                Selecione quem realiza este serviço:
              </p>
              <div className="flex flex-col gap-2">
                {staffsFromUser?.length === 0 && (
                  <span className="text-sm text-gray-500">
                    Nenhum cabeleireiro disponível
                  </span>
                )}
                {staffsFromUser?.map((staff, index) => (
                  <div key={staff.id} onClick={() => handleStaffClick(index)}>
                    <CheckboxField
                      name={staff.name as Path<CreateServiceData>}
                      label={staff.name}
                      control={control}
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-end">
              <Button
                type="submit"
                className="flex h-[45px] self-center truncate rounded-full px-[33px] font-light"
                disabled={staffsFromUser?.length === 0}
              >
                Adicionar serviço &gt;
              </Button>
            </div>
          </div>
          <DialogFooter />
        </form>
      </DialogContent>
    </Dialog>
  );
}
