import React, { useRef } from "react"
// useRef is used to manipulate DOM elemt

export default function RefHook() {
          const inputRef = useRef(null)

          const onClicked = () => {
                    console.log(inputRef.current.value);
          }

          return (
                    <div>
                              <h1> UseRef: </h1>

                              <h1> Arabog: </h1>

                              <input 
                                        type="text" 
                                        placeholder= "Ex...."
                                        ref={inputRef}
                              />

                              <button
                                        onClick = {onClicked}
                              >
                                        Change Name
                              </button>
                    </div>
          )
}