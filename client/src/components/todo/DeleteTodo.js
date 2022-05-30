const DeleteTodo = ({todo}) => {
	const delTodo = () => {
		try {
			const req = fetch(`http://localhost:5000/delete-todo/${todo.todo_id}`, {
				method: "DELETE"
			})
		} catch (err) {
			console.error(err);
		}
	}

	return(
		<button onClick={delTodo}>Delete</button>
	);
}

export default DeleteTodo;