/* eslint-disable no-useless-catch */
/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  doc,
  getDoc,
  getFirestore,
  updateDoc,
  arrayUnion
} from "firebase/firestore";
import { v4 as uuidv4 } from "uuid";

import { ServicesEntity } from "@/common/entities/services";
import firebaseApp from "@/config/firebase";

const db = getFirestore(firebaseApp);
const usersCollection = "users";

export const createNewServiceDoc = async (
  userId: string,
  service: ServicesEntity
) => {
  service.id = uuidv4();
  try {
    const userDocRef = doc(db, usersCollection, userId);
    await updateDoc(userDocRef, {
      services: arrayUnion(service)
    });
    return { error: null };
  } catch (error: any) {
    return { error: error.message };
  }
};

export const getServiceDocs = async (userId: string) => {
  try {
    const userDocRef = doc(db, usersCollection, userId);
    const docSnap = await getDoc(userDocRef);
    if (docSnap.exists()) {
      const data = docSnap.data();
      return data.services || [];
    }
    return [];
  } catch (error: any) {
    throw error;
  }
};

export const getAllServices = async (userId: string) => {
  try {
    const userDocRef = doc(db, usersCollection, userId);
    const docSnap = await getDoc(userDocRef);
    console.log("Usuário", docSnap.data());
    if (docSnap.exists()) {
      const data = docSnap.data();
      console.log("Serviços", data.services);
      return data.services || [];
    }
    return [];
  } catch (error: any) {
    throw error;
  }
};

export const updateServiceDoc = async (
  userId: string,
  serviceId: string,
  updatedServiceData: Partial<ServicesEntity>
) => {
  try {
    const userDocRef = doc(db, usersCollection, userId);
    const docSnap = await getDoc(userDocRef);
    if (docSnap.exists()) {
      const data = docSnap.data();
      const services: ServicesEntity[] = data.services || [];
      const updatedServices = services.map((service) => {
        if (service.id === serviceId) {
          return { ...service, ...updatedServiceData };
        }
        return service;
      });
      await updateDoc(userDocRef, { services: updatedServices });
      return { error: null };
    }
    return { error: "Documento de usuário não encontrado." };
  } catch (error: any) {
    return { error: error.message };
  }
};

export const deleteServiceDoc = async (userId: string, serviceId: string) => {
  try {
    const userDocRef = doc(db, usersCollection, userId);
    const docSnap = await getDoc(userDocRef);
    if (docSnap.exists()) {
      const data = docSnap.data();
      const services: ServicesEntity[] = data.services || [];
      const updatedServices = services.filter(
        (service) => service.id !== serviceId
      );
      await updateDoc(userDocRef, { services: updatedServices });
      return { error: null };
    }
    return { error: "Documento de usuário não encontrado." };
  } catch (error: any) {
    return { error: error.message };
  }
};
