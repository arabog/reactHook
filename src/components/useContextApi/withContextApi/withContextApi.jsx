import React, { useState, createContext } from "react"
import User from "./User"
import Login from "./Login"

export const AppContext = createContext(null)

export default function WithContextApi() {
          const [ username, setUsername ] = useState("")

          return (
                    <AppContext.Provider 
                              value={
                                        {
                                                  username,
                                                  setUsername
                                        }
                              }
                    >
                              <h1>With Context API Hook: </h1>
                              
                              <Login />

                              <User />

                    </AppContext.Provider>
          )
}