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
        "h-8 items-center gap-1 border-gray-300 min-w-[20px] text-sm outline-none border-b-2",
        className
      )}
      {...props}
      {...(register && register(name))}
      mask={mask}
      maskPlaceholder={null}
    />
  );
};

export default InputMask;
