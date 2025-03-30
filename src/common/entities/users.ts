export interface UsersEntity {
  id: string;
  salonName: string;
  email: string;
  address: string;
  neighboard: string;
  complement: string;
  number: string;
  city: string;
  zipCode: string;
  state: string;
  cnpj: string;
  phone: string;
  ownerName: string;
  image?: string;
  banner?: string;
  isOpen?: boolean;
  createdAt: Date;
  updatedAt?: Date;
  isActive?: boolean;
  comments?: string[];
  staff?: string[];
  services?: string[];
  inAnalising: boolean;
  schedules?: string[];
}
