import { HTMLProps } from "react";

import { Control, FieldErrors, FieldValues, Path } from "react-hook-form";

import { SelectProps } from "@/components/atoms/Select/types";

export interface SelectFieldProps<T extends FieldValues> {
  label?: string;
  control: Control<T>;
  formErrors?: FieldErrors;
  className?: HTMLProps<HTMLElement>["className"];
  name: Path<T>;

  options: SelectProps["options"];
  placeholder?: SelectProps["placeholder"];
  emptyPlaceholder?: SelectProps["emptyPlaceholder"];
}
