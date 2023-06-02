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
	
	return (
		<header className={headerClassList}>
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
