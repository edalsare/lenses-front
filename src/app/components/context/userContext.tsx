'use client'
import React from "react";

import { useState } from "react";


import { User, UserContextState } from "@/app/scripts/user";

interface ProviderProps {
  children: React.ReactNode;
}

export const Context = React.createContext<UserContextState | null>(null);

export const UserProvider: React.FC<ProviderProps> = ({ children }) => {

  const [currentUser, setCurrentUser] = useState<User>({
    userId: 0,
    names: "",
    last_names: "",
    telephone: "",
    email: "",
    password: "",
    users: "",
  });

  const loginUser = (user: User) => {
    setCurrentUser(user);
  };

  return (
    <Context.Provider
      value={{
        currentUser,
        loginUser,
      }}
    >
      {children}
    </Context.Provider>
  )
}
