import { useState } from "react";
import "./Header.css";
import NavLinks from "./NavLinks";

const Header = (props) => {
	const [headerClassList, setHeaderClassList] = useState("header");
	const [headerTitleText, setHeaderTitleText] = useState("Picture Gallery");
	const [headerWords, setHeaderWords] = useState("");

	const headerAnimation = () => {
		if (headerClassList === "header") {
			setHeaderClassList("header header-animation");
			setHeaderTitleText("😡😡😡");
			props.setText("😡😡😡");
			setHeaderWords(<h1 id="lol">DON'T TOUCH ME!!</h1>);
			setTimeout(() => {
				setHeaderClassList("header");
				setHeaderTitleText("Picture Gallery :)");
				props.setText(
					<>
						<a href="">Link</a>
						<a href="">Link</a>
						<a href="">Link</a>
					</>
				);
				setHeaderWords("");
			}, 1000);
		}
	};

	return (
		<header className={headerClassList} onClick={headerAnimation}>
			<h1>{headerTitleText}</h1>
			{headerWords}
			<NavLinks onHeaderClick={props.text} />
		</header>
	);
};

export default Header;