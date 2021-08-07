import React, { forwardRef, useImperativeHandle, useState} from "react"

export default function Button(props) {
          const [toggle, setToggle] = useState(false)

          return (
                    <>
                              <button
                                        onClick={() => {setToggle(!toggle)}}
                              >
                                        
                                        Button From Child
                              </button>

                              {toggle && <span> Toggle </span> }
                    </>
          )
}

/* Or:
          const Button = (props) => {}

          export default Button
*/