import React, { useContext } from 'react';
import { context } from './context/context';

function CounterE() {
	const state = useContext(context);
	console.log(state);
	return (
		<div>
			<p>Counter E</p>
			<h2>Counter: {state.counter}</h2>
			<button onClick={state.incrementHandler}>Increment</button>
		</div>
	);
}

export default CounterE;
