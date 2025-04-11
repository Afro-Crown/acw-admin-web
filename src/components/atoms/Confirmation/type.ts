export interface ConfirmationProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
  confirmButtonText?: string;
  description?: string;
}
