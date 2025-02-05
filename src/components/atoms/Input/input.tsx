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
        "h-8 items-center gap-1 border-gray-300 min-w-[20px] text-sm outline-none border-b-2",
        className
      )}
      {...props}
      {...(register && name ? register(name) : {})}
    />
  );
};

export default Input;
