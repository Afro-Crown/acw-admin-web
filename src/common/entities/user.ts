export interface UserEntity {
  name: string;
  email: string;
  phone: string;
  dob: Date;
  uid?: string;
  role?: string;
  displayName?: string;
}
