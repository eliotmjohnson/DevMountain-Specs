import classes from "./MovieCard.module.css";

const MovieCard = (props) => {


	return (
		<div className={classes["movie-card"]}>
			<img
                className={classes.poster}
                src={`http://image.tmdb.org/t/p/original${props.poster}`}
			/>
            <h1 className={classes.title}>{props.title}</h1>
            <p className={classes.vote}>Vote Average: {props.voteAverage}</p>
			<button onClick={props.onClick}>Details</button>
		</div>
	);
};

export default MovieCard;
