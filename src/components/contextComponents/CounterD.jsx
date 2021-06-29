import React from 'react';
import CounterE from './CounterE';
function CounterD({ counter, incrementHandler }) {
	return (
		<div>
			<p>Counter D</p>
			<CounterE counter={counter} incrementHandler={incrementHandler} />
		</div>
	);
}

export default CounterD;
