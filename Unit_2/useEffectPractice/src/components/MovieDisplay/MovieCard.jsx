import "./MovieCard.css";

const MovieCard = (props) => {
	const sendMovieToWatchlist = (title) => {
		props.sendMovieData(title);
	};
	
	return (
		<div className="movie-card">
			<img src={props.image} />
			<h1>{props.title}</h1>
			<h3>{props.releaseDate}</h3>
			<p>{props.description}</p>
			{props.button === "true" ? <button onClick={() => sendMovieToWatchlist(props.title)}>
				Add to Watchlist
			</button> : ""}
		</div>
	);
};

export default MovieCard;
