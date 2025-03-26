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

import { StaffEntity } from "@/common/entities/staff";
import firebaseApp from "@/config/firebase";

const db = getFirestore(firebaseApp);
const collectionName = "staff";

export const  createNewStaffDoc = async (staff: StaffEntity) => {
    try {
        await setDoc(doc(db, collectionName, staff.id), {
            ...staff
        });
        return { error: null };
    } catch (error: any) {
        return { error: error.message };
    }
};

export const getStaffDoc = async (id: string) => {
    if (!id) return null;
    try {
        const docRef = doc(db, collectionName, id);
        const docSnap = await getDoc(docRef);
        return docSnap.exists() ? docSnap.data() : null;
    } catch (error: any) {
        throw error;
    }
};

export const getAllStaff = async () => {
    try {
        const staffRef = collection(db, collectionName);
        const q = query(staffRef);
        const querySnapshot = await getDocs(q);
        const staffList: StaffEntity[] = [];
        querySnapshot.forEach((docSnap) => {
            staffList.push({ id: docSnap.id, ...docSnap.data() } as StaffEntity);
        });
        return staffList;
    } catch (error: any) {
        throw error;
    }
};

export const updateStaffDoc = async (
    id: string,
    staffData: Partial<StaffEntity>
) => {
    try {
        const docRef = doc(db, collectionName, id);
        await updateDoc(docRef, {
            ...staffData
        });
        return { error: null };
    } catch (error: any) {
        return { error: error.message };
    }
};

export const deleteStaffDoc = async (id: string) => {
    try {
        const docRef = doc(db, collectionName, id);
        await deleteDoc(docRef);
        return { error: null };
    } catch (error: any) {
        return { error: error.message};
    }
}