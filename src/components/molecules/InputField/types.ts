import { ComponentProps } from "react";

import {
  Control,
  FieldErrors,
  FieldValues,
  Path,
  UseFormRegister
} from "react-hook-form";

export interface InputFieldProps<T extends FieldValues>
  extends ComponentProps<"input"> {
  mask?: string;
  name: Path<T>;
  register: UseFormRegister<T>;
  formErrors?: FieldErrors;
  currency?: boolean;
  control?: Control<T>;
  label?: string;
}
