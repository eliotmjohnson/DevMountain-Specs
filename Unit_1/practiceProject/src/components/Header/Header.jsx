import { useState } from "react";
import "./Header.css";
import logo from "../../assets/Images/drinks.svg";
import NavLinks from "./NavLinks";

const Header = (props) => {
	const [headerClassList, setHeaderClassList] = useState("header");
	const [headerTitleText, setHeaderTitleText] = useState("Brewphoria");
	const [headerWords, setHeaderWords] = useState(
		<img className="logo" src={logo}></img>
	);

	const headerAnimation = (e) => {
		if (headerClassList === "header" && e.target.classList.value === "header") {
			setHeaderClassList("header header-animation");
			setHeaderTitleText("😡😡😡");
			setHeaderWords(<h1 id="lol">DON'T TOUCH ME!!</h1>);
			setTimeout(() => {
				setHeaderClassList("header");
				setHeaderTitleText("Brewphoria");
				setHeaderWords(<img className="logo" src={logo}></img>);
			}, 1000);
		}
	};

	return (
		<header className={headerClassList} onClick={headerAnimation}>
			<h1>
				{headerTitleText}
				<img className="header-logo" src={logo}></img>
			</h1>
			{headerWords}
			<NavLinks onHeaderClick={props.text} />
		</header>
	);
};

export default Header;
