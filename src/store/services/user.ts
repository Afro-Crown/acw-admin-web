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
  console.log("getUserDoc", id);
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
    await updateDoc(doc(db, tableName, data.id), {
      name: data.salonName,
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
      image: data.image,
      banner: data.banner,
      isOpen: data.isOpen,
      comments: data.comments,
      staff: data.staff,
      services: data.services,
      inAnalising: data.inAnalising,
      schedules: data.schedules,
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
