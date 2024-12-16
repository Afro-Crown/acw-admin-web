import { atom } from "jotai";

export interface IUser {
    id: string;
    email: string;
    password?: string;
    name: string;
    urlImage: string | null;
    typeLogin: string;
    typeUser?: string;
    verifiedEmail: boolean;
    createdAt?: string;
    deletedAt: string | null;
}

export const UserAtom = atom<IUser>({
    id: "",
    email: "",
    name: "",
    urlImage: null,
    typeLogin: "",
    verifiedEmail: false,
    deletedAt: null
});