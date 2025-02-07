import { FieldValues } from "react-hook-form";

import { cn } from "@/lib/utils";

import { InputProps } from "./types";

const Input = <T extends FieldValues>({
  register,
  name,
  className,
  ...props
}: InputProps<T>) => {
  return (
    <input
      className={cn(
        "h-8 min-w-[20px] items-center gap-1 border-b-2 border-gray-300 text-sm outline-none",
        className
      )}
      {...props}
      {...(register && name ? register(name) : {})}
    />
  );
};

export default Input;
