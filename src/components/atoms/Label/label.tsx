import { LabelProps } from "./types";

const Label = ({ children, name }: LabelProps) => {
  return (
    <label className="text-[#2E2E2E] " htmlFor={name}>
      {children}
    </label>
  );
};

export default Label;
