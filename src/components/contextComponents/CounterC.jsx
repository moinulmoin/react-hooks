import React from 'react';
import CounterD from './CounterD';
function CounterC({ counter, incrementHandler }) {
	return (
		<div>
			<p>Counter C</p>
			<CounterD counter={counter} incrementHandler={incrementHandler} />
		</div>
	);
}

export default CounterC;
