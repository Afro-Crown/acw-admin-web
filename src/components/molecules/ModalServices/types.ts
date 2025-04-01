import { CreateServiceData } from "./modalServices";

export interface ModalProps {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  initialServiceData?: CreateServiceData & { id: string };
}
