import React, { useEffect } from "react"
import axios from "axios"

/* here a public api is used:

*/
export default function EffectHook() {
          useEffect( () => {

                    const getApi = async () => {
                              try {
                                        let ans = await axios.get("https://jsonplaceholder.typicode.com/comments")

                                        console.log(ans.data)
                              } catch (err) {
                                        console.log(err);
                              }
                    }

                    getApi()
          })

          return (
                    <div>
                              Hello world
                    </div>
          )
}