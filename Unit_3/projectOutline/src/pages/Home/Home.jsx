import classes from "./Home.module.css";
import { NavLink } from "react-router-dom";

const Home = () => {
	return (
		<main className={classes.Home}>
			<header>
				<h1>Home</h1>
				<nav className={classes.nav}>
					<NavLink
						to="/"
						className={({ isActive }) =>
							isActive ? classes.active : undefined
						}
                        end
					>
						Home
					</NavLink>
					<NavLink
						to="/products"
						className={({ isActive }) =>
							isActive ? classes.active : undefined
						}
					>
						Products
					</NavLink>
				</nav>
			</header>
		</main>
	);
};

export default Home;
