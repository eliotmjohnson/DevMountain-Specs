import classes from "./InfoForm.module.css";
import { useImperativeHandle, forwardRef, useRef } from "react";

const InfoForm = forwardRef((props, ref) => {
	const firstName = useRef();
	const lastName = useRef();
    const age = useRef();
    
	useImperativeHandle(
		ref,
        () => {
            return {
                firstName: firstName.current,
                lastName: lastName.current,
				age: age.current, 
				party:  () => {
					firstName.current.style.backgroundColor = "red"
					lastName.current.style.backgroundColor = "green"
					age.current.style.backgroundColor = "purple"
				}
            }
		},
		[]
    );
    
	return (
		<form className={classes["info-form"]} onSubmit={props.onSubmit}>
			<input
				ref={firstName}
				className={classes.inputs}
				id="first-name"
				type="text"
				placeholder="First Name"
			/>
			<input
				ref={lastName}
				className={classes.inputs}
				id="last-name"
				type="text"
				placeholder="Last Name"
			/>
			<input
				ref={age}
				className={classes.inputs}
				id="age"
				type="text"
				placeholder="Age"
			/>
			{props.children}
		</form>
	);
});

export default InfoForm;
