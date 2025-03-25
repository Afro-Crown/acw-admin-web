export interface UsersEntity {
  id: string;
  name: string;
  email: string;
  geo: string;
  image: string;
  created_at: Date;
  updated_at: Date;
  deleted_at?: Date;
}
