import React, { useEffect, useState } from 'react';

// 'https://jsonplaceholder.typicode.com/users/1/todos'

function Todos() {
	const [todoList, setTodoList] = useState([]);

	const getData = async () => {
		const response = await fetch(
			'https://jsonplaceholder.typicode.com/users/1/todos'
		);
		const result = await response.json();
		setTodoList(result);
	};

	useEffect(() => {
		getData();
	}, []);

	return (
		<>
			<h1>Todos</h1>
			<div className="todolist">
				{todoList.length === 0 && <p>loading</p>}
				{todoList.length > 0 &&
					todoList.map((todo) => (
						<p key={todo.id} className="todo">
							{todo.title}
						</p>
					))}
			</div>
		</>
	);
}

export default Todos;
