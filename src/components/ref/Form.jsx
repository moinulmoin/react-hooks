import React, { useEffect, useRef, useState } from 'react';

function form() {
	const nameRef = useRef(null);
	const ageRef = useRef(null);

	// const [inputValue, setInputValue] = useState('');

	// const changeHandler = (e) => {
	// 	setInputValue(e.target.value);
	// };
	// console.log(inputValue);
	useEffect(() => {
		ageRef.current.focus();
	}, []);
	return (
		<form>
			<input
				type="text"
				placeholder="Enter Your Name"
				// value={inputValue}
				// onChange={changeHandler}
				ref={nameRef}
			/>
			<input type="text" placeholder="Enter Your Age" ref={ageRef} />
		</form>
	);
}

export default form;
