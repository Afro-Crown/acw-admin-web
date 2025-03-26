/* eslint-disable no-useless-catch */
/* eslint-disable @typescript-eslint/no-explicit-any */
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

import { ShopEntity } from "@/common/entities/shop";
import firebaseApp from "@/config/firebase";

const db = getFirestore(firebaseApp);
const collectionName = "shops";

export const createNewShopDoc = async (shop: ShopEntity) => {
  try {
    await setDoc(doc(db, collectionName, shop.id), {
      ...shop
    });
    return { error: null };
  } catch (error: any) {
    return { error: error.message };
  }
};

export const getShopDoc = async (id: string) => {
  if (!id) return null;
  try {
    const docRef = doc(db, collectionName, id);
    const docSnap = await getDoc(docRef);
    return docSnap.exists() ? docSnap.data() : null;
  } catch (error: any) {
    throw error;
  }
};

export const getAllShops = async () => {
  try {
    const shopsRef = collection(db, collectionName);
    const q = query(shopsRef);
    const querySnapshot = await getDocs(q);
    const shops: ShopEntity[] = [];
    querySnapshot.forEach((docSnap) => {
      shops.push({ id: docSnap.id, ...docSnap.data() } as ShopEntity);
    });
    return shops;
  } catch (error: any) {
    throw error;
  }
};

export const updateShopDoc = async (
  id: string,
  shopData: Partial<ShopEntity>
) => {
  try {
    const docRef = doc(db, collectionName, id);
    await updateDoc(docRef, {
      ...shopData,
      updatedAt: new Date()
    });
    return { error: null };
  } catch (error: any) {
    return { error: error.message };
  }
};

export const deleteShopDoc = async (id: string) => {
  try {
    const docRef = doc(db, collectionName, id);
    await deleteDoc(docRef);
    return { error: null };
  } catch (error: any) {
    return { error: error.message };
  }
};
