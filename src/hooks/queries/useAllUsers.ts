import { useQuery } from "@tanstack/react-query";
import { DocumentData } from "firebase/firestore";

import type { UsersEntity } from "@/common/entities/users";
import { getAllUsers } from "@/store/services/user";
import {
  FORTY_FIVE_MINUTES_IN_MS,
  ONE_DAY_IN_MS
} from "@common/constants/generic";

export function getAllUsersQueryKey() {
  return ["users"];
}

export const getAllUsersQueryFn = () => {
  return () => getAllUsers();
};

const useAllUsers = <T = UsersEntity[]>(select?: (data: DocumentData) => T) => {
  return useQuery({
    queryKey: getAllUsersQueryKey(),
    queryFn: getAllUsersQueryFn(),
    select,
    staleTime: FORTY_FIVE_MINUTES_IN_MS,
    cacheTime: ONE_DAY_IN_MS
  });
};

export default useAllUsers;
