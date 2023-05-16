import { useState } from "react";
import "./Header.css";
import NavLinks from "./NavLinks";

const Header = () => {
	const [headerClassList, setHeaderClassList] = useState("header");
    const [headerTitleText, setHeaderTitleText] = useState("My Header");
    const [headerWords, setHeaderWords] = useState("")
	const [navText, setNavText] = useState(
		<>
			<a href="">Link</a>
			<a href="">Link</a>
			<a href="">Link</a>
		</>
	);

	const headerAnimation = () => {
		if (headerClassList === "header") {
			setHeaderClassList("header header-animation");
			setHeaderTitleText("😡😡😡");
            setNavText("😡😡😡");
            setHeaderWords(<h1 id="lol">DON'T TOUCH ME!!</h1>)
			setTimeout(() => {
				setHeaderClassList("header");
				setHeaderTitleText("My Header");
				setNavText(
					<>
						<a href="">Link</a>
						<a href="">Link</a>
						<a href="">Link</a>
					</>
                );
                setHeaderWords("");
			}, 2000);
		}
	};

	return (
		<header className={headerClassList} onClick={headerAnimation}>
            <h1>{headerTitleText}</h1>
            {headerWords}
			<NavLinks onHeaderClick={navText} />
		</header>
	);
};

export default Header;
