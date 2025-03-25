import { UserEntity } from "@/common/entities/users";

export interface UserContextType {
  updateUser: ({ uid, email, name, dob, phone }: Partial<UserEntity>) => void;
  allUsers?: UserEntity[] | null;
  loading: Record<string, boolean>;
  fetchAllUsers: () => void;
}
