import React from "react"
import Button from "./Button"

export default function useImperativeHandle() {
          return (
                    <div>
                              <button>Button From Parent</button>

                              <Button/>
                    </div>
          )
}