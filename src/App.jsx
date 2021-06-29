import React, { useReducer } from 'react';
import './App.css';
import CounterOne from './components/reducerHook/CounterOne';
import CounterTwo from './components/reducerHook/CounterTwo';

function reducer(state, action) {
	if (action.type === 'increment') {
		return {
			counterOne: state.counterOne + 1,
			counterTwo: state.counterTwo + 5,
		};
	}
	if (action.type === 'decrement') {
		return {
			counterOne: state.counterOne - 1,
			counterTwo: state.counterTwo - 5,
		};
	}
	return state;
}

const initialState = {
	counterOne: 0,
	counterTwo: 5,
};

function App() {
	const [state, dispatch] = useReducer(reducer, initialState);

	return (
		<div className="App">
			<CounterOne state={state.counterOne} dispatch={dispatch} />
			<CounterTwo state={state.counterTwo} dispatch={dispatch} />
		</div>
	);
}

export default App;
