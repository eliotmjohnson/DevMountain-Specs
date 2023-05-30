import classes from "./Button.module.css";

const Button = (props) => {
	return (
		<button className={classes[props.variant]} style={props.style} onClick={props.onClick}>
			{props.children}
		</button>
	);
};

export default Button;
