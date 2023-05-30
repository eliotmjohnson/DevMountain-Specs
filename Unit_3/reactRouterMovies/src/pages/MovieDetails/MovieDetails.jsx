import classes from "./MovieDetails.module.css";
import { useParams, useNavigate } from "react-router-dom";
import { useGlobalState } from "../../state/StateManager";
import Header from "../../components/Header/Header";
import { useEffect } from "react";

const MovieDetails = () => {
	const params = useParams();
	const navigate = useNavigate();
	const { state, dispatch } = useGlobalState();

	const getSelectedMovie = () => {
		const selectedMovieIndex = state.movies.findIndex(
			(movie) => movie.id === +params.movieId
		);
		const selectedMovieData = state.movies[selectedMovieIndex];

		dispatch({ type: "details clicked", data: selectedMovieData });
	};

	useEffect(() => {
		window.scrollTo(0, 0);
		getSelectedMovie()
	}, []);

	const goBack = () => {
		navigate("..");
	};

	return (
		<main className={classes["movie-details"]}>
			{state.selectedMovie.id === +params.movieId ? (
				<>
					<Header>{state.selectedMovie.original_title}</Header>
					<button onClick={goBack}>Back</button>
					<img
						className={classes.poster}
						src={`http://image.tmdb.org/t/p/original${state.selectedMovie.poster_path}`}
					/>
					<h1>{state.selectedMovie.release_date}</h1>
					<p>{state.selectedMovie.overview}</p>
					<h3>Vote Average: {state.selectedMovie.vote_average}</h3>
					<h2>Vote Count: {state.selectedMovie.vote_count}</h2>
				</>
			) : undefined}
		</main>
	);
};

export default MovieDetails;
