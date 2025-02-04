import { LabelProps } from "./types";

const Label = ({ children, name }: LabelProps) => {
  return (
    <label className="text-base font-bold text-gray-700 " htmlFor={name}>
      {children}
    </label>
  );
};

export default Label;
