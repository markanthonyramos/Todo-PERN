import CreateTodo from "./CreateTodo";
import ReadTodo from "./ReadTodo";
import "./css/style.css"

const Todo = () => {
	return(
		<div className="todo-wrapper">
			<CreateTodo />
			<ReadTodo />
		</div>
	);
}

export default Todo;