import { FormErrorProps } from "./types";

const FormErrorLabel = ({ children }: FormErrorProps) => {
  return (
    <div className="h-2">
      <p className="text-xs text-red-600">{children}</p>
    </div>
  );
};

export default FormErrorLabel;
