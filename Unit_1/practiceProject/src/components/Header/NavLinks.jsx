import "./NavLinks.css";

const NavLinks = (props) => {
	return (
		<nav className="nav-bar">
			{props.onHeaderClick}
		</nav>
	);
};

export default NavLinks;
