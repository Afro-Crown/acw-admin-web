import { Controller, FieldValues } from "react-hook-form";
import { NumericFormat } from "react-number-format";

import { cn } from "@/lib/utils";

import { InputCurrencyProps } from "./types";

const InputCurrency = <T extends FieldValues>({
  name,
  className,
  control,
  ...props
}: InputCurrencyProps<T>) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { ref, ...rest } }) => (
        <NumericFormat
          thousandSeparator="."
          decimalSeparator=","
          prefix="R$ "
          decimalScale={2}
          getInputRef={ref}
          className={cn(
            "ring-offset-primary-50 focus-within:border-primary-300 focus-within:ring-primary-50 h-11 items-center gap-1 rounded-lg border border-gray-300 px-3 text-sm outline-none focus-within:ring-1 focus-within:ring-offset-2",
            className
          )}
          {...rest}
          {...props}
          type="tel"
          value={rest.value}
          defaultValue={rest.value}
        />
      )}
    />
  );
};

export default InputCurrency;
