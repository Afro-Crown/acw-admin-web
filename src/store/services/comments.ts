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

import { CommentsEntity } from "@/common/entities/comments";
import firebaseApp from "@/config/firebase";

const db = getFirestore(firebaseApp);
const collectionName = "comments";

export const createNewCommentDoc = async (comment: CommentsEntity) => {
  try {
    await setDoc(doc(db, collectionName, comment.id), {
      rating: comment.rating,
      description: comment.description,
      userid: comment.userid,
      shopid: comment.shopid,
      tags: comment.tags,
      created_at: comment.created_at
    });
    return { error: null };
  } catch (error: any) {
    return { error: error.message };
  }
};

export const getCommentDoc = async (id: string) => {
  if (!id) return null;
  try {
    const docRef = doc(db, collectionName, id);
    const docSnap = await getDoc(docRef);
    return docSnap.exists() ? docSnap.data() : null;
  } catch (error: any) {
    throw error;
  }
};

export const getAllComments = async () => {
  try {
    const commentsRef = collection(db, collectionName);
    const q = query(commentsRef);
    const querySnapshot = await getDocs(q);
    const comments: CommentsEntity[] = [];
    querySnapshot.forEach((docSnap) => {
      comments.push({ id: docSnap.id, ...docSnap.data() } as CommentsEntity);
    });
    return comments;
  } catch (error: any) {
    throw error;
  }
};

export const updateCommentDoc = async (
  id: string,
  commentData: Partial<CommentsEntity>
) => {
  try {
    const docRef = doc(db, collectionName, id);
    await updateDoc(docRef, {
      ...commentData
      // Caso queira registrar a data da atualização, descomente a linha abaixo:
      // updatedAt: new Date()
    });
    return { error: null };
  } catch (error: any) {
    return { error: error.message };
  }
};

export const deleteCommentDoc = async (id: string) => {
  try {
    const docRef = doc(db, collectionName, id);
    await deleteDoc(docRef);
    return { error: null };
  } catch (error: any) {
    return { error: error.message };
  }
};
