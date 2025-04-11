"use client";

import React, { useState } from "react";

import { Pencil, Trash2 } from "lucide-react";
import Image from "next/image";
import { useForm } from "react-hook-form";

import { Dialog, DialogContent } from "@/components/ui/dialog";
import useProfile from "@/hooks/queries/useProfile";
import useAuth from "@/hooks/useAuth";
import { updateUserAuth } from "@/store/services/user";

import { ModalConfigProps } from "./types";

import ButtonOff from "../../../../public/button-off.svg";

interface FormData {
  email: string;
  password: string;
}

export function ModalConfig({ isOpen, setIsOpen }: ModalConfigProps) {
  const { userUid } = useAuth();
  const { data: user } = useProfile(userUid);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isDirty }
  } = useForm<FormData>({
    defaultValues: {
      email: user?.email,
      password: ""
    }
  });

  const [editingField, setEditingField] = useState<"email" | "password" | null>(
    null
  );
  const [isValid, setIsValid] = useState(false);

  const toggleEditField = (field: "email" | "password") => {
    setEditingField((prev) => (prev === field ? null : field));
  };

  const onSubmit = async (data: FormData) => {
    try {
      const result = await updateUserAuth(
        data.email,
        data.password || undefined
      );
      if (result.error) {
        console.error("Erro ao atualizar no Firebase Auth:", result.error);
        return;
      }
      console.log("Dados atualizados no Firebase Auth:", data);
      setEditingField(null);
      reset(data);
    } catch (error) {
      console.error("Erro ao atualizar no Firebase Auth:", error);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="left-auto right-[-16rem] top-[50vh] h-screen p-6 sm:rounded-none">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mt-4 flex flex-col gap-4"
        >
          <div>
            <div className="flex items-center gap-2">
              <label className="block text-sm font-bold text-gray-700">
                E-mail do salão
              </label>
              <Pencil
                size={16}
                className="cursor-pointer fill-black stroke-white stroke-1"
                onClick={() => toggleEditField("email")}
              />
            </div>
            {editingField === "email" ? (
              <input
                type="email"
                autoFocus
                {...register("email", {
                  required: "O campo e-mail é obrigatório",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Formato de e-mail inválido"
                  }
                })}
                className="mt-1 block w-full rounded border border-gray-300 p-1 focus:outline-none"
              />
            ) : (
              <p
                className="mt-1 block w-full cursor-pointer rounded border border-gray-200 bg-gray-100 p-1"
                onClick={() => toggleEditField("email")}
              >
                {user?.email || "Clique para editar"}
              </p>
            )}
            {errors.email && (
              <span className="text-xs text-red-500">
                {errors.email.message}
              </span>
            )}
          </div>
          <div>
            <div className="flex items-center gap-2">
              <label className="block text-sm font-bold text-gray-700">
                Senha
              </label>
              <Pencil
                size={16}
                className="cursor-pointer fill-black stroke-white stroke-1"
                onClick={() => toggleEditField("password")}
              />
            </div>
            {editingField === "password" ? (
              <input
                type="password"
                {...register("password", {
                  minLength: {
                    value: 6,
                    message: "A senha deve ter no mínimo 6 caracteres"
                  }
                })}
                className="mt-1 block w-full rounded border border-gray-300 p-1 focus:outline-none"
                autoFocus
                placeholder="Digite a nova senha"
              />
            ) : (
              <p
                className="mt-1 block w-full cursor-pointer rounded border border-gray-200 bg-gray-100 p-1"
                onClick={() => toggleEditField("password")}
              >
                ********
              </p>
            )}
            {errors.password && (
              <span className="text-xs text-red-500">
                {errors.password.message}
              </span>
            )}
          </div>

          <div className="mt-4 grid gap-4">
            <p className="text-sm font-light text-[#949494]">Notificações</p>
            <div className="flex justify-between gap-2">
              <div className="flex flex-col gap-2">
                <p className="text-sm font-medium">
                  Confirmar os agendamentos manualmente
                </p>
                <p className="text-xs font-light">
                  Se esta opção estiver inativa os agendamentos são confirmados
                  automaticamente
                </p>
              </div>
              <button type="button" onClick={() => setIsValid(!isValid)}>
                <Image
                  src={ButtonOff}
                  alt="ButtonOff"
                  className="cursor-pointer"
                />
              </button>
            </div>
          </div>
          <div className="mt-8 flex justify-between">
            <button
              type="submit"
              disabled={!isDirty}
              className="flex h-8 w-36 items-center justify-center gap-2 rounded-sm bg-button text-white disabled:opacity-50"
            >
              Salvar alterações
            </button>
            <button
              type="button"
              className="flex h-8 w-36 items-center justify-center gap-2 rounded-sm bg-[#A21A1A1A] text-[#A21A1A]"
              onClick={() => {
                // Lógica para exclusão de conta
              }}
            >
              <Trash2 size={20} strokeWidth={1.25} className="text-[#A21A1A]" />
              Excluir conta
            </button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
