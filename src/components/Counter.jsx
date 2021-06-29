import React, { useState } from 'react';

function Counter() {
	const [counter, setCounter] = useState(0);

	const incrementHandler = () => {
		setCounter(counter + 1);
	};

	const decrementHandler = () => {
		setCounter(counter - 1);
	};

	return (
		<>
			<h1>Counter - {counter}</h1>
			<button onClick={incrementHandler}>Increment</button>
			<button onClick={decrementHandler}>Decrement</button>
		</>
	);
}

export default Counter;
