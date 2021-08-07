import React, { useEffect, useState } from "react"
import axios from "axios"

/* here a public api is used:

*/
export default function EffectHook() {
          const [info, setInfo] = useState("")
          const [count, setCount] = useState(0)

          useEffect( () => {

                    const getApi = async () => {
                              try {
                                        let ans = await axios.get("https://jsonplaceholder.typicode.com/comments")

                                        setInfo(ans.data[0].email)

                                        // ds is to show hw many time d useEffect() was called
                                        console.log("API WAS CALLED");
                              } catch (err) {
                                        console.log(err);
                              }
                    }

                    getApi()

                    /* +ing [] to useEffect() ensures dt it is only called
                    wn getApi is called i.e it wont be called bf getApi is
                    called wc is d case wn [] wasnt +ed*/
          }, [])

          return (
                    <div>
                              <h1> UseEffect: </h1>

                              <h1> { info } </h1>

                              <h1> { count }</h1>

                              <button 
                                        onClick={() => setCount(count + 1)} 
                              >
                                        Click
                              </button>
                    </div>
          )
}