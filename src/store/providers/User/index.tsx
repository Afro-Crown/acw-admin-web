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

  const updateUser = async ({
    id,
    email,
    name,
    geo,
    image
  }: Partial<UsersEntity>) => {
    setLoading((prev) => ({ ...prev, updateUserDoc: true }));
    const finalUid = id ?? (user?.id || "");
    const { error } = await updateUserDoc(
      finalUid,
      email,
      name,
      geo ? new Date(geo) : undefined,
      image
    );
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
        allUsers
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
