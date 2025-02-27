import {
  Dialog,
  DialogContent,
  // DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle
} from "@/components/ui/dialog";

import { ModalProps } from "./types";
import Button from "@atoms/Button/button"
import { useState } from "react";
import ImputField from "@molecules/InputField/inputField";
import { useForm } from "react-hook-form";
import Image from "next/image";
import addImagem from "../../../../public/service-schedule-add-img.svg";

const services = ["Cortes", "Tinturas", "Tranças", "Pacotes", "Infantil"];

export function ModalServices({ isOpen, setIsOpen }: ModalProps) {
  const [selectedServices, setSelectedServices] = useState<boolean[]>(Array(5).fill(false));
  
  const { register, handleSubmit } = useForm();
  
  const handleServicesClick = (index: number) => {
    const newSelectedServices = [...selectedServices];
    newSelectedServices[index] = !newSelectedServices[index];
    setSelectedServices(newSelectedServices);
  };

  const onSubmit = (data: any) => {
    const selectedServicesArray: string[] = [];
    selectedServices.forEach((isSelected, index) => {
      if (isSelected) {
        selectedServicesArray.push(services[index]);
      }
    });
    console.log({ ...data, services: selectedServicesArray });
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-[60rem]">
        <DialogHeader>
          <DialogTitle className="flex justify-center font-bold text-2xl">Cadastrar Serviços</DialogTitle>
          {/* <DialogDescription>Descrição</DialogDescription> */}
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)} className="flex justify-between">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col pl-8 gap-2">
              <div className="flex gap-2">
                {services.slice(0, 3).map((service, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => handleServicesClick(index)}
                    className={`w-[7rem] h-[2rem] rounded-lg bg-inpu ${selectedServices[index] ? "bg-[#FFD6AD] text-[#FF6734]" : "bg-input text-[#616161]"}`}
                  >
                    {service}
                  </button>
                ))}
              </div>
              <div className="flex gap-2">
                {services.slice(3).map((service, index) => (
                  <button
                    key={index + 3}
                    type="button"
                    onClick={() => handleServicesClick(index + 3)}
                    className={`w-[7rem] h-[2rem] rounded-lg bg-inpu ${selectedServices[index + 3] ? "bg-[#FFD6AD] text-[#FF6734]" : "bg-input text-[#616161]"}`}
                  >
                    {service}
                  </button>
                ))}
              </div>
            </div>
            <div className="flex flex-col pl-8 gap-5">
              <ImputField
                register={register}
                name="name"
                label="Nome"
                placeholder="Ex: Hidratação + Pontas"
              />
              <ImputField
                register={register}
                name="preco"
                label="Preço"
                placeholder="R$"
              />
              <div className="flex flex-col text-gray-700">
                <span className="text-sm font-semibold">Duração</span>
                <div className="flex items-center gap-2 text-gray-400 text-lg mt-1">
                  <div className="relative flex flex-col items-center">
                    <input
                      type="text"
                      placeholder="00"
                      className="w-6 border-b border-gray-400 text-center text-xs bg-transparent outline-none placeholder-gray-400"
                    />
                  </div>
                  <span className="text-sm">h</span>
                  <div className="relative flex flex-col items-center">
                    <input
                      type="text"
                      placeholder="00"
                      className="w-6 border-b border-gray-400 text-center text-xs bg-transparent outline-none placeholder-gray-400"
                    />
                  </div>
                  <span className="text-sm">min</span>
                </div>
              </div>
              <div className="flex flex-col text-gray-700 mt-4 gap-2">
                <label className="text-sm font-semibold">Descrição</label>
                <textarea
                  {...register("descricao")}
                  placeholder="(Opicional)"
                  className="w-full h-32 p-2 border rounded text-gray-700 outline-none placeholder-gray-400 resize-none"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-between ml-20 w-[25rem]">
            <div className="flex flex-col gap-4">
              <p>Adicione fotos</p>
              <div className="flex gap-2">
                <Image src={addImagem} alt="Adicionar imagem" />
                <Image src={addImagem} alt="Adicionar imagem" />
                <Image src={addImagem} alt="Adicionar imagem" />
              </div>
              <p>Selecione quem realiza este serviço:</p>
              <div className="flex flex-col gap-2">
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    {...register("realizadoPorPessoa")}
                    className="appearance-none h-5 w-5 rounded-sm border border-gray-600 checked:bg-[#2E2E2E] focus:outline-none"
                  />
                  <span className="text-sm">Ana</span>
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    {...register("realizadoPorEmpresa")}
                    className="appearance-none h-5 w-5 rounded-sm border border-gray-600 checked:bg-[#2E2E2E] focus:outline-none"
                  />
                  <span className="text-sm">Margaret</span>
                </label>
              </div>
            </div>
            <div className="flex justify-end">
              <Button type="submit" className="flex self-center h-[45px] px-[33px] rounded-full font-light truncate">
                Adicionar serviço&gt;
              </Button>
            </div>
          </div>
          <DialogFooter>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}