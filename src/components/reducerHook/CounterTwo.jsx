import React from 'react';

function CounterTwo({ state, dispatch }) {
	const decrementHandler = () => {
		dispatch({ type: 'decrement' });
	};
	return (
		<div>
			<h4>Counter Two</h4>
			<h2>Counter: {state}</h2>
			<button onClick={decrementHandler}>Decrement</button>
		</div>
	);
}

export default CounterTwo;
