import classes from "./MovieDisplay.module.css";
import axios from "axios";
import { useEffect } from "react";
import { useGlobalState } from "../../state/StateManager";
import { useNavigate } from "react-router-dom";
import MovieCard from "../MovieCard/MovieCard";

const MovieDisplay = () => {
	const { dispatch, state, refs } = useGlobalState();
	const navigate = useNavigate();

	const getMovies = () => {
		axios
			.get("https://api.themoviedb.org/3/movie/popular", {
				headers: {
					Authorization: import.meta.env.VITE_MOVIE_AUTH_TOKEN,
				},
			})
			.then((res) => {
				const movies = res.data.results;
				dispatch({ type: "movies fetched", data: movies });
			})
			.catch((error) => console.log(error));
	};

	useEffect(() => {
		getMovies();
	}, []);

	const goToDetails = (id) => {
		navigate(`/movie-details/${id}`);
	};

	const checkRef = () => {
		const map = refs.ref.current;
		const node = map.get(10);
		node.scrollIntoView({
			behavior: "smooth",
			block: "nearest",
			inline: "center",
		});
	};

	return (
		<section className={classes["movie-display"]}>
			<button onClick={checkRef}>check</button>
			{state.movies.map((movie, index) => {
				return (
					<MovieCard
						ref={(node) => {
							const map = refs.ref.current
							if (node) {
								map.set(index, node);
							} else {
								map.delete(index);
							}
						}}
						key={movie.id}
						title={movie.original_title}
						poster={movie.poster_path}
						voteAverage={movie.vote_average}
						onClick={() => goToDetails(movie.id)}
					/>
				);
			})}
		</section>
	);
};

export default MovieDisplay;
