import React, { useContext } from 'react';
import { context } from './context/context';
function CounterB() {
	const state = useContext(context);
	console.log(state);
	return (
		<div>
			<p>Counter B</p>
			<h2>Counter: {state.counter}</h2>
			<button onClick={state.decrementHandler}>Decrement</button>
		</div>
	);
}

export default CounterB;
