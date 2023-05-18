import { useInView } from "react-intersection-observer";
import { useState } from "react";
import { useEffect } from "react";
import "./PictureBox.css";

const PictureBox = (props) => {
	const [options, setOptions] = useState({
		triggerOnce: true,
		threshold: 0.8,
	});

	const [ref, isVisible] = useInView(options);

	const changeThresh = () => {
		setOptions((prev) => {
			return {
				...prev,
				threshold: 0.6,
			};
		});
	};

	useEffect(() => {
		window.addEventListener("scroll", changeThresh);
	}, []);

	return (
		<div ref={ref} className="box">
			<img
				className={isVisible ? "before  hello-world" : "before"}
				src={props.url}
			/>
		</div>
	);
};

export default PictureBox;
