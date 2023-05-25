import "./InputForm.css";
import { useRef } from "react";
import { useGlobalDispatch } from "../../store/StateManager";

const InputForm = () => {
	const inputValue = useRef();
	const dispatch = useGlobalDispatch();
	console.log("app running")
	const addTodo = (e) => {
		e.preventDefault();
		if (inputValue.current.value.trim() !== "") {
			const todo = inputValue.current.value;

			dispatch({ type: "added todo", todo: todo, edit: false, menu: false });

			inputValue.current.value = "";
		} else alert("Make sure you put in a To-Do!");
	};

	return (
		<form className="input-form" onSubmit={addTodo}>
			<input ref={inputValue} type="text" />
			<button>Add To-Do</button>
		</form>
	);
};

export default InputForm;
