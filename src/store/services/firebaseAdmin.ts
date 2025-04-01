/* eslint-disable @typescript-eslint/no-explicit-any */
import admin from "firebase-admin";

export const createUserAuthAdmin = async (
  email: string,
  password: string
): Promise<{ uid: string | null; error: null | string }> => {
  try {
    const userRecord = await admin.auth().createUser({
      email,
      password
    });

    return {
      uid: userRecord.uid,
      error: null
    };
  } catch (error: any) {
    console.error(error);
    return {
      uid: null,
      error
    };
  }
};

export const deleteUserAuthAdmin = async (
  id: string
): Promise<{ error: null | string }> => {
  try {
    await admin.auth().deleteUser(id);

    return {
      error: null
    };
  } catch (error: any) {
    console.error(error);
    return {
      error:
        error.code === "auth/email-already-exists"
          ? "Email já está em uso."
          : "Erro ao criar usuário."
    };
  }
};
