import "./reset.css";
import "./App.css";
import { useState } from "react";
import Header from "../components/Header/Header";
import PictureBox from "../components/PictureBox/PictureBox";
import { pic1, pic2, pic3, pic4, pic5 } from "../assets/Images/drinks/images";

const App = () => {
	const [navText, setNavText] = useState(
		<>
			<a href="">Drinks</a>
			<a href="">Recipes</a>
			<a href="">Catering</a>
		</>
	);

	return (
		<>
			<Header setText={setNavText} text={navText} />
			<section className="pictures">
				<PictureBox url={pic1} />
				<PictureBox url={pic2}></PictureBox>
				<PictureBox url={pic3}></PictureBox>
				<PictureBox url={pic4}></PictureBox>
				<PictureBox url={pic5}></PictureBox>
			</section>
		</>
	);
};

export default App;
