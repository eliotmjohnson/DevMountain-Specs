import "./reset.css";
import "./App.css";
import { useState } from "react";
import Header from "./components/Header/Header";
import MovieDisplay from "./components/MovieDisplay/MovieDisplay";

function App() {
	const [modal, setModal] = useState(false);

	const showModal = () => {
		setModal(true);
	};
	return (
		<>
			<Header showModal={showModal}></Header>
			<MovieDisplay modal={modal} setmodal={setModal}></MovieDisplay>
		</>
	);
}

export default App;
