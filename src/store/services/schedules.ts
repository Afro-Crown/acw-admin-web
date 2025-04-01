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

import { ScheduleEntity } from "@/common/entities/schedules";
import firebaseApp from "@/config/firebase";

const db = getFirestore(firebaseApp);
const collectionName = "schedules";

export const createNewScheduleDoc = async (schedule: ScheduleEntity) => {
  try {
    await setDoc(doc(db, collectionName, schedule.id), {
      ...schedule
    });
    return { error: null };
  } catch (error: any) {
    return { error: error.message };
  }
};

export const getScheduleDoc = async (id: string) => {
  if (!id) return null;
  try {
    const docRef = doc(db, collectionName, id);
    const docSnap = await getDoc(docRef);
    return docSnap.exists() ? docSnap.data() : null;
  } catch (error: any) {
    throw error;
  }
};

export const getAllSchedules = async () => {
  try {
    const schedulesRef = collection(db, collectionName);
    const q = query(schedulesRef);
    const querySnapshot = await getDocs(q);
    const schedules: ScheduleEntity[] = [];
    querySnapshot.forEach((docSnap) => {
      schedules.push({ id: docSnap.id, ...docSnap.data() } as ScheduleEntity);
    });
    return schedules;
  } catch (error: any) {
    throw error;
  }
};

export const updateScheduleDoc = async (
  id: string,
  scheduleData: Partial<ScheduleEntity>
) => {
  try {
    const docRef = doc(db, collectionName, id);
    await updateDoc(docRef, {
      ...scheduleData
    });
    return { error: null };
  } catch (error: any) {
    return { error: error.message };
  }
};

export const deleteScheduleDoc = async (id: string) => {
  try {
    const docRef = doc(db, collectionName, id);
    await deleteDoc(docRef);
    return { error: null };
  } catch (error: any) {
    return { error: error.message };
  }
};
