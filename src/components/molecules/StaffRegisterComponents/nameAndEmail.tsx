"use client";

import React, { useEffect } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { useForm, useFieldArray } from "react-hook-form";
import { z } from "zod";

import Button from "@/components/atoms/Button/button";
import StaffRegisterSchema from "@/validations/staffRegister";

import ChangeUser from "../../../../public/change-user.svg";
import UserIcon from "../../../../public/user-icon.svg";
import InputField from "../InputField/inputField";

type StaffRegister = z.infer<typeof StaffRegisterSchema> & {
  staffs: {
    name: string;
    email: string;
  }[];
};

interface NameAndEmailProps {
  onSuccess: (data: { name: string; email: string }[]) => void;
  setName: (name: string) => void;
  defaultStaffData?: StaffRegister["staffs"];
}

export default function NameAndEmail({
  onSuccess,
  setName,
  defaultStaffData
}: NameAndEmailProps) {
  const {
    control,
    handleSubmit,
    register,
    formState: { errors },
    watch,
    reset
  } = useForm<StaffRegister>({
    mode: "all",
    criteriaMode: "all",
    resolver: zodResolver(StaffRegisterSchema),
    defaultValues: {
      staffs:
        defaultStaffData && defaultStaffData.length > 0
          ? defaultStaffData
          : [{ name: "", email: "" }]
    }
  });

  useEffect(() => {
    reset({
      staffs:
        defaultStaffData && defaultStaffData.length > 0
          ? defaultStaffData
          : [{ name: "", email: "" }]
    });
  }, [defaultStaffData, reset]);

  const { fields, append, remove } = useFieldArray({
    control,
    name: "staffs"
  });

  const addField = () => {
    append({ name: "", email: "" });
  };

  const onSubmit = (data: StaffRegister) => {
    console.log("Dados enviados:", data.staffs);

    if (data.staffs.length > 0) {
      setName(data.staffs[0].name);
    }

    onSuccess(data.staffs);
  };

  const allNamesFilled = watch("staffs").every(
    (staff: { name: string; email: string }) => !!staff.name
  );

  return (
    <form
      className="flex w-[70rem] flex-col gap-10"
      onSubmit={handleSubmit(onSubmit, (errors) => {
        console.log(errors);
      })}
    >
      <div>
        <h1 className="pl-20 text-3xl font-medium">
          Adicione os(as) cabeleireiros(as)
        </h1>
      </div>
      {fields.map((field, index) => (
        <div key={field.id} className="flex justify-start">
          <div className="relative flex h-20 w-20 flex-col content-center items-center">
            <Image src={UserIcon} alt="UserIcon" />
            <Image
              src={ChangeUser}
              alt="ChangeUser"
              className="relative bottom-14 left-6 h-6 w-6 cursor-pointer"
            />
          </div>
          <div className="flex gap-8">
            <InputField
              className="w-[20rem]"
              name={`staffs.${index}.name`}
              register={register}
              formErrors={errors}
              label={`Nome da(o) cabeleireira(o) ${index + 1}`}
            />
            <InputField
              className="w-[20rem]"
              name={`staffs.${index}.email`}
              register={register}
              label={`E-mail da(o) cabeleireira(o) ${index + 1}`}
              optionalText="Opcional"
            />
          </div>
          {fields.length > 1 && index === fields.length - 1 && (
            <div className="flex items-center gap-4 pl-4">
              <Button
                className="border-[#FFFFFF] bg-[#FFFFFF] text-[#FF6734] shadow-lg"
                size="custom"
                onClick={() => remove(index)}
              >
                -
              </Button>
              <p>Remover</p>
            </div>
          )}
        </div>
      ))}
      <div className="flex w-[45rem] justify-between pl-14">
        <div className="flex items-center gap-4">
          <Button className="pb-1" size="custom" onClick={addField}>
            +
          </Button>
          <p>Adicionar mais</p>
        </div>
        <Button
          className="w-[15rem] text-xl font-normal"
          type="submit"
          disabled={!allNamesFilled}
        >
          Próximo
        </Button>
      </div>
    </form>
  );
}
