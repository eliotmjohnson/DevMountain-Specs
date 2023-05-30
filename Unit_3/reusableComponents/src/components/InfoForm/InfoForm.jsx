import classes from "./InfoForm.module.css";

const InfoForm = (props) => {
    return (
        <form className={classes["info-form"]} onSubmit={props.onSubmit}>
            <input className={classes.inputs} id="first-name" type="text" placeholder="First Name" />
            <input className={classes.inputs} id="last-name" type="text" placeholder="Last Name" />
			<input className={classes.inputs} id="age" type="text" placeholder="Age"/>
			{props.children}
		</form>
	);
};

export default InfoForm;
