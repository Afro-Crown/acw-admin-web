"use client";

import React, { useState } from "react";
import InputField from "../InputField/inputField";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Button from "@/components/atoms/Button/button";
import StaffRegisterSchema from "@/validations/staffRegister";
import UserIcon from "../../../../public/user-icon.svg";
import ChangeUser from "../../../../public/change-user.svg";
import Image from "next/image";

type StaffRegister = z.infer<typeof StaffRegisterSchema> & {
  [key: `name${number}`]: string;
  [key: `email${number}`]: string;
};

interface NameAndEmailProps {
  onSuccess: (data: { name: string; email: string }) => void;
  setName: (name: string) => void;
}

export default function NameAndEmail({ onSuccess, setName }: NameAndEmailProps) {
  const {
    handleSubmit,
    register,
    formState: { errors },
    resetField,
    watch
  } = useForm<StaffRegister>({
    mode: "all",
    criteriaMode: "all",
    resolver: zodResolver(StaffRegisterSchema)
  });

  const [fields, setFields] = useState([{ id: 1, profileImage: null as string | null }]);
  const [showRemoveButton, setShowRemoveButton] = useState(false);

  const addField = () => {
    const newFieldId = fields.length + 1;
    setFields([...fields, { id: newFieldId, profileImage: null }]);
    resetField(`name${newFieldId}`);
    resetField(`email${newFieldId}`);
    setShowRemoveButton(true);
  };

  const removeField = (id: number) => {
    setFields(fields.filter(field => field.id !== id));
    if (fields.length === 2) {
      setShowRemoveButton(false);
    }
  };

  const onSubmit = (data: StaffRegister) => {
    const allNamesFilled = fields.map(field => data[`name${field.id}`]);
      console.log(data)
      console.log(fields)
    if (!allNamesFilled) {
      console.log("Por favor, preencha todos os nomes.");
      return;
    }
    const { name1, email1 } = data;
    setName(name1);
    onSuccess({ name: name1, email: email1 || "" });
  };

  const allNamesFilled = fields.map((field,index) => watch(`name${index}`));

  return (
    <div className="flex flex-col w-[70rem] gap-10">
      <div>
        <h1 className="text-3xl font-medium pl-20">Adicione os(as) cabeleireiros(as)</h1>
      </div>
      {fields.map((field, index) => (
        <div key={index + 1} className="flex justify-start">
          <div className="relative flex h-20 w-20 flex-col content-center items-center">
            <Image src={UserIcon} alt="UserIcon" />
            <Image src={ChangeUser} alt="ChangeUser" className="relative bottom-14 left-6 h-6 w-6 cursor-pointer" />
          </div>
          <div className="flex gap-8">
            <InputField
              className="w-[20rem]"
              name={`name${index + 1}`}
              register={register}
              formErrors={errors}
              label={`Nome da(o) cabaileireira(o) ${index + 1}`}
            />
            <InputField
              className="w-[20rem]"
              name={`email${index + 1}`}
              register={register}
              label={`E-mail da(o) cabaileireira(o) ${index + 1}`}
              optionalText="Opcional"
            />
          </div>
          {showRemoveButton && index === fields.length - 1 && (
            <div className="flex items-center pl-4 gap-4">
              <Button className="text-[#FF6734] bg-[#FFFFFF] border-[#FFFFFF] shadow-lg" size="custom" onClick={() => removeField(field.id)}>-</Button>
              <p>Remover</p>
            </div>
          )}
        </div>
      ))}
      <div className="flex justify-between w-[45rem] pl-14">
        <div className="flex items-center gap-4">
          <Button className="pb-1" size="custom" onClick={addField}>+</Button>
          <p>Adicionar mais</p>
        </div>
        <Button className="w-[15rem] text-xl font-normal" type="submit" onClick={handleSubmit(onSubmit)} disabled={!allNamesFilled}>Próximo</Button>
      </div>
    </div>
  );
}