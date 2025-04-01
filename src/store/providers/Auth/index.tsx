"use client";

import { useEffect, useState } from "react";

import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { z } from "zod";

import { UsersEntity as UserDoc } from "@/common/entities/users";
import firebaseApp from "@/config/firebase";
import { errorToast, successToast } from "@/hooks/useAppToast";
import {
  createUserWithEmailAndPasswordLocal,
  deleteOwnAccount,
  logout,
  recoverPassword,
  signInWithEmailAndPasswordLocal
} from "@/store/services/auth";
import {
  createNewUserDoc,
  deleteUserDoc,
  waitForUser
} from "@/store/services/user";
import SignUpForm from "@/validations/signUp";

import AuthContext from "./context";

interface Props {
  children: React.ReactNode;
}

export type UserType = UserDoc | null;
type SignUpFormValidationData = z.infer<typeof SignUpForm>;

const AuthProvider = ({ children }: Props) => {
  const initialLoadingObject = {
    onAuthUserChanged: true,
    loginWithGoogle: false,
    loginWithInternalService: false,
    createUserWithInternalService: false,
    forgotPassword: false,
    updatePassword: false,
    deleteUser: false,
    logout: false
  };
  const [userUid, setUserUid] = useState<string>("");
  const [loading, setLoading] = useState(initialLoadingObject);
  const router = useRouter();
  const auth = getAuth(firebaseApp);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserUid(user.uid);
      } else {
        setUserUid("");
      }
      setLoading((prev) => ({ ...prev, onAuthUserChanged: true }));
    });

    return () => unsubscribe();
  }, [auth]);

  // Comentado: login com Google e Facebook

  const loginWithInternalService = async (email: string, password: string) => {
    setLoading((prev) => ({ ...prev, loginWithInternalService: true }));
    const { error, user } = await signInWithEmailAndPasswordLocal(
      email,
      password
    );
    console.log(email, password, error, user);
    if (user && !user.emailVerified) {
      errorToast("Por favor verifique seu email");
      setLoading((prev) => ({ ...prev, loginWithInternalService: false }));
      logout();
      return;
    }
    if (user) {
      successToast("Bem vindo de volta!");
      setUserUid(user.uid);
    } else {
      setUserUid("");
      errorToast(error);
    }
    setLoading((prev) => ({ ...prev, loginWithInternalService: false }));
  };

  const createUserWithInternalService = async ({
    email,
    password,
    salonName,
    cnpj,
    ownerName,
    zipCode,
    city,
    address,
    neighboard,
    number,
    complement,
    phone
  }: SignUpFormValidationData & { password: string }) => {
    if (email && password) {
      setLoading((prev) => ({ ...prev, createUserWithInternalService: true }));
      const { error, user } = await createUserWithEmailAndPasswordLocal(
        email,
        password
      );
      if (error) {
        errorToast(error);
        setLoading((prev) => ({
          ...prev,
          createUserWithInternalService: false
        }));
        return;
      }
      await createNewUserDoc({
        id: user?.uid || "",
        salonName, // Nome do salão
        email,
        address, // Rua
        neighboard, // Bairro
        complement: complement || "", // Complemento
        number, // Número
        city,
        zipCode, // CEP (do formulário)
        state: "", // Estado (não está no formulário)
        cnpj,
        phone,
        ownerName, // Nome do proprietário
        image: undefined,
        banner: undefined,
        isOpen: false,
        createdAt: new Date(),
        updatedAt: undefined,
        isActive: true,
        comments: [],
        staff: [],
        services: [],
        inAnalising: false,
        schedules: []
      });
      setUserUid(user?.uid || "");
      toast("Conta criada! Enviamos um email de confirmação ao seu email", {
        type: "success"
      });
      router.push("/login");
      setLoading((prev) => ({ ...prev, createUserWithInternalService: false }));
    } else {
      errorToast("Email e senha inválidos");
    }
  };

  const waitForUserSync = async () => {
    setLoading((prev) => ({ ...prev, onAuthUserChanged: true }));
    await waitForUser(async (userCred) => {
      if (userCred && !userCred.emailVerified) {
        logout();
        setLoading((prev) => ({ ...prev, onAuthUserChanged: false }));
      }
    });
    setLoading((prev) => ({ ...prev, onAuthUserChanged: false }));
  };

  const forgotPassword = async (email: string) => {
    setLoading((prev) => ({ ...prev, forgotPassword: true }));
    const { error } = await recoverPassword(email);
    if (!error) {
      toast("Email enviado", { type: "success" });
    }
    errorToast(error);
    setLoading((prev) => ({ ...prev, forgotPassword: false }));
  };

  const deleteUser = async () => {
    setLoading((prev) => ({ ...prev, deleteUser: true }));
    await deleteOwnAccount();
    await deleteUserDoc(userUid);
    setUserUid("");
    setLoading((prev) => ({ ...prev, deleteUser: false }));
  };

  const logoutUser = async () => {
    setLoading((prev) => ({ ...prev, logout: true }));
    router.push("/login");
    setUserUid("");
    logout();
    setLoading((prev) => ({ ...prev, logout: false }));
  };

  return (
    <AuthContext.Provider
      value={{
        userUid,
        setUserUid, // Added setUserUid to the context value
        loading,
        forgotPassword,
        loginWithGoogleUser: async () => {
          // Placeholder function for loginWithGoogleUser
          console.warn("loginWithGoogleUser is not implemented yet.");
        },
        loginWithInternalService,
        logoutUser,
        waitForUserSync,
        updatePassword: async () => {
          // Placeholder function for updatePassword
          console.warn("updatePassword is not implemented yet.");
        },
        deleteUser,
        createUserWithInternalService
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
