import classes from "./Products.module.css";
import { NavLink } from "react-router-dom";

const Products = () => {
	return (
		<main className={classes.Products}>
			<header>
				<h1>Products</h1>
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

export default Products;
