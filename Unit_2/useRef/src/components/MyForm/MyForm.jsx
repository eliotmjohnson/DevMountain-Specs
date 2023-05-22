import { useRef } from "react";
import "./MyForm.css";

const MyForm = () => { 
    const inputData = useRef("");

    const submitForm = (e) => {
        e.preventDefault()
        inputData.current.value = ""
    }
    
	return (
		<form onSubmit={submitForm}>
            <input type="text" ref={inputData} />
		</form>
	);
};

export default MyForm;
