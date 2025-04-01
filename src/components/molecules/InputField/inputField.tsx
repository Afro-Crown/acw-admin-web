import { useState } from "react";

import Image from "next/image";
import { FieldValues } from "react-hook-form";

import FormErrorLabel from "@/components/atoms/FormError/formError";
import Input from "@/components/atoms/Input/input";
import InputCurrency from "@/components/atoms/InputCurrency/InputCurrency";
import InputMask from "@/components/atoms/InputMask/inputMask";
import Label from "@/components/atoms/Label/label";

import { InputFieldProps } from "./types";

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
  optionalText,
  ...props
}: InputFieldProps<T>) => {
  const [showPassword, setShowPassword] = useState(false);
  const errorMessage = formErrors && name ? formErrors[name]?.message : null;

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  if (currency && control) {
    return (
      <div className="relative flex flex-col gap-1">
        {label && (
          <Label>
            <span className="font-medium">{label}</span>
          </Label>
        )}
        <InputCurrency
          className={className}
          name={name}
          control={control}
          {...props}
        />
        <FormErrorLabel>
          {errorMessage && errorMessage.toString()}
        </FormErrorLabel>
        {optionalText && (
          <p className="text-sm text-gray-500 opacity-75">{optionalText}</p>
        )}
      </div>
    );
  }

  if (mask) {
    return (
      <div className="relative flex flex-col gap-1">
        {label && (
          <Label>
            <span className="font-medium">{label}</span>
          </Label>
        )}
        <InputMask
          {...props}
          className={className}
          mask={mask}
          name={name}
          register={register}
        >
          {undefined}
        </InputMask>
        <FormErrorLabel>
          {errorMessage && errorMessage.toString()}
        </FormErrorLabel>
        {optionalText && (
          <p className="text-sm text-gray-500 opacity-75">{optionalText}</p>
        )}
      </div>
    );
  }

  return (
    <div className="relative flex flex-col gap-1">
      {label && (
        <Label>
          <span className="font-medium">{label}</span>
        </Label>
      )}
      <Input
        {...props}
        className={`pr-10 ${className}`}
        name={name}
        register={register}
        type={type === "password" && showPassword ? "text" : type}
      />
      {type === "password" && (
        <div
          className="absolute right-0 top-[28px] flex cursor-pointer items-center pr-3"
          onClick={toggleShowPassword}
        >
          <Image
            src={showPassword ? EyeIcon : EyeOffIcon}
            alt="Toggle Password Visibility"
            width={30}
            height={30}
          />
        </div>
      )}
      <FormErrorLabel>{errorMessage && errorMessage.toString()}</FormErrorLabel>
      {optionalText && (
        <p className="text-sm text-gray-500 opacity-75">{optionalText}</p>
      )}
    </div>
  );
};

export default InputField;
