import { StaffEntity } from "@/common/entities/staff";

export interface ModalEditStaffProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  editStaff: StaffEntity;
  userId: string;
  onUpdateSuccess?: () => void;
}
