import { X } from "lucide-react";
import { ConfirmationProps } from "./type";
import Button from "../Button/button";

export default function Confirmation({
  isOpen,
  onClose,
  onConfirm,
  title,
  confirmButtonText = "Excluir serviço",
  description,
}: ConfirmationProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex flex-col items-center justify-center z-50">
      <div className="bg-white rounded-2xl p-6 max-w-sm w-full mx-4 relative">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
        >
          <X size={20} />
        </button>

        <div className="mt-5">
          <h3 className="text-md font-light">{title}</h3>
          {description && (
            <p className="mt-2 text-sm text-gray-500">{description}</p>
          )}
        </div>

        <div className="my-4 flex justify-center">
          <Button
            onClick={onConfirm}
            className="px-4 py-2 text-sm font-medium text-[#810000] bg-[#810000] bg-opacity-10 rounded-full hover:bg-opacity-20 border-none"
            size="sm"
          >
            {confirmButtonText}
          </Button>
        </div>
      </div>
    </div>
  );
}
