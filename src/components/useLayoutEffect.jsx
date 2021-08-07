// notice d import, React wasnt imported
import { useLayoutEffect, useEffect, useRef } from "react";

export default function LayoutEffectHook() {
          const inputRef = useRef(null)

          useEffect(() => {
                    inputRef.current.value = "HELLO JESUS"
          }, [])

          // ds will be called bf d useEffect. check console
          useLayoutEffect(() => {
                    console.log(inputRef.current.value);
          }, [])


          return (
                    <div>
                              <h1> useLayoutEffect: </h1>

                              <input 
                                        type="text" 
                                        value="ARABOG"
                                        ref={inputRef}
                                        style={
                                                  {
                                                            width: 400,
                                                            height: 30
                                                  }
                                        }
                                        
                              />
                    </div>
          )
}