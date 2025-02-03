import { ComponentProps } from "react";

export interface SelectProps {
  options: Array<{
    label: string;
    value: string;
  }>;
  placeholder?: string;
  className?: ComponentProps<"div">["className"];
  value: string;
  onChange: (value: string) => void;
  emptyPlaceholder?: string;
}
