import React from 'react';

function CounterOne({ state, dispatch }) {
	const incrementHandler = () => {
		dispatch({ type: 'increment' });
	};
	return (
		<div>
			<h4>Counter One</h4>
			<h2>Counter: {state}</h2>
			<button onClick={incrementHandler}>Increment</button>
		</div>
	);
}

export default CounterOne;
