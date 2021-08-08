import React from "react"
import StateHook from "./components/useState"
import ReducerHook from "./components/useReducer"
import EffectHook from "./components/useEffect"
import RefHook from "./components/useRef"
import LayoutEffectHook from "./components/useLayoutEffect"
import ImperativeHandle from "./components/useImperativeHandle"
import WithoutContextApi from "./components/useContextApi/withoutContextApi/withoutContextApi"


function App() {
	return (
		<div>
			<StateHook />

			<ReducerHook />

			<EffectHook />

			<RefHook />

			<LayoutEffectHook />

			<ImperativeHandle />

			<WithoutContextApi />
		</div>
	)
}

export default App;