import React, { useState } from "react"
import Login from "./Login"
import User from "./User"

export default function WithoutContextApi( ) {
          const [username, setUsername ] = useState("")

          return (
                    <div>
                              <h1>Without ContextApi Hook:</h1>
                              
                              <Login setUsername={setUsername} />

                              <User username= {username} />
                    </div>
          )
}