import React, { useReducer } from "react"

const reducerFxn = (state, action) => {
          switch (action.type) {

                    case "INCREMENT":
                              return (
                                        { 
                                                  count: state.count + 1, 
                                                  setText: state.setText
                                        }
                              )

                    case "toggleSetText":
                              return (
                                        {
                                                  count: state.count,
                                                  setText: !state.setText
                                        }
                              )

                    default:
                              return state
                              
          }
}

export default function ReducerHook() {
          const [state, dispatch] = useReducer(reducerFxn, 
                    {
                              count: 0,
                              setText: true
                    }
          )


          return (
                    <div>
                              <h1> { state.count }</h1>

                              <p>
                                        <button onClick= {
                                                  () => {
                                                            dispatch(
                                                                      {
                                                                                type: "INCREMENT"
                                                                      }
                                                            )

                                                            dispatch(
                                                                      {
                                                                                type: "toggleSetText"
                                                                      }
                                                            )

                                                  }
                                        }>
                                                  Click
                                        </button>
                              </p>

                              {state.setText && "This is the initial text using useReducer()"}
                    </div>
          )
}