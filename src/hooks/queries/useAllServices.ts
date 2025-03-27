import { useQuery } from "@tanstack/react-query";
import type { DocumentData } from "firebase/firestore";

import type { ServicesEntity } from "@/common/entities/services";
import { getAllServices } from "@/store/services/services";
import {
    FORTY_FIVE_MINUTES_IN_MS,
    ONE_DAY_IN_MS
} from "@common/constants/generic";

export function getAllServicesQueryKey() {
    return ["services"];
}

export const getAllServicesQueryFn = () => {
    return () => getAllServices();
};

const useAllServices = <T = ServicesEntity[]>(
    select?: (data: DocumentData) => T
) => {
    return useQuery({
        queryKey: getAllServicesQueryKey(),
        queryFn: getAllServicesQueryFn(),
        select,
        staleTime: FORTY_FIVE_MINUTES_IN_MS,
        cacheTime: ONE_DAY_IN_MS
    });
};

export default useAllServices;