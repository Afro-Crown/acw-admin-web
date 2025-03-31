import { UsersEntity } from "@/common/entities/users";

export interface ModalEditAddressProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  user: UsersEntity | null;
}
