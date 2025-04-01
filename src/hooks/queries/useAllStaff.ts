/* eslint-disable react-hooks/rules-of-hooks */
import { useQuery } from "@tanstack/react-query";
import type { DocumentData } from "firebase/firestore";

import type { StaffEntity } from "@/common/entities/staff";
import { getAllStaff } from "@/store/services/staff";
import {
  FORTY_FIVE_MINUTES_IN_MS,
  ONE_DAY_IN_MS
} from "@common/constants/generic";

import useAuth from "../useAuth";

export function getAllStaffQueryKey() {
  return ["staff"];
}

export const getAllStaffQueryFn = () => {
  const { userUid } = useAuth();
  return () => getAllStaff(userUid);
};

const useAllStaff = <T = StaffEntity[]>(select?: (data: DocumentData) => T) => {
  return useQuery({
    queryKey: getAllStaffQueryKey(),
    queryFn: getAllStaffQueryFn(),
    select,
    staleTime: FORTY_FIVE_MINUTES_IN_MS,
    cacheTime: ONE_DAY_IN_MS
  });
};

export default useAllStaff;
