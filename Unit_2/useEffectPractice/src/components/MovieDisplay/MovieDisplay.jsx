import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import "./MovieDisplay.css";
import MovieCard from "./MovieCard";
import axios from "axios";

const MovieDisplay = (props) => {
	const [movieData, setMovieData] = useState([]);
	const [watchlist, setWatchlist] = useState([]);

	const getMovieData = () => {
		axios
			.get(
				`https://api.themoviedb.org/3/movie/popular?api_key=${
					import.meta.env.VITE_MOVIE_API_KEY
				}`
			)
			.then((res) => {
				const movieArr = res.data.results;

				setMovieData(
					movieArr.map((movie) => {
						return {
							title: movie.original_title,
							releaseDate: movie.release_date,
							description: movie.overview,
							image: movie.poster_path,
						};
					})
				);
			})
			.catch((error) => console.log(error));
	};

	useEffect(() => {
		getMovieData();
	}, []);

	const sendToWatchlist = (title) => {
		const sortedMovie = movieData.filter((movie) => movie.title === title);

		if (!watchlist.some((movie) => movie.title === title)) {
			setWatchlist((prev) => {
				return [...prev, sortedMovie[0]];
			});
		}
	};

	const removeModal = (e) => {
		if (e.target.localName === "section" || e.target.localName === "main") {
			props.setmodal(false);
		}
	};
	return (
		<main className="movie-display">
			{movieData.map((movie) => {
				return (
					<MovieCard
						key={movie.title}
						title={movie.title}
						description={movie.description}
						releaseDate={movie.releaseDate}
						image={`https://image.tmdb.org/t/p/original${movie.image}`}
						sendMovieData={sendToWatchlist}
						button="true"
					></MovieCard>
				);
			})}
			{props.modal
				? createPortal(
						<section className="watchlist" onClick={removeModal}>
							<h1>Watchlist</h1>
							<main className="movie-display">
								{watchlist.map((movie) => {
									return (
										<MovieCard
											key={movie.title}
											title={movie.title}
											description={movie.description}
											releaseDate={movie.releaseDate}
											image={`https://image.tmdb.org/t/p/original${movie.image}`}
											button="false"
										></MovieCard>
									);
								})}
							</main>
						</section>,
						document.getElementById("watchlist-modal")
				  )
				: ""}
		</main>
	);
};

export default MovieDisplay;
