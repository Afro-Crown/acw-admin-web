import { HTMLProps } from "react";

import { Control, FieldErrors, FieldValues, Path } from "react-hook-form";

export interface CheckboxFieldProps<T extends FieldValues> {
  label?: string;
  control?: Control<T>;
  disabled?: boolean;
  formErrors?: FieldErrors;
  className?: HTMLProps<HTMLElement>["className"];
  name: Path<T>;
}
