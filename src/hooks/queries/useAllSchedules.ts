import { useQuery } from "@tanstack/react-query";
import type { DocumentData } from "firebase/firestore";

import type { ScheduleEntity } from "@/common/entities/schedules";
import { getAllSchedules } from "@/store/services/schedules";
import {
  FORTY_FIVE_MINUTES_IN_MS,
  ONE_DAY_IN_MS
} from "@common/constants/generic";

export function getAllSchedulesQueryKey() {
  return ["schedules"];
}

export const getAllSchedulesQueryFn = () => {
  return () => getAllSchedules();
};

const useAllSchedules = <T = ScheduleEntity[]>(
  select?: (data: DocumentData) => T
) => {
  return useQuery({
    queryKey: getAllSchedulesQueryKey(),
    queryFn: getAllSchedulesQueryFn(),
    select,
    staleTime: FORTY_FIVE_MINUTES_IN_MS,
    cacheTime: ONE_DAY_IN_MS
  });
};

export default useAllSchedules;
