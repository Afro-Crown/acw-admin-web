import { forwardRef } from "react";

import { Slot } from "@radix-ui/react-slot";
import { tv } from "tailwind-variants";

import { cn } from "@/lib/utils";

import { ButtonProps, Ref } from "./types";

import LoadingComponent from "../Loading/loading";

export const buttonVariants = tv({
  base: "rounded-lg outline-none flex flex-row items-center justify-center gap-2 transition-colors cursor-pointer border disabled:cursor-not-allowed font-semibold",
  variants: {
    size: {
      sm: "py-2 px-3.5 text-sm",
      md: "h-11 px-4 text-sm",
      lg: "py-2.5 px-[18px] text-base",
      xl: "py-3 px-5 text-base",
      xxl: "py-4 px-7 text-lg"
    },
    variant: {
      success:
        "bg-primary-600 hover:bg-primary-700 disabled:bg-primary-50 disabled:border-primary-50 active:bg-primary-600 border-primary-600 hover:border-primary-700 text-base-white disabled:text-primary-400",
      "secondary-gray":
        "border-gray-300 bg-base-white hover:bg-gray-50 disabled:bg-gray-50 disabled:border-gray-200 text-gray-700 disabled:text-gray-300",
      "secondary-color":
        "bg-primary-50 border-primary-700 hover:bg-primary-100 hover:border-primary-100 disabled:bg-primary-25 disabled:border-primary-25 text-primary-800 disabled:text-primary-300",
      "tertiary-gray":
        "bg-transparent border-transparent hover:bg-gray-50 text-gray-600 disabled:text-gray-300",
      "tertiary-color":
        "bg-transparent border-transparent hover:bg-primary-50 text-primary-700 disabled:text-gray-300",
      destructive:
        "bg-error-600 border-error-600 hover:border-bg-error-700 hover:bg-error-700 disabled:bg-error-200 disabled:border-error-200 text-base-white disabled:text-base-white"
    }
  },
  defaultVariants: {
    size: "md",
    variant: "success"
  }
});

const Button = forwardRef<Ref, ButtonProps>(
  (
    {
      loading = false,
      disabled,
      className,
      size,
      variant = "success",
      asChild = false,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";

    const loadingVariant = {
      "secondary-color": "text-primary-600",
      "secondary-gray": "text-gray-800",
      success: "text-base-white",
      destructive: "text-base-white",
      "tertiary-color": "text-base-white",
      "tertiary-gray": "text-base-white"
    } as const;

    if (loading) {
      return (
        <Comp
          className={buttonVariants({
            className,
            size,
            variant
          })}
          ref={ref}
          disabled={true}
        >
          <LoadingComponent
            className={cn("h-4 w-4", loadingVariant[variant])}
          />
        </Comp>
      );
    }

    return (
      <Comp
        disabled={disabled}
        className={buttonVariants({
          className,
          size,
          variant
        })}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export default Button;
