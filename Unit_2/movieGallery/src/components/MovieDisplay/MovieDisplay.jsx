import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import "./MovieDisplay.css";
import MovieCard from "./MovieCard";
import axios from "axios";

const MovieDisplay = (props) => {
	const [movieData, setMovieData] = useState([]);
	const [watchlist, setWatchlist] = useState([]);
	const [isLoading, setLoading] = useState(false);
	const [page, setPage] = useState(1);
	const [error, setError] = useState({ value: false, error: "" });
	const [classChange, setClassChange] = useState();
	const [timeout, setStateTimeout] = useState(0);

	const getMovieData = async () => {
		setClassChange((prev) => "");

		setTimeout(() => {
			const instance = axios.create({
				headers: {
					Authorization: `${import.meta.env.VITE_MOVIE_API_KEY}`,
				},
			});

			setError((prev) => {
				return { ...prev, value: false, error: error };
			});

			setLoading(true);
			instance
				.get(`https://api.themoviedb.org/3/movie/popular/?page=${page}`)
				.then((res) => {
					setLoading(false);
					const movieArr = res.data.results;

					setMovieData(
						movieArr.map((movie) => {
							return {
								id: movie.id,
								title: movie.original_title,
								releaseDate: movie.release_date,
								description: movie.overview,
								image: movie.poster_path,
								inWatchlist: watchlist.some((elem) => elem.id === movie.id)
									? true
									: false,
							};
						})
					);
					setClassChange((prev) => "movie-display-appear");
				})
				.catch((error) =>
					setError((prev) => {
						return { ...prev, value: true, error: error };
					})
				);
		}, timeout);
	};

	useEffect(() => {
		getMovieData();
	}, [page]);

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

	const nextPage = () => {
		setStateTimeout(400);
		setPage((prev) => {
			return prev + 1;
		});
	};

	const prevPage = () => {
		if (page > 1) {
			setPage((prev) => {
				return prev - 1;
			});
		}
	};

	return (
		<div className="movie-display-container">
			<div className="buttons">
				<button onClick={prevPage}>Back</button>
				<button onClick={nextPage}>Next</button>
			</div>
			<main className={`movie-display ` + classChange}>
				{isLoading ? (
					<h1 style={{ fontSize: "5rem", color: "aliceblue" }}>
						{error.value
							? `${String(error.error).replace("Axios", "")}`
							: "Loading..."}
					</h1>
				) : (
					<>
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
										!movie.inWatchlist
											? "Add to Watchlist"
											: "Remove From Watchlist"
									}
								/>
							);
						})}
					</>
				)}
				{props.modal
					? createPortal(
							<section className="watchlist" onClick={removeModal}>
								<h1>Watchlist</h1>
								<div className="watchlist-container">
									<main className="movie-display movie-display-appear">
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
		</div>
	);
};

export default MovieDisplay;
