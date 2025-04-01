import { UsersEntity } from "@/common/entities/users";

export interface UserContextType {
  updateUser: ({
    id,
    salonName,
    email,
    address,
    neighboard,
    complement,
    number,
    city,
    zipCode,
    state,
    cnpj,
    phone,
    ownerName,
    image,
    banner,
    isOpen,
    comments,
    staff,
    services,
    inAnalising,
    schedules
  }: Partial<UsersEntity>) => void;
  allUsers?: UsersEntity[] | null;
  loading: Record<string, boolean>;
  fetchAllUsers: () => void;
  saveSignUpDraft: (data: Partial<UsersEntity>) => void;
  signUpDraft: Partial<UsersEntity>;
}
