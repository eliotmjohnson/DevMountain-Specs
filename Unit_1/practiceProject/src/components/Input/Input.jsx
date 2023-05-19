import "./Input.css";
import { useState } from "react";

const Input = (props) => {
	const [input, setInput] = useState("");

	const captureInput = (e) => {
		setInput(e.target.value);
	};

	const submitTodo = (e) => {
		e.preventDefault();
		if (input.trim() !== "") {
			const data = {
				id: Math.random(),
				item: input,
				checked: false,
				edit: false,
				needEdit: true,
			};
			props.sendList(data);
			setInput("");
		} else {
			alert("Put something in text box!!");
		}
	};

	return (
		<form className="form" onSubmit={submitTodo}>
			<input type="text" value={input} onChange={captureInput} />
			<button>Submit</button>
		</form>
	);
};

export default Input;
