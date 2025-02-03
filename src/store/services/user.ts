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

import firebaseApp from "@/config/firebase";
import { userMapper } from "@/utils/userMapper";
import { UserEntity } from "@common/entities/user";

const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);
const tableName = "users";

export const createNewUserDoc = async ({
  uid,
  email,
  name,
  dob,
  phone
}: UserEntity) => {
  try {
    await setDoc(doc(db, tableName, uid || ""), {
      name,
      email,
      dob,
      phone
    });
    return { error: null };
  } catch (error: any) {
    return { error: error.message };
  }
};

export const getUserDoc = async (uid: string) => {
  if (uid === "") return null;
  return new Promise<DocumentData | null>((resolve, reject) => {
    const docRef = doc(db, tableName, uid);

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
  const users: UserEntity[] = [];
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
