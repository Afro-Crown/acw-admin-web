export interface ShopEntity {
    id: string;
    name: string;
    email: string;
    address: string;
    neighboard: string;
    complement: string;
    number: string;
    city: string;
    cep: string;
    state: string;
    cnpj: string;
    phone: string;
    owner_name: string;
    image: string;
    banner: string;
    isOpen: boolean;
    createdAt: Date;
    updatedAt: Date;
    isActive: boolean;
    comments: string[];
    staff: string[];
    services: string[];
    inAnalising: boolean;
    schedules: string[];
}