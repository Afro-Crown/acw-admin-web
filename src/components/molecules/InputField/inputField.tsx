import { FieldValues } from "react-hook-form";

import FormErrorLabel from "@/components/atoms/FormError/formError";
import Input from "@/components/atoms/Input/input";
import InputCurrency from "@/components/atoms/InputCurrency/InputCurrency";
import InputMask from "@/components/atoms/InputMask/inputMask";
import Label from "@/components/atoms/Label/label";

import { InputFieldProps } from "./types";

const InputField = <T extends FieldValues>({
  register,
  name,
  className,
  mask,
  formErrors,
  label,
  currency = false,
  control,
  ...props
}: InputFieldProps<T>) => {
  const errorMessage = formErrors && name ? formErrors[name]?.message : null;

  if (currency && control) {
    return (
      <div className="flex flex-col gap-1">
        {label && <Label>{label}</Label>}
        <InputCurrency
          className={className}
          name={name}
          control={control}
          {...props}
        />

        <FormErrorLabel>
          {errorMessage && errorMessage.toString()}
        </FormErrorLabel>
      </div>
    );
  }

  if (mask) {
    return (
      <div className="flex flex-col gap-1">
        {label && <Label>{label}</Label>}
        <InputMask
          {...props}
          className={className}
          mask={mask}
          name={name}
          register={register}
        />

        <FormErrorLabel>
          {errorMessage && errorMessage.toString()}
        </FormErrorLabel>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-1">
      {label && <Label>{label}</Label>}
      <Input {...props} className={className} name={name} register={register} />

      <FormErrorLabel>{errorMessage && errorMessage.toString()}</FormErrorLabel>
    </div>
  );
};

export default InputField;
