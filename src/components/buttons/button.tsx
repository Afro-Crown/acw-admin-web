import React from "react";

interface ButtonsProps {
  children: string;
  disabled?: boolean;
}

export const Buttons = ({ children, disabled = false }: ButtonsProps) => {
  return (
    <>
      {disabled ? (
        <button
          className="w-full p-3 bg-gradient-button-block font-semibold text-lg rounded-lg my-8 cursor-no-drop"
          type="submit"
          disabled
        >
          {children}
        </button>
      ) : (
        <button
        className="w-full p-3 bg-gradient-to-b from-gradient-primary to-gradient-secondary hover:to-gradient-hover font-semibold text-lg rounded-lg my-8"
          type="submit"
        >
          {children}
        </button>
      )}
    </>
  );
};