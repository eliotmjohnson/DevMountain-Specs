import { useRef, useState } from "react";
import { createPortal } from "react-dom";
import "./MyForm.css";

const MyForm = () => {
	const inputData = useRef();
	const [values, setValues] = useState("");

	const submitForm = (e) => {
		e.preventDefault();
		const value = inputData.current.value;
		setValues((prev) => [...prev, value]);
		inputData.current.value = "";
	};

	const deleteItem = (i) => {
		setValues((prev) => {
			return prev.filter((item, index) => i !== index);
		});
	};
	return (
		<>
			{createPortal(
				<form onSubmit={submitForm}>
					<input type="text" ref={inputData} />
					{values === ""
						? ""
						: values.map((value, index) => {
								return (
									<h1
										style={{ cursor: "pointer", width: "max-content" }}
										onClick={() => deleteItem(index)}
										key={index}
									>
										{value}
									</h1>
								);
						  })}
				</form>,
				document.getElementById("portal-test")
			)}
		</>
	);
};

export default MyForm;
