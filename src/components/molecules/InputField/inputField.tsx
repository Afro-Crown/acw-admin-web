import { useState } from "react";
import { FieldValues } from "react-hook-form";

import FormErrorLabel from "@/components/atoms/FormError/formError";
import Input from "@/components/atoms/Input/input";
import InputCurrency from "@/components/atoms/InputCurrency/InputCurrency";
import InputMask from "@/components/atoms/InputMask/inputMask";
import Label from "@/components/atoms/Label/label";

import { InputFieldProps } from "./types";
import Image from "next/image";
import EyeIcon from "../../../../public/mostrar-password.svg"; 
import EyeOffIcon from "../../../../public/ocutar-password.svg"; 

const InputField = <T extends FieldValues>({
  register,
  name,
  className,
  mask,
  formErrors,
  label,
  currency = false,
  control,
  type = "text", 
  ...props
}: InputFieldProps<T>) => {
  const [showPassword, setShowPassword] = useState(false);
  const errorMessage = formErrors && name ? formErrors[name]?.message : null;

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  if (currency && control) {
    return (
      <div className="flex flex-col gap-1 relative">
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
      <div className="flex flex-col gap-1 relative">
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
    <div className="flex flex-col gap-1 relative">
      {label && <Label>{label}</Label>}
      <Input
        {...props}
        className={`pr-10 ${className}`} 
        name={name}
        register={register}
        type={type === "password" && showPassword ? "text" : type}
      />
      {type === "password" && (
        <div
          className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
          onClick={toggleShowPassword}
        >
          <Image src={showPassword ? EyeIcon : EyeOffIcon} alt="Toggle Password Visibility" width={30} height={30} />
        </div>
      )}
      <FormErrorLabel>{errorMessage && errorMessage.toString()}</FormErrorLabel>
    </div>
  );
};

export default InputField;