"use client";

import { Controller, FieldValues } from "react-hook-form";

import Label from "@/components/atoms/Label/label";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";

import { CheckboxFieldProps } from "./types";

const CheckboxField = <T extends FieldValues>({
  label,
  control,
  disabled = false,
  name,
  className,
  formErrors
}: CheckboxFieldProps<T>) => {
  const errorMessage = (formErrors && formErrors[name]?.message) ?? null;

  return (
    <div className={cn("flex items-center gap-2")}>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <Checkbox
            checked={field.value}
            onCheckedChange={field.onChange}
            disabled={disabled}
            className={className}
            id={name}
          />
        )}
      />
      <div className="flex flex-col gap-1">
        {label && (
          <div className="flex flex-col">
            <Label name={name}>{label}</Label>
          </div>
        )}

        {errorMessage && (
          <span className="text-error-500 text-sm">
            {errorMessage.toString()}
          </span>
        )}
      </div>
    </div>
  );
};

export default CheckboxField;
