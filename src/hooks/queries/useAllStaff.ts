import { useQuery } from "@tanstack/react-query";
import type { DocumentData } from "firebase/firestore";

import type { StaffEntity } from "@/common/entities/staff";
import { getAllStaff } from "@/store/services/staff";
import {
    FORTY_FIVE_MINUTES_IN_MS,
    ONE_DAY_IN_MS
} from "@common/constants/generic";

export function getAllStaffQueryKey() {
    return ["staff"];
}

export const getAllStaffQueryFn = () => {
    return () => getAllStaff();
}

const useAllStaff = <T = StaffEntity[]>(
    select?: (data: DocumentData) => T
) => {
    return useQuery({
        queryKey: getAllStaffQueryKey(),
        queryFn: getAllStaffQueryFn(),
        select,
        staleTime: FORTY_FIVE_MINUTES_IN_MS,
        cacheTime: ONE_DAY_IN_MS
    });
};

export default useAllStaff;