import "./reset.css";
import "./App.css";
import { useState } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import PictureBox from "../components/PictureBox/PictureBox";

const App = () => {
	const [navText, setNavText] = useState(
		<>
			<a href="">Link</a>
			<a href="">Link</a>
			<a href="">Link</a>
		</>
	);

	return (
		<>
			<Header setText={setNavText} text={navText} />
			<PictureBox url="https://media.istockphoto.com/id/176230653/photo/beach-dog.jpg?b=1&s=170667a&w=0&k=20&c=ajot5CSkoBsLIwjAxY0eIKSDJtGpUZomjs4n-9ClAAk="></PictureBox>
			<PictureBox url="https://www.liveabout.com/thmb/F92wWWHySS4OVSLlKIiXGFOdutA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/droids-58b8c8df3df78c353c209f9c.jpg"></PictureBox>
			<PictureBox url="https://www.rd.com/wp-content/uploads/2019/04/the-star-wars-episode-v-empire-strikes-back-1980-scaled.jpg"></PictureBox>
			<PictureBox url="https://res.cloudinary.com/jerrick/image/upload/c_scale,f_jpg,q_auto/y3mdgvccfyvmemabidd0.jpg"></PictureBox>
			<PictureBox url="https://static.boredpanda.com/blog/wp-content/uploads/2015/10/father-in-law__605.jpg"></PictureBox>
			<Footer />
		</>
	);
};

export default App;
