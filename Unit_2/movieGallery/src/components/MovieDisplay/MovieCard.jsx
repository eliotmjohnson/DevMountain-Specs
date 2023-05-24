import "./MovieCard.css";
import { useState } from "react";

const MovieCard = (props) => {
	const sendMovieToWatchlist = (title) => {
		props.sendMovieData(title);
	};

	return (
		<div className={`movie-card ` + props.classes}>
			<img src={props.image} />
			<h1>{props.title}</h1>
			<h3>{props.releaseDate}</h3>
			<p>{props.description}</p>
			<button onClick={() => sendMovieToWatchlist(props.title)}>
				{props.buttonTitle}
			</button>
		</div>
	);
};

export default MovieCard;
