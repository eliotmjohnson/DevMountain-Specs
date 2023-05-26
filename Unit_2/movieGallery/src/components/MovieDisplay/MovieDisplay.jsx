import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import "./MovieDisplay.css";
import MovieCard from "./MovieCard";
import axios from "axios";

const MovieDisplay = (props) => {
	const [movieData, setMovieData] = useState([]);
	const [watchlist, setWatchlist] = useState([]);

	const getMovieData = () => {
		const instance = axios.create({
			headers: {
				Authorization:
					`${import.meta.env.VITE_MOVIE_API_KEY}`,
			},
		});

		instance
			.get(`https://api.themoviedb.org/3/movie/top_rated`)
			.then((res) => {
				const movieArr = res.data.results;

				setMovieData(
					movieArr.map((movie) => {
						return {
							title: movie.original_title,
							releaseDate: movie.release_date,
							description: movie.overview,
							image: movie.poster_path,
							inWatchlist: false,
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
			setMovieData((prev) => {
				return prev.map((movie) => {
					if (movie.title === title) {
						return { ...movie, inWatchlist: true };
					} else return movie;
				});
			});
			setWatchlist((prev) => {
				return [...prev, sortedMovie[0]];
			});
		} else {
			setMovieData((prev) => {
				return prev.map((movie) => {
					if (movie.title === title) {
						return { ...movie, inWatchlist: false };
					} else return movie;
				});
			});
			setWatchlist((prev) => {
				return prev.filter((movie) => movie.title !== title);
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
						classes=""
						title={movie.title}
						description={movie.description}
						releaseDate={movie.releaseDate}
						image={`https://image.tmdb.org/t/p/original${movie.image}`}
						sendMovieData={sendToWatchlist}
						buttonTitle={
							!movie.inWatchlist ? "Add to Watchlist" : "Remove From Watchlist"
						}
					/>
				);
			})}
			{props.modal
				? createPortal(
						<section className="watchlist" onClick={removeModal}>
							<h1>Watchlist</h1>
							<div className="watchlist-container">
								<main className="movie-display">
									{watchlist.map((movie) => {
										return (
											<MovieCard
												key={movie.title}
												classes="watchlist-card"
												title={movie.title}
												description={movie.description}
												releaseDate={movie.releaseDate}
												image={`https://image.tmdb.org/t/p/original${movie.image}`}
												sendMovieData={sendToWatchlist}
												buttonTitle="Remove From Watchlist"
											/>
										);
									})}
								</main>
							</div>
						</section>,
						document.getElementById("watchlist-modal")
				  )
				: ""}
		</main>
	);
};

export default MovieDisplay;
