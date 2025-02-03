"use client";

import { createContext } from "react";

import { UserContextType } from "./types";

const UserContext = createContext<UserContextType>({} as UserContextType);

export default UserContext;
