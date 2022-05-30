import {useEffect, useState} from "react";
import UpdateTodo from "./UpdateTodo";
import DeleteTodo from "./DeleteTodo";

const ReadTodo = () => {
	const [todos, setTodos] = useState([]);

	const getTodos = async () => {
		try {
			const res = await fetch("http://localhost:5000/todos");
			const data = await res.json();

			setTodos(data);
		} catch (err) {
			console.error(err);
		}
	}

	useEffect(() => {
		getTodos();
	})

	return(
		<table className="todo-list">
			<tbody>
			{todos.map(todo => (
				<tr>
					<td key={`todo-${todo.todo_id}`}>{todo.description}</td>
					<td>{todo.is_done ? <input type="checkbox" defaultChecked/> : <input type="checkbox"/>}</td>
					<td><UpdateTodo todo={todo}/></td>
					<td><DeleteTodo todo={todo}/></td>
				</tr>
			))}
			</tbody>
		</table>
	);
}

export default ReadTodo;