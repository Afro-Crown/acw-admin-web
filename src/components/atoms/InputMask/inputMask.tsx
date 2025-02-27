"use client";

import { FieldValues } from "react-hook-form";
import ReactInputMask from "react-input-mask";

import { cn } from "@/lib/utils";

import { InputMaskProps } from "./types";

const InputMask = <T extends FieldValues>({
  mask,
  register,
  name,
  className,
  ...props
}: InputMaskProps<T>) => {
  return (
    <ReactInputMask
      className={cn(
        "h-8 min-w-[20px] items-center gap-1 border-b-2 border-gray-300 text-sm outline-none",
        className
      )}
      {...props}
      {...(register && register(name))}
      mask={mask}
      maskPlaceholder=""
    />
  );
};

export default InputMask;
