import { useEffect } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle
} from "@/components/ui/dialog";
import { queryClient } from "@/store/providers/queryClient";
import { updateUserDoc } from "@/store/services/user";
import Button from "@atoms/Button/button";
import InputField from "@molecules/InputField/inputField";

import { ModalEditAddressProps } from "./types";
import useAuth from "@/hooks/useAuth";

const EditAddressSchema = z.object({
  zipCode: z.string().min(1, "CEP obrigatório"),
  address: z.string().min(1, "Endereço obrigatório"),
  neighboard: z.string().min(1, "Bairro obrigatório"),
  city: z.string().min(1, "Cidade obrigatória"),
  number: z.string().min(1, "Número obrigatório"),
  complement: z.string().optional()
});

type EditAddressData = z.infer<typeof EditAddressSchema>;

export function ModalEditAddress({
  isOpen,
  setIsOpen,
  user
}: ModalEditAddressProps) {
  const { userUid } = useAuth();
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors }
  } = useForm<EditAddressData>({
    resolver: zodResolver(EditAddressSchema),
    defaultValues: {
      zipCode: user?.zipCode || "",
      address: user?.address || "",
      neighboard: user?.neighboard || "",
      city: user?.city || "",
      number: user?.number || "",
      complement: user?.complement || ""
    }
  });
  console.log(user);
  const onSubmit = async (data: EditAddressData) => {
    const updateData = {
      zipCode: data.zipCode,
      address: data.address,
      neighboard: data.neighboard,
      city: data.city,
      number: data.number,
      complement: data.complement,
      updatedAt: new Date()
    };
    const res = await updateUserDoc({ id: userUid, ...updateData });
    if (res.error) {
      console.error(res.error);
    } else {
      queryClient.invalidateQueries(["user"]);
      setIsOpen(false);
      reset();
    }
  };

  useEffect(() => {
    reset({
      zipCode: user?.zipCode,
      address: user?.address,
      neighboard: user?.neighboard,
      city: user?.city,
      number: user?.number,
      complement: user?.complement
    });
  }, [user, reset]);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-[40rem]">
        <DialogHeader>
          <DialogTitle className="flex justify-center text-2xl font-bold">
            Novo Endereço
          </DialogTitle>
        </DialogHeader>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-6 p-8"
        >
          <div className="flex w-full justify-between">
            <InputField
              register={register}
              name="zipCode"
              label="CEP"
              placeholder="______-___"
              formErrors={errors}
              mask="99999-999"
            />
            <InputField
              register={register}
              name="city"
              label="Cidade"
              placeholder="Digite a cidade"
              formErrors={errors}
            />
          </div>
          <InputField
            register={register}
            name="address"
            label="Endereço"
            placeholder="Digite o endereço"
            formErrors={errors}
          />
          <InputField
            register={register}
            name="neighboard"
            label="Bairro"
            placeholder="Digite o bairro"
            formErrors={errors}
          />
          <div className="flex w-full justify-between">
            <InputField
              register={register}
              name="number"
              label="Número"
              placeholder="Digite o número"
              formErrors={errors}
            />
            <InputField
              register={register}
              name="complement"
              label="Complemento"
              placeholder="(opcional)"
              formErrors={errors}
            />
          </div>
          <div className="flex justify-end">
            <Button type="submit" className="rounded-full px-6 py-2">
              Salvar Alterações
            </Button>
          </div>
          <DialogFooter />
        </form>
      </DialogContent>
    </Dialog>
  );
}
