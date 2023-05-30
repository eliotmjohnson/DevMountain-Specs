import classes from "./Home.module.css";
import Header from "../../components/Header/Header";
import MovieDisplay from "../../components/MovieDisplay/MovieDisplay";

const Home = () => {
	return (
		<main className={classes.Home}>
			<Header>Movie Gallery</Header>
			<MovieDisplay />
		</main>
	);
};

export default Home;
