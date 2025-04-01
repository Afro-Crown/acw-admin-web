import { useContext } from "react";

import { AuthContextType } from "@/store/providers/Auth/types";
import AuthContext from "@providers/Auth/context";

export default function useAuth(): AuthContextType {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
}
