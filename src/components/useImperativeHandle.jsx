import React, { useRef } from "react"
import Button from "./Button"

export default function ImperativeHandleHook() {
          const btnRef = useRef(null)

          return (
                    <div>
                              <button
                                        onClick= {
                                                  () => {
                                                            btnRef.current.alterToggle()
                                                  }
                                        }
                              >
                                        Button From Parent
                              </button>

                              <Button 
                                        ref={btnRef}
                              />
                    </div>
          )
}