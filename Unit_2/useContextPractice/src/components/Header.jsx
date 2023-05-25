import "./Header.css";
import { useState } from "react";
import { useGlobalState } from "../StateManager/StateManager";
import HeaderTitle from "./HeaderTitle";

const Header = () => {
	const { state, refs } = useGlobalState();
	const [title, setTitle] = useState("");
	const titleChange = (e) => {
		if (e.target.localName === "div") {
			const titleStyles = refs.titleRef.current.style;
			const mainTitleStyles = refs.anotherRef.current.style;
			titleStyles.transition = "color .5s, font-size .5s";
			titleStyles.color = titleStyles.color === "blue" ? "" : "blue";
			titleStyles.fontSize = titleStyles.fontSize === "10rem" ? "" : "10rem";
			mainTitleStyles.color =
				mainTitleStyles.color === "blue" ? "" : "blue";
			setTitle((prev) => {
				return prev === "Hello World" ? "toggle" : "Hello World";
			});
		}
	};
	return (
		<div onClick={titleChange} className="header">
			<div className={state.headerClasses}>
				<HeaderTitle></HeaderTitle>
				<h1 ref={refs.anotherRef}>{title}</h1>
			</div>
		</div>
	);
};
export default Header;
