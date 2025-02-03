import { VariantProps } from "tailwind-variants";

import { buttonVariants } from "./button";

export type Ref = HTMLButtonElement;

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  loading?: boolean;
  className?: string;
  classNameText?: string;
}
