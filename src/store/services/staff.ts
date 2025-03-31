/* eslint-disable no-useless-catch */
/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  doc,
  getDoc,
  getFirestore,
  updateDoc,
  arrayUnion
} from "firebase/firestore";

import { StaffEntity } from "@/common/entities/staff";
import firebaseApp from "@/config/firebase";

import { queryClient } from "../providers/queryClient";

const db = getFirestore(firebaseApp);
const usersCollection = "users";

export const createNewStaffDoc = async (userId: string, staff: StaffEntity) => {
  try {
    const userDocRef = doc(db, usersCollection, userId);
    await updateDoc(userDocRef, {
      staffs: arrayUnion(staff)
    });
    return { error: null };
  } catch (error: any) {
    return { error: error.message };
  }
};

export const createMultipleStaffDocs = async (
  userId: string,
  staffs: StaffEntity[]
) => {
  try {
    const userDocRef = doc(db, usersCollection, userId);
    await updateDoc(userDocRef, {
      staffs: arrayUnion(...staffs)
    });
    queryClient.invalidateQueries(["staff"]);
    return { error: null };
  } catch (error: any) {
    return { error: error.message };
  }
};

export const getStaffDoc = async (userId: string) => {
  try {
    const userDocRef = doc(db, usersCollection, userId);
    const docSnap = await getDoc(userDocRef);
    if (docSnap.exists()) {
      const data = docSnap.data();
      return data.staffs || [];
    }
    return [];
  } catch (error: any) {
    throw error;
  }
};

export const getAllStaff = async (userId: string) => {
  try {
    return await getStaffDoc(userId);
  } catch (error: any) {
    throw error;
  }
};

export const updateStaffDoc = async (
  userId: string,
  staffId: string,
  updatedStaffData: Partial<StaffEntity>
) => {
  try {
    const userDocRef = doc(db, usersCollection, userId);
    const docSnap = await getDoc(userDocRef);
    if (docSnap.exists()) {
      const data = docSnap.data();
      const staffs: StaffEntity[] = data.staffs || [];
      const updatedStaffs = staffs.map((staff) => {
        if (staff.id === staffId) {
          return {
            ...staff,
            ...updatedStaffData
          };
        }
        return staff;
      });
      await updateDoc(userDocRef, { staffs: updatedStaffs });
      return { error: null };
    }
    return { error: "Documento de usuário não encontrado." };
  } catch (error: any) {
    return { error: error.message };
  }
};

export const deleteStaffDoc = async (userId: string, staffId: string) => {
  try {
    const userDocRef = doc(db, usersCollection, userId);
    const docSnap = await getDoc(userDocRef);
    if (docSnap.exists()) {
      const data = docSnap.data();
      const staffs: StaffEntity[] = data.staffs || [];
      const updatedStaffs = staffs.filter((staff) => staff.id !== staffId);
      await updateDoc(userDocRef, { staffs: updatedStaffs });
      queryClient.invalidateQueries(["staff"]);
      return { error: null };
    }
    return { error: "Documento de usuário não encontrado." };
  } catch (error: any) {
    return { error: error.message };
  }
};
