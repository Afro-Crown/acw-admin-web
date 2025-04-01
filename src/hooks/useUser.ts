import { useContext } from "react";

import type { UserContextType } from "@/store/providers/User/types";
import UserContext from "@providers/User/context";

export default function useUser(): UserContextType {
  return useContext(UserContext);
}
