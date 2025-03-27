import { useQuery } from "@tanstack/react-query";
import type { DocumentData } from "firebase/firestore";

import type { CommentsEntity } from "@/common/entities/comments";
import { getAllComments } from "@/store/services/comments";
import { FORTY_FIVE_MINUTES_IN_MS, ONE_DAY_IN_MS } from "@common/constants/generic";

export function getAllCommentsQueryKey() {
  return ["comments"];
}

export const getAllCommentsQueryFn = () => {
  return () => getAllComments();
};

const useAllComments = <T = CommentsEntity[]>(select?: (data: DocumentData) => T) => {
  return useQuery({
    queryKey: getAllCommentsQueryKey(),
    queryFn: getAllCommentsQueryFn(),
    select,
    staleTime: FORTY_FIVE_MINUTES_IN_MS,
    cacheTime: ONE_DAY_IN_MS,
  });
};

export default useAllComments;