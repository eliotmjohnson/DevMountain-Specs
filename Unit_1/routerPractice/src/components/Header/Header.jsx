import { Link } from "react-router-dom";
import "./Header.css";

const Header = (props) => {
	return (
		<div className="header">
			<nav className="nav">
				<Link to="/">
					Home
				</Link>
			</nav>
			<h1 className="title">{props.title}</h1>
			<nav className="nav">
				<Link to="/profile/C91F82BJ76YO7MV5S4VXF751ECR7OS">
					Profile
				</Link>
			</nav>
		</div>
	);
};

export default Header;
