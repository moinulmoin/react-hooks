import React from 'react';
import CounterB from './CounterB';

function CounterA({ counter, decrementHandler }) {
	return (
		<div>
			<p>Counter A</p>
			<CounterB counter={counter} decrementHandler={decrementHandler} />
		</div>
	);
}

export default CounterA;
