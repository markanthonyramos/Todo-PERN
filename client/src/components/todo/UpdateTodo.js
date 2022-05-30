import {useState} from "react";

const UpdateTodo = ({todo}) => {
	const [description, setDescription, getDescription] = useState("");

	const editDesc = () => {
		const newDesc = prompt("Type your new todo.", todo.description);

		// setInterval(() => {
		// 	setDescription(newDesc);
		// 	console.log(description);
		// }, 500);
		setDescription(newDesc);
		console.log(description);
		setDescription(state => {
			console.log(state);
			return state;
		})

		// if (newDesc) {
		// 	setDescription(newDesc);
		// 	console.log(description);
		// 	try {
		// 		const body = {description, is_done: todo.is_done};
		// 		const req = fetch(`http://localhost:5000/update-todo/${todo.todo_id}`, {
		// 			method: "PUT",
		// 			headers: { "Content-Type": "application/json" },
		// 			body: JSON.stringify(body)
		// 		});
		// 	} catch (err) {
		// 		console.error(err);
		// 	}
		// }
	}

	return(
		<button onClick={editDesc}>Edit</button>
	);
}

export default UpdateTodo;