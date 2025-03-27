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

import { ServicesEntity } from "@/common/entities/services";
import firebaseApp from "@/config/firebase";

const db = getFirestore(firebaseApp);
const collectionName = "services";

export const creatNewServiceDoc = async (service: ServicesEntity) => {
    try {
        await setDoc(doc(db, collectionName, service.id), {
            ...service
        });
        return { error: null };
    } catch (error: any) {
        return { error: error.message };
    }
};

export const getServiceDoc = async (id: string) => {
    if (!id) return null;
    try {
        const docRef = doc(db, collectionName, id);
        const docSnap = await getDoc(docRef);
        return docSnap.exists() ? docSnap.data() : null;
    } catch (error: any) {
        throw error;
    }
};

export const getAllServices = async () => {
    try {
        const servicesRef = collection(db, collectionName);
        const q = query(servicesRef);
        const querySnapshot = await getDocs(q);
        const services: ServicesEntity[] = [];
        querySnapshot.forEach((docSnap) => {
            services.push({ id: docSnap.id, ...docSnap.data() } as ServicesEntity);
        });
        return services;
    } catch (error: any) {
        throw error;
    }
};

export const updateServiceDoc = async (
    id: string,
    serviceData: Partial<ServicesEntity>
) => {
    try {
        const docRef = doc(db, collectionName, id);
        await updateDoc(docRef, {
            ...serviceData
        });
        return { error: null };
    } catch (error: any) {
        return { error: error.message };
    }
};

export const deleteServiceDoc = async (id: string) => {
    try {
        const docRef = doc(db, collectionName, id);
        await deleteDoc(docRef);
        return { error: null };
    } catch (error: any) {
        return { error: error.message };
    }
};