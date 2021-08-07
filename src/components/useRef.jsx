import React, { useRef, useState } from "react"
// useRef is used to manipulate DOM elemt

export default function RefHook() {
          const inputRef = useRef(null)
          const [input, setInput ] = useState("")

          const onClicked = () => {
                    // wn d btn is click d input box is active
                    inputRef.current.focus()

                    setInput( inputRef.current.value )
                    
                    console.log(inputRef.current.value);

                    // remove d input value after clicking d btn
                    inputRef.current.value = ""
                    
          }

          return (
                    <div>
                              <h1> UseRef: </h1>

                              <h1> Arabog: {input }</h1>

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