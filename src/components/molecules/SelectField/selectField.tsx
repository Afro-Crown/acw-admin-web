"use client";

import { Controller, FieldValues } from "react-hook-form";

import FormErrorLabel from "@/components/atoms/FormError/formError";
import Label from "@/components/atoms/Label/label";
import Select from "@/components/atoms/Select/select";
import { cn } from "@/lib/utils";

import { SelectFieldProps } from "./types";

const SelectField = <T extends FieldValues>({
  label,
  control,
  name,
  className,
  formErrors,
  options,
  placeholder,
  emptyPlaceholder
}: SelectFieldProps<T>) => {
  const errorMessage = (formErrors && formErrors[name]?.message) ?? null;

  return (
    <div className={cn("flex flex-col gap-1")}>
      {label && <Label>{label}</Label>}
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <Select
            onChange={field.onChange}
            options={options}
            value={field.value}
            className={className}
            placeholder={placeholder}
            emptyPlaceholder={emptyPlaceholder}
          />
        )}
      />
      {errorMessage && (
        <FormErrorLabel>{errorMessage.toString()}</FormErrorLabel>
      )}
    </div>
  );
};

export default SelectField;
