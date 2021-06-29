import React, { useState } from 'react';
import './App.css';
import CounterA from './components/contextComponents/CounterA';
import CounterC from './components/contextComponents/CounterC';
import { context } from './components/contextComponents/context/context';

function App() {
	const [counter, setCounter] = useState(0);

	const incrementHandler = () => {
		setCounter(counter + 1);
	};

	const decrementHandler = () => {
		setCounter(counter - 1);
	};

	return (
		<div className="App">
			<context.Provider
				value={{ counter, incrementHandler, decrementHandler }}
			>
				<CounterA />
				<CounterC />
			</context.Provider>
		</div>
	);
}

export default App;
