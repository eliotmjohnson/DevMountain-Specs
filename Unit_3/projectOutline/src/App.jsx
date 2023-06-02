import "./assets/reset.css"
import "./App.css";
import {
	createBrowserRouter,
	RouterProvider,
	Outlet,
	ScrollRestoration,
} from "react-router-dom";
import { StateProvider } from "./state/StateManager";
import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";

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
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "/products",
				element: <Products />,
			},
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
