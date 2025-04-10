import React, { createContext, useState } from "react";

export const UserContext = createContext();

/** 5. context api */
const UserContextProvider = ({ children }) => {
  const [value, setValue] = useState({ billing: 0, name: "ㅂㅇㅈ" });
  return (
    <UserContext.Provider value={{ value, setValue }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
