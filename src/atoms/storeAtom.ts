import {atom} from "jotai";

export interface IStore{
    address: string;
    email: string;
    cnpj: string;
    salon_name: string;
    owner_name: string;
    zip_code: string;
    city: string;
    neighborhood: string;
    address_number: string;
    complement: string;
    phone: string;
};


export const StoreAtom = atom<IStore>({
    address: '',
    email: '',
    cnpj: '',
    salon_name: '',
    owner_name: '',
    zip_code: '',
    city: '',
    neighborhood: '',
    address_number: '',
    complement: '',
    phone: '',
});
