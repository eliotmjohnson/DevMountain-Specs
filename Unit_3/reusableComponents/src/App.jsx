import "./reset.css";
import "./App.css";
import { useRef, useState } from "react";
import Button from "./components/Button/Button";
import InfoForm from "./components/InfoForm/InfoForm";
import DivTest from "./components/DivTest";

function App() {
	const [formData, setFormData] = useState({});
	const form = useRef();

	const clickHandler = (e) => {
		e.preventDefault();
		form.current.party();
		let data = {
			firstName: form.current.firstName.value,
			lastName: form.current.lastName.value,
			age: form.current.age.value,
		};
		setFormData(data);
	};

	return (
		<>
			<InfoForm ref={form}>
				<Button variant="default" onClick={clickHandler}>
					Submit
				</Button>
			</InfoForm>
			<h1>First Name: {formData.firstName}</h1>
			<h1>Last Name: {formData.lastName}</h1>
			<h1 className="age">Age: {formData.age}</h1>
			<DivTest></DivTest>
			<DivTest></DivTest>
		</>
	);
}

export default App;
