import React from "react"
import StateHook from "./components/useState"
import ReducerHook from "./components/useReducer"
import EffectHook from "./components/useEffect"


function App() {
	return (
		<div>
			<StateHook />

			<ReducerHook />

			<EffectHook />
		</div>
	)
}

export default App;