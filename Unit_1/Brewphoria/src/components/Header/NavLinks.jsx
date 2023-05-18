import { useState } from "react";
import "./NavLinks.css";

const NavLinks = (props) => {
	const [topBurgerActive, setTopBurgerActive] = useState("");
	const [bottomBurgerActive, setBottomBurgerActive] = useState("");
	const [middleBurgerActive, setMiddleBurgerActive] = useState("");
	const [navBarActive, setNavBarActive] = useState("")

	const animateBurger = () => {
		if (topBurgerActive === "") {
			setTopBurgerActive("top-burger-active");
			setBottomBurgerActive("bottom-burger-active");
			setMiddleBurgerActive("middle-burger-active");
			setNavBarActive("nav-bar-active");
		} else {
			setTopBurgerActive("");
			setBottomBurgerActive("");
			setMiddleBurgerActive("");
			setNavBarActive("")
		}
	};

	return (
		<div className="nav">
			<nav className={`nav-bar ` + navBarActive}>{props.onHeaderClick}</nav>
			<span className="burger" onClick={animateBurger}>
				<div className={`burger-slice ` + topBurgerActive}></div>
				<div className={`burger-slice ` + middleBurgerActive}></div>
				<div className={`burger-slice ` + bottomBurgerActive}></div>
			</span>
		</div>
	);
};

export default NavLinks;
