import "./Header.css"

const Header = (props) => {
	return (
		<div className="header">
			<h1>Eliot's Movie Gallery</h1>
			<button onClick={props.showModal}>Watchlist</button>
		</div>
	);
};

export default Header;
