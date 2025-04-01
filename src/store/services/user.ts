/* eslint-disable no-useless-catch */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { getAuth, User } from "firebase/auth";
import {
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  query,
  setDoc,
  updateDoc
} from "firebase/firestore";

import { UsersEntity } from "@/common/entities/users";
import firebaseApp from "@/config/firebase";
import { userMapper } from "@/utils/userMapper";

import { queryClient } from "../providers/queryClient";

const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);
const tableName = "users";

export const createNewUserDoc = async (data: UsersEntity) => {
  try {
    await setDoc(doc(db, tableName, data.id || ""), {
      salonName: data.salonName,
      email: data.email,
      address: data.address,
      neighboard: data.neighboard,
      complement: data.complement,
      number: data.number,
      city: data.city,
      cep: data.zipCode,
      state: data.state,
      cnpj: data.cnpj,
      phone: data.phone,
      ownerName: data.ownerName,
      image: data.image ?? null,
      banner: data.banner ?? null,
      isOpen: data.isOpen,
      createdAt: data.createdAt,
      updatedAt: data.updatedAt || null,
      isActive: data.isActive || null,
      comments: data.comments,
      staff: data.staff,
      services: data.services,
      inAnalising: data.inAnalising,
      schedules: data.schedules
    });
    return { error: null };
  } catch (error: any) {
    return { error: error.message };
  }
};

export const getUserDoc = async (id: string) => {
  if (id === "") return null;
  const docRef = doc(db, tableName, id);
  console.log(docRef);
  const data = await getDoc(docRef);
  return data.data() || null;
};

export const getAllUsers = async () => {
  const usersRef = collection(db, tableName);
  const q = query(usersRef);
  const querySnapshot = await getDocs(q);
  const users: UsersEntity[] = [];
  querySnapshot.forEach((doc) => {
    users.push(userMapper({ uid: doc.id, ...doc.data() }));
  });
  return users;
};

export const waitForUser = (callback: (user: User | null) => void) => {
  return auth.onAuthStateChanged(callback);
};

export const updateUserDoc = async (data: Partial<UsersEntity>) => {
  try {
    if (!data.id) {
      throw new Error("ID do usuário não informado");
    }
    // Cria um objeto sem as chaves com undefined
    const payload = Object.entries(data).reduce((acc, [key, value]) => {
      if (value !== undefined) {
        // Se for o campo do CEP do formulário, mapeia para o campo "cep" que o documento utiliza
        if (key === "zipCode") {
          (acc as any).cep = value;
        } else {
          (acc as Record<string, any>)[key] = value;
        }
      }
      return acc;
    }, {} as Partial<UsersEntity>);
    queryClient.invalidateQueries(["profile"]);
    await updateDoc(doc(db, tableName, data.id), {
      // Utilize o payload filtrado
      ...payload,
      updatedAt: new Date()
    });
    return { error: null };
  } catch (error: any) {
    return { error: error.message };
  }
};
export const deleteUserDoc = async (id: string) => {
  try {
    await deleteDoc(doc(db, tableName, id));
  } catch (error: any) {
    return { error: error.message };
  }
};
