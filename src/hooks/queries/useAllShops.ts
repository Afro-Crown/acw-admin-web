import { useQuery } from "@tanstack/react-query";
import type { DocumentData } from "firebase/firestore";

import type { ShopEntity } from "@/common/entities/shop";
import { getAllShops } from "@/store/services/shop";
import {
  FORTY_FIVE_MINUTES_IN_MS,
  ONE_DAY_IN_MS
} from "@common/constants/generic";

export function getAllShopsQueryKey() {
  return ["shops"];
}

export const getAllShopsQueryFn = () => {
  return () => getAllShops();
};

const useAllShops = <T = ShopEntity[]>(select?: (data: DocumentData) => T) => {
  return useQuery({
    queryKey: getAllShopsQueryKey(),
    queryFn: getAllShopsQueryFn(),
    select,
    staleTime: FORTY_FIVE_MINUTES_IN_MS,
    cacheTime: ONE_DAY_IN_MS
  });
};

export default useAllShops;
