'use client'
import { createContext, useContext, useState, useRef } from "react";


const context = createContext();

export const StateContext = ({ children }) => {
  const [user, setUser] = useState({name:"Niraj Modi"});
  const updateUser = (user) =>{
    setUser(user)
  }
  return (
    <context.Provider
      value={{
        user,
        updateUser,
      }}
    >
      {children}
    </context.Provider>
  );
};

export const useAppState = () => useContext(context);