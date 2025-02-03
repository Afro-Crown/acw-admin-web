import { ComponentProps } from "react";

import { Control, FieldValues, Path } from "react-hook-form";

export interface InputCurrencyProps<T extends FieldValues>
  extends ComponentProps<"input"> {
  name: Path<T>;
  control: Control<T>;
}
