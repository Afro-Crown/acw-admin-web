import { UsersEntity } from "@/common/entities/users";

export interface UserContextType {
  updateUser: ({ id, email, name, geo, image }: Partial<UsersEntity>) => void;
  allUsers?: UsersEntity[] | null;
  loading: Record<string, boolean>;
  fetchAllUsers: () => void;
}
