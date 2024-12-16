"use client";
import Image from "next/image";
import { ForwardedRef, forwardRef, InputHTMLAttributes, useState } from "react";
import { FieldError } from "react-hook-form";
import showPassword from "../../../public/mostrar-password.svg";
import hidePassword from "../../../public/ocutar-password.svg";

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: FieldError;
  className?: string;
  password?: boolean;
}

// eslint-disable-next-line react/display-name
export const Input = forwardRef(
  (
    { label, className, error, password, ...rest }: IInputProps,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    const [passwordState, setPasswordState] = useState<string>('password');

    const handlePasswordButton = () => {
      if (passwordState === 'text') {
        return setPasswordState('password');
      }
      return setPasswordState('text');
    };

    return (
      <div className="py-3 text-[#2E2E2E] relative">
        {label ? (
          <label htmlFor={rest.name} className="text-black font-medium">
            {label}
          </label>
        ) : null}
        <input
          id={rest.name}
          name={rest.name}
          ref={ref}
          type={password ? passwordState : 'text'}
          {...rest}
          className={
            "w-full appearance-none dark:focus:border-orange-500 focus:outline-none focus:ring-0 focus:text-black focus:border-orange-500 border-0 border-b-2 border-b-input-bar h-10 bg-transparent p-2" +
            (className || "")
          }
        />
        {error ? (
          <p className="text-xs text-color-error">{error.message}</p>
        ) : null}
        {password ? (
          <button
            onClick={handlePasswordButton}
            className="absolute right-0 top-11 cursor-pointer"
            type="button"
          >
            {passwordState === 'text' ? (
              <Image src={hidePassword} width={30} height={30} alt={""} />
            ) : (
              <Image src={showPassword} width={30} height={30} alt={""} />
            )}
          </button>
        ) : null}
      </div>
    );
  }
);
