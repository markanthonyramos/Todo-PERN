import {useState} from "react";

const CreateTodo = () => {
	const [description, setDescription] = useState("");

	const postTodo = e => {
		e.preventDefault();

		if (description != "") {
			setDescription("");
			
			try {
				const body = {description};
				const req = fetch("http://localhost:5000/create-todo", {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify(body)
				});
			} catch (err) {
				console.error(err);
			}
		}
	}

	return(
		<form className="create-todo-form" onSubmit={postTodo}>
			<input type="text" value={description} onChange={e => setDescription(e.target.value)} />
			<button type="submit">Add</button>
		</form>
	);
}

export default CreateTodo;