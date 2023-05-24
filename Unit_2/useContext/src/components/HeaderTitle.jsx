import "./HeaderTitle.css";
import {
	useGlobalState,
	useGlobalStateDispatch,
} from "../StateManager/StateManager";
import { useRef } from "react";

const HeaderTitle = () => {
	const state = useGlobalState();
	const stateDispatcher = useGlobalStateDispatch();
	const input = useRef(null);

	const handleClick = (e) => {
		if (e.target.localName === "h1") {
			stateDispatcher({
				type: "title clicked",
				target: e.target.localName,
			});
		}
	};

	const handleChange = (e) => {
		stateDispatcher({
			type: "input changed",
			value: e.target.value,
		});
	};

	const handleMouseOver = (e) => {
		input.current.focus();
	};

	const handleMouseOut = (e) => {
		input.current.blur();
	};

	return (
		<div className="container">
			<h1 onClick={handleClick} className={`title ` + state.titleClasses}>
				HeaderTitle
			</h1>
			<div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
				<input type="text" onChange={handleChange} ref={input} />
			</div>
			<h2>{state.inputValue}</h2>
		</div>
	);
};

export default HeaderTitle;
