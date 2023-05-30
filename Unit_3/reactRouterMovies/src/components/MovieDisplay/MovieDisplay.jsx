import classes from "./MovieDisplay.module.css";
import axios from "axios";
import { useGlobalState } from "../../state/StateManager";
import { useNavigate } from "react-router-dom";
import MovieCard from "../MovieCard/MovieCard";
import { useEffect } from "react";

const MovieDisplay = () => {
	const { dispatch, state } = useGlobalState();
	const navigate = useNavigate();

	const getMovies = () => {
		axios
			.get(
				"https://api.themoviedb.org/3/movie/popular",
				{
					headers: {
						Authorization: import.meta.env.VITE_MOVIE_AUTH_TOKEN,
					},
				}
			)
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
        navigate(`/movie-details/${id}`)
    }

	return (
		<section className={classes["movie-display"]}>
			{state.movies.map((movie) => {
				return (
					<MovieCard
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
