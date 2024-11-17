import React, { createContext, useState } from "react"

export const UserContext = createContext({})
export const UserContextProvider = ({ children }) => {
  const [userinfo, setUserinfo] = useState({})
  return <UserContext.Provider value={{ setUserinfo, userinfo }}>{children}</UserContext.Provider>
}
