/* eslint-disable @typescript-eslint/no-explicit-any */
import { getAuth, User } from "firebase/auth";
import {
  collection,
  deleteDoc,
  doc,
  DocumentData,
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

export const createNewUserDoc = async ({
  id,
  email,
  name,
  geo,
  image
}: UsersEntity) => {
  try {
    await setDoc(doc(db, tableName, id || ""), {
      name,
      email,
      geo,
      image
    });
    return { error: null };
  } catch (error: any) {
    return { error: error.message };
  }
};

export const getUserDoc = async (id: string) => {
  if (id === "") return null;
  return new Promise<DocumentData | null>((resolve, reject) => {
    const docRef = doc(db, tableName, id);

    getDoc(docRef)
      .then((data) => {
        const userData = data.data();
        resolve(userData || null);
      })
      .catch((error) => reject(error));
  });
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

export const updateUserDoc = async (
  uid: string,
  email?: string,
  name?: string,
  dob?: Date,
  phone?: string
) => {
  try {
    await updateDoc(doc(db, tableName, uid), {
      email,
      name,
      dob,
      phone
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
