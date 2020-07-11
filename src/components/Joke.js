import React from 'react';

const Joke = (props) => {
	const jokestyle={display: props.question ? 'block':'none'}
	const plstyle={color: props.question? 'cyan':'orange'}

	return (
		<div>
			<h3 style={jokestyle}>Question: {props.question}</h3>
			<h3 style={plstyle}>Answer: {props.punchline}</h3>
			<br/>
		</div>
		)
}

export default Joke;