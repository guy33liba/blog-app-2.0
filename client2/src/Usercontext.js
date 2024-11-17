import React, { createContext } from "react"

export const UserContext = createContext({})
export const userContextProvider = ({ children }) => {
  const [userinfo, setUserinfo] = useState("")
  return <UserContext.Provider value={{ userinfo, setUserinfo }}>{children}</UserContext.Provider>
}
