import React, {useState} from "react"

export default function StateHook() {
	const [count, setCount] = useState(0)
	const [showText, setShowText] = useState(true)

	const handleClick = () => {
		setCount(count + 1)
		setShowText(!showText)
	}


	return (
		<div>
			{count}

			<p>
				<button 
					onClick = {handleClick}
				>
				
					Click
				</button>
			</p>

			{showText && "This is the initial text"}
		</div>
	);
}

