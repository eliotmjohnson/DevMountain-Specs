import "./reset.css";
import "./App.css";
import { StateProvider } from "./state/StateManager";
import {
	createBrowserRouter,
	RouterProvider,
	Outlet,
	ScrollRestoration,
} from "react-router-dom";
import Home from "./pages/Home/Home";
import MovieDetails from "./pages/MovieDetails/MovieDetails";

const router = createBrowserRouter([
	{
		path: "/",
		element: (
			<>
				<Outlet />
				<ScrollRestoration
					getKey={(location, matches) => {
						return location.pathname;
					}}
				/>
			</>
		),
		children: [
			{ index: true, element: <Home /> },
			{ path: "movie-details/:movieId", element: <MovieDetails /> },
		],
	},
]);

function App() {
	return (
		<StateProvider>
			<RouterProvider router={router} />
		</StateProvider>
	);
}

export default App;
