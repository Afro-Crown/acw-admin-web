"use client";

import { useState } from "react";

import { UsersEntity } from "@/common/entities/users";
import useProfile from "@/hooks/queries/useProfile";
import { errorToast, successToast } from "@/hooks/useAppToast";
import { getAllUsers, updateUserDoc } from "@/store/services/user";
import useAuth from "@hooks/useAuth";

import UserContext from "./context";

interface Props {
  children: React.ReactNode;
}

const UserProvider = ({ children }: Props) => {
  const { userUid } = useAuth();
  const { data: user } = useProfile(userUid);
  const initialLoadingObject = {
    updateUserDoc: false,
    getAllUsers: false
  };
  const [loading, setLoading] = useState(initialLoadingObject);
  const [allUsers, setAllUsers] = useState<UsersEntity[] | null>();

  const [signUpDraft, setSignUpDraft] = useState<Partial<UsersEntity>>({});

  const saveSignUpDraft = (data: Partial<UsersEntity>) => {
    setSignUpDraft((prev) => ({ ...prev, ...data }));
  };

  const updateUser = async ({
    id,
    salonName,
    email,
    address,
    neighboard,
    complement,
    number,
    city,
    zipCode,
    state,
    cnpj,
    phone,
    ownerName,
    image,
    banner,
    isOpen,
    comments,
    staff,
    services,
    inAnalising,
    schedules
  }: Partial<UsersEntity>) => {
    setLoading((prev) => ({ ...prev, updateUserDoc: true }));
    const finalUid = id ?? (user?.id || "");
    const { error } = await updateUserDoc({
      id: finalUid,
      salonName,
      email,
      address,
      neighboard,
      complement,
      number,
      city,
      zipCode,
      state,
      cnpj,
      phone,
      ownerName,
      image,
      banner,
      isOpen,
      comments,
      staff,
      services,
      inAnalising,
      schedules
    });
    if (!error) {
      successToast("Profile updated");
    }
    errorToast(error);
    setLoading((prev) => ({ ...prev, updateUserDoc: false }));
  };

  const fetchAllUsers = async () => {
    setLoading((prev) => ({ ...prev, getAllUsers: true }));
    const users = await getAllUsers();
    if (users.length === 0) {
      errorToast("Não foram encontrados usuários");
    }
    setAllUsers(users);
    return users;
  };

  return (
    <UserContext.Provider
      value={{
        loading,
        updateUser,
        fetchAllUsers,
        allUsers,
        saveSignUpDraft,
        signUpDraft
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
