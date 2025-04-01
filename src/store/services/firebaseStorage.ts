import {
  deleteObject,
  getDownloadURL,
  getStorage,
  ref,
  uploadBytes
} from "firebase/storage";

import firebaseApp from "@/config/firebase";

export const storage = getStorage(firebaseApp);

export const uploadImage = async (file: File) => {
  try {
    const storageRef = ref(storage, "images/" + file.name);
    await uploadBytes(storageRef, file);
    const downloadURL = await getDownloadURL(storageRef);
    return { image: downloadURL, error: null };
  } catch (error) {
    console.error("Erro ao fazer upload da imagem:", error);
    return { image: null, error };
  }
};

export const uploadFile = async (file: File) => {
  try {
    const storageRef = ref(storage, "files/" + file.name);
    await uploadBytes(storageRef, file);
    const downloadURL = await getDownloadURL(storageRef);
    return { fileUrl: downloadURL, error: null };
  } catch (error) {
    console.error("Erro ao fazer upload da arquivo:", error);
    return { fileUrl: null, error };
  }
};

export const deleteImage = (url: string | null | undefined) => {
  if (!url)
    return {
      error: "Não foi possível deletar a imagem"
    };

  const fileRef = ref(storage, url);
  return deleteObject(fileRef)
    .then(() => ({
      error: null
    }))
    .catch(() => ({
      error: "Não foi possível deletar a imagem"
    }));
};

export const deleteFile = (url: string | null | undefined) => {
  if (!url)
    return {
      error: "Não foi possível deletar o file"
    };

  const fileRef = ref(storage, url);
  return deleteObject(fileRef)
    .then(() => ({
      error: null
    }))
    .catch(() => ({
      error: "Não foi possível deletar a file"
    }));
};
